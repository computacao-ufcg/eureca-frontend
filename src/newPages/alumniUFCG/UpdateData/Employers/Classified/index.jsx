import React, { useEffect, useState } from 'react';

import { Table } from 'rsuite';

import { api_AS } from '../../../../../services/api';

import './style.css';

const { Column, HeaderCell, Cell } = Table;

const Classified = (props) => {
    const [page, setPage] = useState(0);
    const [data, setData] = useState([]);
    const [dataMaster, setDataMaster] = useState({});

    useEffect(() => {
        handleClassified()
    }, [])

    const handleClassified = async () => {
        const query = `employer/classified/${page}`;

        const myHeaders = {
            headers: { 'Authentication-Token': sessionStorage.getItem('eureca-token') }
        }

        try {
            const res = await api_AS.get(query, myHeaders);

            if (res.status === 200) {
                setData(res.data.content);
                setDataMaster(res.data);
            } else {
                console.error("Error: response broken.");
            }

        } catch (e) {
            alert("Error: ", e);
        }
    }

    return (
        <div className={'classified'}>
            <Table
                height={480}
                width={800}
                // Quando o put do back estiver corrigido, substituir pelo dado vindo da API.
                data={props.data}
                onRowClick={data => {
                    console.log(data);
                }}
            >
                <Column width={300} >
                    <HeaderCell >Nome da Empresa</HeaderCell>
                    <Cell dataKey="name">

                    </Cell>
                </Column>
                <Column width={300}>
                    <HeaderCell>Tipo</HeaderCell>
                    <Cell dataKey={'type'}>

                    </Cell>
                </Column>
                <Column width={120} >
                    <HeaderCell>Linkedin</HeaderCell>

                    <Cell>
                        {rowData => {
                            return (
                                <span className="pointer">
                                    <a target={'_blank'} href={rowData.linkedinID}>Link</a>

                                </span>
                            );
                        }}
                    </Cell>
                </Column>
            </Table>
        </div>
    )
}
export default Classified;
