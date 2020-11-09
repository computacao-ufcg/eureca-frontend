import React, { useState }  from 'react';

import Header from '../../../../components/General/Header';
import NavBar from '../../../../components/StatisticsComponents/NavBar';
import SideBar from '../../../../components/StatisticsComponents/SideBar';

import { navOptions, subjectsOptions, nameSubjects } from '../../utilStatistics';

import Title from '../../../../components/General/Title';

import SliderMetrics from './SliderMetrics'
import SelectMetrics from './SelectMetrics'
import GraphMetricsSuccess from './Graphs/GraphMetricsSuccess'
import GraphMetricsNumber from './Graphs/GraphMetricsNumber'
import GraphMetricsSize from './Graphs/GraphMetricsSize'


import '../../styles.css';

const Detalhes = () => {

    const [graph, setGraph] = useState(<GraphMetricsSuccess/>)

    const handleSlider = (v1, v2) => {
        
    }

    const handleSelectMetrics = (value) => {
        if(value === 'nMatricula') {
            setGraph(<GraphMetricsNumber/>)
        } else if (value === 'taxaSucesso') {
            setGraph(<GraphMetricsSuccess/>)
        } else if (value === 'tamanhoTurma') {
            setGraph(<GraphMetricsSize/>)
        }
    }

    const handleSelectSubject = (value) => {

    }

    return(
        <React.Fragment>
            <Header/>
            <div className={'mainStatistics'}>
                <Title name={"Estatísticas"}/>
                <div className={'contentStatistics'}>
                    <NavBar selectedOption={"Disciplinas"} listEnum={ navOptions }/>
                    <div className={'modelStatistics'}>
                        <div className={'listStatistics'}>
                            <SideBar selectedOption={"Métricas"} navSelected={"disciplinas"} listOption={ subjectsOptions } names={ nameSubjects }/>
                            <div className={'compStatistics'}>
                                <SliderMetrics changeSlider={handleSlider}/>
                                <SelectMetrics handleMetrics={handleSelectMetrics} handleSubject={handleSelectSubject}/>
                                {graph}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>    )
}

export default Detalhes;