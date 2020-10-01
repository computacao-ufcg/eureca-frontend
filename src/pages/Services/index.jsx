import React from 'react'

import Header from '../../components/Header'

import Title from '../../components/General/Title/Title'


import './style.css'

const Services = () => {
    
    return(
        <React.Fragment>
            <Header></Header>
            <div className={'mainServices'}>
                <Title name={"Serviços"}/> 
            </div>
        </React.Fragment>
    )
}

export default Services;