import React from 'react'
import { Table } from 'rsuite';
import './styles.css'

const { Column, HeaderCell, Cell } = Table;

const ListEgressos = (props) =>{
    return(
        <div className={'tableEgressos'}>
            <Table
            height={480}
            width={850}
            data={props.listData}
            onRowClick={data => {
                console.log(data);
            }}
            >
            <Column width={500} align="center" fixed>
                <HeaderCell >Nome do Egresso</HeaderCell>
                <Cell dataKey="fullName" />
            </Column>
            <Column>
                <HeaderCell width={200}>Admissão</HeaderCell>
                <Cell dataKey="admission"/>
            </Column>
            <Column>
                <HeaderCell width={200}>Graduação</HeaderCell>
                <Cell dataKey="graduation"/>
            </Column>
            </Table>
            
        </div>
    )
}
export default ListEgressos