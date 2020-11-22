import React from 'react';

import Header from '../../../../components/General/Header';
import NavBar from '../../../../components/StatisticsComponents/NavBar';
import SideBar from '../../../../components/StatisticsComponents/SideBar';

import { nameStudents, navOptions, studentsOptions } from '../../statisticsUtil';

import Title from '../../../../components/General/Title';

import '../../styles.css';

const RetainedStudents = () => {

    return(
        <React.Fragment>
            <Header/>
            <div className={'mainStatistics'}>
                <Title name={"Estatísticas"}/>
                <div className={'contentStatistics'}>
                    <NavBar selectedOption={"Students"} listEnum={ navOptions }/>
                    <div className={'modelStatistics'}>
                        <div className={'listStatistics'}>
                            <SideBar selectedOption={"Retidos"} navSelected={"students"} listOption={ studentsOptions } names={ nameStudents }/>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default RetainedStudents;