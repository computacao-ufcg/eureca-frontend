import React, { useState } from 'react'
import './styles.css'
import { Table } from 'rsuite'

import { sortData } from './util.js';

const { Column, HeaderCell, Cell } = Table;

const ListAlumnus = (props) => {

    const [sortColumn, setSortColumn] = useState('');
    const [sortType, setSortType] = useState('asc');
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(sortData(props.listData, sortType));

    function handleSortColumn(sortColumn, sortType) {
        setLoading(true);

        setTimeout(() => {
            setSortColumn(sortColumn);
            setSortType(sortType);
            console.log("func")
            setData(sortData(data, sortType));
            setLoading(false);
        }, 500);
    }

    return (
        <div className={'listAlumnus'}>
            <Table
                height={480}
                width={300}
                data={data}
                onRowClick={data => {
                    props.handleAlumnus(data)
                }}

                sortColumn={sortColumn}
                sortType={sortType}
                onSortColumn={handleSortColumn}
                loading={loading}
            >
                <Column width={300} sortable>
                    <HeaderCell >Nome do Egresso</HeaderCell>
                    <Cell dataKey={'fullName'} className="pointer">
                        {rowData => {
                            return (
                                <a index={rowData.index}>{rowData.alumnus.fullName}</a>
                            );
                        }}
                    </Cell>
                </Column>
            </Table>
        </div>
    )
}
export default ListAlumnus