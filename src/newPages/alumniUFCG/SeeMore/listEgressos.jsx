import React from 'react'
import { Table } from 'rsuite';
import './styles.css'

const { Column, HeaderCell, Cell } = Table;

const ListEgressos = (props) =>{
    return(
        <div className={'tableEgressos'}>
            <Table
            height={480}
            width={800}
            data={props.listData}
            onRowClick={data => {
                console.log(data);
            }}
            >
            <Column width={500} align="center" fixed>
                <HeaderCell >Nome do Egresso</HeaderCell>
                <Cell dataKey="fullName" />
            </Column>
            <Column width={120} fixed="right">
                <HeaderCell>Linkedin</HeaderCell>

                <Cell>
                {rowData => {
                    function handleAction() {
                        window.location.href = rowData.profileUrl
                    }
                    return (
                    <span>
                        {/**<a onClick={handleAction}>Link</a> */}
                        <a target={'_blank'} href={rowData.profileUrl}>Link</a> 
                        
                    </span>
                    );
                }}
                </Cell>
            </Column>
            </Table>
            
        </div>
    )
}
export default ListEgressos