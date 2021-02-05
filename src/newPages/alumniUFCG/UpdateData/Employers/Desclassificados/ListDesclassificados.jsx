import React from 'react'
import { Table } from 'rsuite';
import './style.css'

const { Column, HeaderCell, Cell } = Table;

const ListDesclassificados =(props) =>{
    return(
        <div className={'tabelaDesclassificados'}>
            <Table
            height={480}
            width={800}
            data={props.listData}
            onRowClick={data => {
                console.log(data);
            }}
            >
            <Column width={500} align="center" fixed>
                <HeaderCell >Nome do Empregador</HeaderCell>
                <Cell dataKey="name">
                    {rowData => {
                        function handleAction(event) {
                        props.handleInput(event.target.value, event.target.getAttribute('name'))
                        }
                        return (
                        <input className={'inputEmpresa'} name={rowData.linkedinId} readOnly value={rowData.name} onClick={handleAction}>
                          
                        </input >
                        );
                    }}
                </Cell>
            </Column>
            <Column width={120} fixed="right">
                <HeaderCell>Linkedin</HeaderCell>

                <Cell>
                {rowData => {
                    return (
                    <span>
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
export default ListDesclassificados