import React, { useEffect, useState } from "react";

import { Table } from "rsuite";

import Confirm from "../../../../../newComponents/Confirm";
import NoDataFound from "../../../../../newComponents/NoDataFound";

import { FiTrash2 } from "react-icons/fi";

import { api_AS } from "../../../../../services/api";

import "./style.css";

const { Column, HeaderCell, Cell } = Table;

const Classified = props => {
  const [page, setPage] = useState(0);
  const [data, setData] = useState([]);
  const [cancelClassified, setCancelClassified] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const [loading, setLoading] = useState(true);
  const [noData, setNoData] = useState(false);

  const myHeaders = {
    headers: { "Authentication-Token": sessionStorage.getItem("eureca-token") },
  };

  useEffect(() => {
    handleClassified();
  }, []);

  const handleClassified = async () => {
    setLoading(true);
    const query = `/employer/classified/${page}`;

    try {
      const res = await api_AS.get(query, myHeaders);

      if (res.status === 200) {
        setData(res.data.content);
        res.data.content.length === 0 ? setNoData(true) : setNoData(false);
        setLoading(false);
      } else {
        console.error("Error: response broken.");
      }
    } catch (e) {
      alert("Error: ", e);
    }
  };

  const handleCancelClassified = async () => {
    const query = `/employer?linkedinId=${cancelClassified.linkedinId}`;

    const res = await api_AS.delete(query, {
      headers: {
        "Authentication-Token": sessionStorage.getItem("eureca-token"),
      },
    });

    if (res.status === 200) {
      setData(data.filter(e => e.linkedinId !== cancelClassified.linkedinId));
    } else {
      console.error("Response error");
    }
  };

  return (
    <div className='classified'>
      {loading ? (
        <h1>Carregando...</h1>
      ) : data.length === 0 ? (
        <div className='classified-no-data-found'>
          {" "}
          <NoDataFound
            msg={"Nenhuma classificação feita até o momento."}
          />{" "}
        </div>
      ) : (
        <Table
          height={480}
          width={900}
          data={data}
          onRowClick={data => {
            console.log(data);
          }}
        >
          <Column width={300}>
            <HeaderCell>Nome da Empresa</HeaderCell>
            <Cell dataKey='name'></Cell>
          </Column>
          <Column width={300}>
            <HeaderCell>Tipo</HeaderCell>
            <Cell dataKey={"type"}></Cell>
          </Column>
          <Column width={100}>
            <HeaderCell>Linkedin</HeaderCell>

            <Cell>
              {rowData => {
                return (
                  <span className='pointer'>
                    <a target={"_blank"} href={rowData.linkedinId}>
                      Link
                    </a>
                  </span>
                );
              }}
            </Cell>
          </Column>
          <Column width={180}>
            <HeaderCell>Desfazer Classificação</HeaderCell>
            <Cell>
              {rowData => (
                <div
                  className='delete-button-div'
                  onClick={() => {
                    setCancelClassified(rowData);
                    setShowModal(true);
                  }}
                >
                  <FiTrash2 size={20} />
                </div>
              )}
            </Cell>
          </Column>
        </Table>
      )}
      <Confirm
        msg={"Deseja realmente desfazer a Classificação?"}
        handleFunction={handleCancelClassified}
        showModal={showModal}
        hideModal={option => {
          setShowModal(option);
        }}
      />
    </div>
  );
};
export default Classified;
