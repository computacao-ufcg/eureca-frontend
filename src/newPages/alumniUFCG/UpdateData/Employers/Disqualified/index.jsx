import React, {useEffect,useState} from 'react'
import {Pagination, SelectPicker, Input } from 'rsuite';

import ListDisqualified from './ListDisqualified';

import { api_AS } from '../../../../../services/api';

import { dataCompany } from './util.js';

// import './styles.css';

const Disqualified = (props) => {
    const [page, setPage] = useState(0);
    const [data, setData] = useState([]);
    const [dataMaster, setDataMaster] = useState({});
    const [selectCompany, setSelectCompany] = useState('Selecione uma Empresa');
    const [type, setType] = useState('academia');
    const [linkedinID, setLinkedinID] = useState('');

    useEffect(()=>{
        handleDisqualified(page)
    },[])

    const handleDisqualified = async(page) =>{
        const query = `employer/unclassified/${page}`;
        const myHeaders = {
            headers: {'Authentication-Token': sessionStorage.getItem('eureca-token')}
        };

        try{
            const res = await api_AS.get(query, myHeaders);

            if(res.status === 200){
                setData(res.data.content);
                setDataMaster(res.data);
            }else{
                console.error("Error: response error");
            }
        }catch(e){
            alert("Error: ", e);
        }      
    }

    const handlePage = (eventKey) =>{
        setPage(eventKey-1)
        console.log(eventKey)
        handleDisqualified(eventKey-1)
    }

    const handleInput = (input, link) =>{
        setSelectCompany(input)
        setLinkedinID(link)
    } 

    const handleSelect = (value) =>{
        setType(value)
    }

    const handleSubmit = () =>{

        const query = `employer`;
        const myHeaders = {
            headers:{'Authentication-Token': sessionStorage.getItem('eureca-token')}
        }
        const myBody = {
            'type':type,
            'linkedinID':linkedinID,
            'name':selectCompany
        }

        try{
            const res = api_AS.put(query, myBody, myHeaders);

            if(res.status === 200){
                alert("Empresa classificada.");
            }else{
                console.error("Error: response error");
            }
        }catch(e){
            alert("Error: ", e);
        }

        let objeto ={
            'type':type,
            'linkedinID':linkedinID,
            'name':selectCompany
        }

        props.handleData(objeto)
    }



    return (
        <div>
            <div className={'mainDisqualified'}>
                <div>
                <ListDisqualified handleInput={handleInput} listData={data ? data :[]}/>
                    <hr></hr>
                </div>
                <div className={'selectCompany'}>
                    <Input style={{width:400}} disabled placeholder = {selectCompany}/>
                    <hr></hr>
                    <SelectPicker defaultValue={type} onSelect={handleSelect} data={dataCompany} style={{ width: 400 }} />
                    <hr></hr>
                    <button onClick={handleSubmit}>Associar</button>
                </div>
            </div>
            <div className ={'paginacao'}>
                <Pagination
                    pages={dataMaster.totalPages ? dataMaster.totalPages :0}
                    maxButtons={5}
                    onSelect ={handlePage}
                    activePage={page+1}
                    prev
                    next
                    first
                    last
                    ellipsis
                    boundaryLinks
                />
            </div>
        </div>
    )
}
export default Disqualified;