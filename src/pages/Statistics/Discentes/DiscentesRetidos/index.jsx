import React from 'react';

import Header from '../../../../components/General/Header';
import NavBar from '../../../../components/StatisticsComponents/NavBar';
import SideBar from '../../../../components/StatisticsComponents/SideBar';

import { navOptions, studentsOptions } from '../../utilStatistics';

import Title from '../../../../components/General/Title/';

import '../../styles.css';

const DiscentesRetidos = () => {

    return(
        <React.Fragment>
            <Header/>
            <div className={'mainStatistics'}>
                <Title name={"Estatísticas"}/>
                <div className={'contentStatistics'}>
                    <NavBar selectedOption={"Discentes"} listEnum={ navOptions }/>
                    <div className={'modelStatistics'}>
                        <div className={'listStatistics'}>
                            <SideBar selectedOption={"Retidos"} navSelected={"discentes"} listOption={ studentsOptions }/>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default DiscentesRetidos;