import React from 'react'
import './styles.css'
import { Table } from 'rsuite'

const { Column, HeaderCell, Cell } = Table;


const ListAlumnus = (props) => {

    return (
        <div className={'listAlumnus'}>

                <Table
                    height={480}
                    width={300}
                    data={props.listData}
                    onRowClick={data => {
                        props.handleAlumnus(data)
                    }}
                >
                    <Column width={300} >
                        <HeaderCell >Nome do Egresso</HeaderCell>
                        <Cell dataKey={'fullName'} >
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