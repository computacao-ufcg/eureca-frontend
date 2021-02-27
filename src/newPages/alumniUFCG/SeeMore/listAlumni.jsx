import React from 'react'
import { Table } from 'rsuite';
import './styles.css'

const { Column, HeaderCell, Cell } = Table;

const ListAlumni = (props) => {
    return (
        <div className={'table-alumni'}>
            <Table
                height={480}
                width={850}
                data={props.listData}
                onRowClick={data => {
                    console.log(data);
                }}
            >
                <Column width={450} align="center" fixed>
                    <HeaderCell >Nome do Egresso</HeaderCell>
                    <Cell dataKey="name" />
                </Column>

                <Column width={120}>
                    <HeaderCell>Admissão</HeaderCell>
                    <Cell dataKey="admission" />
                </Column>

                <Column width={120}>
                    <HeaderCell>Graduação</HeaderCell>
                    <Cell dataKey="graduation" />
                </Column>

                <Column width={120} >
                    <HeaderCell>LinkedIn</HeaderCell>

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
                
            </Table>

        </div>
    )
}
export default ListAlumni;