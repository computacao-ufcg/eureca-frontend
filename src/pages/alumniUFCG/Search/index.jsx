import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { FiArrowLeft, FiSearch } from "react-icons/fi";

import Header from "../../../components/Header";
import MyLoading from "../../../components/MyLoading";
import NoDataFound from "../../../components/NoDataFound";

import { api_AB } from "../../../services/api";
import ListAlumni from "../Search/listAlumni";
import { Pagination } from "rsuite";

import "./styles.css";

const Search = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);

  const [name, setName] = useState("");
  const [admission, setAdmission] = useState("");
  const [graduation, setGraduation] = useState("");

  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState(true);
  const [noData, setNoData] = useState(false);

  const history = useHistory();

  const handleProfile = async (page, name, admission, graduation) => {
    setLoading(true);

    let query = `/match/search/${page}?admission=${admission}&graduation=${graduation}&name=${name}`;
    const res = await api_AB.get(query, {
      headers: {
        "Authentication-Token": sessionStorage.getItem("alumni-token"),
      },
    });

    if (res.status === 200) {
      setData(res.data.content);
      res.data.content.length === 0 ? setNoData(true) : setNoData(false);
      setLoading(false);
      setSearch(false);
    } else {
      console.error("Response error");
    }
  };

  const handlePage = eventKey => {
    setPage(eventKey - 1);
    handleProfile(eventKey - 1, name, admission, graduation);
  };

  const handleSearch = () => {
    const $iptName = document.getElementById("ipt-name");
    const $iptAdmission = document.getElementById("ipt-admission");
    const $iptGraduation = document.getElementById("ipt-graduation");
    setName($iptName.value);
    setAdmission($iptAdmission.value);
    setGraduation($iptGraduation.value);
    handleProfile(
      page,
      $iptName.value,
      $iptAdmission.value,
      $iptGraduation.value
    );
  };

  return (
    <React.Fragment>
      <div className='main-content'>
        <Header></Header>
        <div className='main-search'>
          <div className='backdot'>
            <span onClick={() => history.goBack()}>
              <FiArrowLeft size={25} />
            </span>
          </div>
          <div className={"container-title-search"}>
            <h1>BUSCAR</h1>
          </div>
          <div className='main-search-group'>
            <div className='search-input-boxes'>
              <div className='search-input-box'>
                <div>
                  <FiSearch size={25} />
                </div>
                <input
                  id='ipt-name'
                  type='text'
                  placeholder='Buscar por nome'
                />
              </div>
              <div className='search-input-box'>
                <div>
                  <FiSearch size={25} />
                </div>
                <input
                  id='ipt-admission'
                  type='text'
                  placeholder='Buscar por período de admissão'
                />
              </div>
              <div className='search-input-box'>
                <div>
                  <FiSearch size={25} />
                </div>
                <input
                  id='ipt-graduation'
                  type='text'
                  placeholder='Buscar por período de graduação'
                />
              </div>
            </div>
            <button onClick={handleSearch}>Buscar</button>
          </div>
          {search ? (
            <React.Fragment />
          ) : loading ? (
            <MyLoading />
          ) : noData ? (
            <NoDataFound msg={"Nenhum dado encontrado."} />
          ) : (
            <div className='list-alumni'>
              <ListAlumni listData={data} />
              <hr></hr>
              <Pagination
                pages={data.totalPages}
                maxButtons={5}
                onSelect={handlePage}
                activePage={page + 1}
                prev
                next
                first
                last
                ellipsis
                boundaryLinks
              />
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Search;
