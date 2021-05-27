import React, { useState, useEffect } from "react";
import { Table } from "rsuite";
import { api_AS } from "../../../../../services/api";

import { Confirm, MyLoading, NoDataFound } from "../../../../../newComponents";

import { FiTrash2 } from "react-icons/fi";

import "./styles.css";

const { Column, HeaderCell, Cell } = Table;

const Matchs = () => {
  const [page, setPage] = useState(0);
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [cancelMatch, setCancelMatch] = useState("");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    handleClassificados();
  }, []);

  const handleClassificados = async () => {
    setLoading(true);
    const res = await api_AS.get("/match/list/" + page, {
      headers: {
        "Authentication-Token": sessionStorage.getItem("eureca-token"),
      },
    });

    if (res.status === 200) {
      setData(res.data.content);
      setLoading(false);
    } else {
      console.error("Response error");
    }
  };

  const handleCancelMatch = async () => {
    const query = `/match?registration=${cancelMatch.registration}`;

    const res = await api_AS.delete(query, {
      headers: {
        "Authentication-Token": sessionStorage.getItem("eureca-token"),
      },
    });
    if (res.status === 200) {
      setData(data.filter(e => e.registration !== cancelMatch.registration));
    }
  };

  return (
    <div className='matches'>
      {loading ? (
        <MyLoading />
      ) : data.length === 0 ? (
        <div className='matchs-no-data-found'>
          <NoDataFound msg={"Nenhuma associação feita até o momento."} />
        </div>
      ) : (
        <React.Fragment>
          <div className={"matches-table"}>
            <Table
              height={480}
              width={800}
              data={data}
              onRowClick={data => {
                console.log(data);
              }}
            >
              <Column width={400}>
                <HeaderCell>Nome do Egresso</HeaderCell>
                <Cell dataKey='name'></Cell>
              </Column>
              <Column width={120}>
                <HeaderCell>Linkedin</HeaderCell>

                <Cell>
                  {rowData => {
                    return (
                      <span>
                        <a
                          target={"_blank"}
                          href={"https://linkedin.com/in/" + rowData.linkedinId}
                        >
                          Link
                        </a>
                      </span>
                    );
                  }}
                </Cell>
              </Column>
              <Column width={280}>
                <HeaderCell>Desfazer Associação</HeaderCell>
                <Cell>
                  {rowData => (
                    <div
                      className={"delete-button-div"}
                      onClick={() => {
                        setCancelMatch(rowData);
                        setShowModal(true);
                      }}
                    >
                      <FiTrash2 size={20} />
                    </div>
                  )}
                </Cell>
              </Column>
            </Table>
          </div>
          <Confirm
            msg={"Deseja realmente desfazer a Associação?"}
            handleFunction={handleCancelMatch}
            showModal={showModal}
            hideModal={option => {
              setShowModal(option);
            }}
          />
        </React.Fragment>
      )}
    </div>
  );
};
export default Matchs;
