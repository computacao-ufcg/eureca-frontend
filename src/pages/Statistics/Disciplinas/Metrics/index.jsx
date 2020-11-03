import React from 'react';

import Header from '../../../../components/General/Header';
import NavBar from '../../../../components/StatisticsComponents/NavBar';
import SideBar from '../../../../components/StatisticsComponents/SideBar';

import { navOptions, subjectsOptions, nameSubjects } from '../../utilStatistics';

import Title from '../../../../components/General/Title';

import GraphMetrics from './GraphMetrics'
import SelectMetrics from './SelectMetrics'

import '../../styles.css';

const Detalhes = () => {

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
                                <SelectMetrics/>
                                <GraphMetrics/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>    )
}

export default Detalhes;