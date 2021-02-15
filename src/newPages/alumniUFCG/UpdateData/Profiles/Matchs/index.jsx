import React, {useState,useEffect} from 'react'
import './styles.css'
import {Table} from 'rsuite'
import { api_AS } from '../../../../../services/api';

const { Column, HeaderCell, Cell } = Table;


const Matchs = () => {
    const [page, setPage] = useState(0)
    const [data, setData] = useState([])
    const [dataMaster, setDataMaster] = useState({})
    
    useEffect(()=>{
        handleClassificados()
    },[])

    const handleClassificados = async() =>{
        
        const res = await api_AS.get('match/list/' + page, {headers:{'Authentication-Token': sessionStorage.getItem('eureca-token')}});

        if(res.status === 200){
            setDataMaster(res.data);
            setData(res.data.content);
        }else{
            console.error("Response error");
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
                                <a target={'_blank'} href={rowData.linkedinId}>Link</a> 
                            
                            </span>
                            );
                        }}
                        </Cell>
                    </Column>
                    {/*<Column width={120} >
                        <HeaderCell >Matricula</HeaderCell>
                        <Cell dataKey="registration">
                    
                        </Cell>
                    </Column>**/}
                    </Table>
                </div>
            </div>
        ) 

}
export default Matchs;