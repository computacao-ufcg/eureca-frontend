import React from 'react'
import { Table } from 'rsuite';
import './styles.css'

const { Column, HeaderCell, Cell } = Table;

const ListDisqualified = (props) => {
    return (
        <div className={'tableDisqualified'}>
            <Table
                height={480}
                width={500}
                data={props.listData}
                onRowClick={data => {
                    console.log(data);
                }}
            >
                <Column width={400} align="center" fixed>
                    <HeaderCell >Nome do Empregador</HeaderCell>
                    <Cell dataKey="name">
                        {rowData => {
                            function handleAction(event) {
                                props.handleInput(event.target.value, event.target.getAttribute('name'))
                            }
                            return (
                                <input className={'inputCompany pointer'} name={rowData.linkedinId} readOnly value={rowData.name} onClick={handleAction}>

                                </input >
                            );
                        }}
                    </Cell>
                </Column>
                <Column width={100} fixed="right">
                    <HeaderCell>Linkedin</HeaderCell>

                    <Cell>
                        {rowData => {
                            return (
                                <span className="pointer">
                                    <a target={'_blank'} href={rowData.linkedinId}>Link</a>
                                </span>
                            );
                        }}
                    </Cell>
                </Column>
            </Table>

        </div>
    )
}
export default ListDisqualified;