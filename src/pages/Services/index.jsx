import React from 'react'

import Header from '../../components/general/Header'

import Title from '../../components/general/Title'


import './styles.css'

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