import React, { useEffect, useState } from 'react';

import { Table } from 'rsuite';


const TableActives = ({ elementsEquals }) => {
    const [data, setData] = useState([]);
    const [displayLength, setDisplayLength] = useState(10);
    const [page, setPage] = useState(1);

    const handleChangePage = (dataKey) => {
        setPage(dataKey)
        setData(getData(dataKey));
    }

    const handleChangeLength = (dataKey) =>{
        setPage(1);
        setDisplayLength(dataKey);
    }

    useEffect(()=>{
        setData(getData(page));
    },[]);

    const getData = (page) => {

        return elementsEquals.filter((v, i) => {
            const start = displayLength * (page - 1);
            const end = start + displayLength;
            return i >= start && i < end;
        });
    }

    return (
        <React.Fragment>
            <Table
                height={400}
                width={800}
                data={data}
                onRowClick={data => {
                    console.log(data);
                }}
            >
                <Table.Column width={200} align="center" fixed>
                    <Table.HeaderCell>Matrícula</Table.HeaderCell>
                    <Table.Cell dataKey="matricula" />
                </Table.Column>

                <Table.Column width={200} align="center" fixed>
                    <Table.HeaderCell>Períodos Integralizados</Table.HeaderCell>
                    <Table.Cell dataKey="periodos_integralizados" />
                </Table.Column>

                <Table.Column width={200} align="center" fixed>
                    <Table.HeaderCell>Créditos Integralizados (%)</Table.HeaderCell>
                    <Table.Cell dataKey="porcentagem_concluida" />
                </Table.Column>

                <Table.Column width={200} align="center" fixed>
                    <Table.HeaderCell>Período de Ingresso</Table.HeaderCell>
                    <Table.Cell dataKey="periodo_ingresso" />
                </Table.Column>
            </Table>
            <Table.Pagination
                showLengthMenu={false}
                activePage={page}
                displayLength={displayLength}
                total={elementsEquals.length}
                onChangePage={ handleChangePage }
                onChangeLength={ handleChangeLength }
            />
        </React.Fragment>
    );
}

export default TableActives;
