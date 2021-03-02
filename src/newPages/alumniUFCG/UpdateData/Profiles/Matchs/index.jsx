import React, { useState, useEffect } from 'react'
import { Table } from 'rsuite';
import { api_AS } from '../../../../../services/api';

import Confirm from '../../../../../newComponents/Confirm';

import { FiTrash2 } from 'react-icons/fi';

import './styles.css';

const { Column, HeaderCell, Cell } = Table;

const Matchs = () => {
    const [page, setPage] = useState(0);
    const [data, setData] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [cancelMatch, setCancelMatch] = useState('');

    useEffect(() => {
        handleClassificados();
    }, [])

    const handleClassificados = async () => {

        const res = await api_AS.get('match/list/' + page, { headers: { 'Authentication-Token': sessionStorage.getItem('eureca-token') } });

        if (res.status === 200) {
            setData(res.data.content);
        } else {
            console.error("Response error");
        }
    }

    const handleCancelMatch = async () => {
        const query = `match?registration=${cancelMatch.registration}`;

        const res = await api_AS.delete(query, { headers: { 'Authentication-Token': sessionStorage.getItem('eureca-token') } });
        if (res.status === 200) {
            setData(data.filter(e => e.registration !== cancelMatch.registration));
        }
    }

    return (
        <div>
            <div className={'matches'}>
                <Table
                    height={480}
                    width={800}
                    data={data}
                    onRowClick={data => {
                        console.log(data);
                    }}
                >
                    <Column width={400} >
                        <HeaderCell >Nome do Egresso</HeaderCell>
                        <Cell dataKey="name">

                        </Cell>
                    </Column>
                    <Column width={120} >
                        <HeaderCell>Linkedin</HeaderCell>

                        <Cell>
                            {rowData => {
                                return (
                                    <span>
                                        <a target={'_blank'} href={"https://linkedin.com/in/" + rowData.linkedinId}>Link</a>

                                    </span>
                                );
                            }}
                        </Cell>
                    </Column>
                    <Column width={280}>
                        <HeaderCell>Desfazer Associação</HeaderCell>
                        <Cell>
<<<<<<< HEAD
                            <div className={"delete-button-div"}>
                                <button className={"delete-button-updatedata"}>Desfazer Associação</button>
                            </div>
=======
                            {rowData => (
                                <div className={"delete-button-div"} onClick={() => { setCancelMatch(rowData); setShowModal(true) }}>
                                    <FiTrash2 size={20} />
                                </div>
                            )}
>>>>>>> 6747da836693827b3fddb9f9e100877465e8346e
                        </Cell>
                    </Column>
                </Table>
            </div>
            <Confirm
                msg={"Deseja realmente desfazer a Associação?"}
                handleFunction={handleCancelMatch}
                showModal={showModal}
                hideModal={(option) => { setShowModal(option) }}
            />
        </div>
    )

}
export default Matchs;