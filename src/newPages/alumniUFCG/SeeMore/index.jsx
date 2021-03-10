import React from 'react';

import Header from '../../../newComponents/Header';

import './styles.css';

import {useState,useEffect} from 'react'
import { api_AS } from './../../../services/api'
import ListEgressos from '../SeeMore/listEgressos'
import { Pagination } from 'rsuite';
import { FiSearch } from 'react-icons/fi';
import './styles.css'

const SeeMore = () =>{

    const [data, setData] = useState([])
    const [page, setPage] = useState(0)

    useEffect(()=>{
        handleProfile(page)

    },[])

    const handleProfile = async (page) =>{
        debugger
        let query = 'alumnus/' + page
        const res = await api_AS.get(query,{headers:{'Authentication-Token': sessionStorage.getItem('eureca-token')}})
        
        if(res.status===200){
            setData(res.data.content)
        }
        else{
            console.error('error: response error')
        }
    }
     const handlePage = (eventKey) =>{
        setPage(eventKey-1)
        console.log(eventKey)
        handleProfile(eventKey-1)
    }

    return (
        <React.Fragment>
            <div className ={'main-seemore'}>
                <div className={'header-container'}>
                    <Header />
                </div>
                <div className={'main-content'}>
                    <div className = {'main-container-seemore'}>
    
                        <div className={'container-title-seemore'}>
                            <h1>VER MAIS</h1>
                        </div>

                        <div className="seemore-input-box">
                            <div>
                                <FiSearch size={25} />
                            </div>
                            <input type="text" placeholder="Buscar por período"  />  
                        </div>
                        
                        <div className={'listEgressos'}>
                            <ListEgressos listData={data.content ? data.content :[]}/>
                            <hr></hr>
                            <Pagination
                            pages={data.totalPages ? data.totalPages :0}
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
                    
                    
                </div>
                
            </div>
        </React.Fragment>
    );
}

export default SeeMore