import React from 'react'

import { useHistory } from 'react-router-dom';

import Header from '../../components/General/Header'

import Title from '../../components/General/Title'


import './style.css'

const Services = () => {

    const history = useHistory();

    const handleButton = (e) => {
        e.preventDefault();

        history.push('/services/cursos');
    }
    
    return(
        <React.Fragment>
            <Header></Header>
            <div className={'mainServices'}>
                <Title name={"Serviços"}/>
                
                <form onSubmit={handleButton}>
                    <button type="submit">Execução Curricular</button>
                </form> 
            </div>
            
                
            
        </React.Fragment>
    )
}

export default Services;