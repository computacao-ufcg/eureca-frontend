import React, { useState, useEffect } from 'react';

import Header from '../../../newComponents/Header';
import MyLoading from '../../../newComponents/MyLoading';

import './styles.css';

import { api_AS } from './../../../services/api'
import ListEgressos from '../SeeMore/listEgressos'
import { Pagination } from 'rsuite';
import { FiSearch } from 'react-icons/fi';
import './styles.css'

const SeeMore = () => {

    const [data, setData] = useState([]);
    const [dataMaster, setDataMaster] = useState([]);
    const [page, setPage] = useState(0);
    const [admission, setAdmission] = useState("");
    const [graduation, setGraduation] = useState("");
    const [name, setName] = useState("");

    const [search, setSearch] = useState('');
    const [searchType, setSearchType] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        handleProfile(page);
    }, [])

    const handleProfile = async (page) => {
        setLoading(true);
        let query = 'match/search/' + page + `?admission=${admission}&graduation=${graduation}&name=${name}`
        const res = await api_AS.get(query, { headers: { 'Authentication-Token': sessionStorage.getItem('eureca-token') } });

        if(res.status === 200){
            setDataMaster(res.data.content);
            setData(res.data.content);
            setLoading(false);
        }else{
            console.error("Response error");
        }
    }

    const handlePage = (eventKey) => {
        setPage(eventKey - 1);
        handleProfile(eventKey - 1);
    }

    const handleSearch = (event) => {
        if (event.keyCode === 13) {
            setSearch(event.target.value);

            if(searchType === "admission"){
                setData(dataMaster.filter( e => e.admission === event.target.value));
            }else if(searchType === "graduation") {
                setData(dataMaster.filter( e => e.graduation === event.target.value));
            }else if(searchType === "name"){
                setData(dataMaster.filter( e => e.name.toLowerCase().includes(event.target.value.toLowerCase())));
            }
        }
    }

    return (

        <React.Fragment>
            <div className={'main-seemore'}>
                <div className={'header-container'}>
                    <Header />
                </div>
                <div className={'main-content'}>
                    <div className={'main-container-seemore'}>

                        <div className={'container-title-seemore'}>
                            <h1>VER MAIS</h1>
                        </div>
                        <div className="seemore-input-boxes">

                            <div className="seemore-input-box" onClick={() => setSearchType("name")}>
                                <div>
                                    <FiSearch size={25} />
                                </div>
                                <input onKeyUp={handleSearch} type="text" placeholder="Buscar por nome" />
                            </div>
                            <div className="seemore-input-box" onClick={() => setSearchType("admission")}>
                                <div>
                                    <FiSearch size={25} />
                                </div>
                                <input onKeyUp={handleSearch} type="text" placeholder="Buscar por período de admissão" />
                            </div>
                            <div className="seemore-input-box" onClick={() => setSearchType("graduation")}>
                                <div>
                                    <FiSearch size={25} />
                                </div>
                                <input onKeyUp={handleSearch} type="text" placeholder="Buscar por período de graduação" />
                            </div>
                        </div>
                        {
                            loading ? <MyLoading /> :
                            <div className={'listEgressos'}>
                                <ListEgressos listData={data} />
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
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default SeeMore
