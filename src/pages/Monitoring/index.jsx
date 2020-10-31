import React from 'react'

import Header from '../../components/general/Header'

import Title from '../../components/general/Title'

import './style.css'

const Monitoring = () => {

    return(
        <React.Fragment>
            <Header></Header>
            <div className={'mainMonitoring'}>
                <Title name={"Monitoramento"}/>
            </div>
        </React.Fragment>
    )
}

export default Monitoring;