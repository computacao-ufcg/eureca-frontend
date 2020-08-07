import React, { useState } from 'react'

import Header from '../../components/Header'

import NavBar from '../../components/StatisticsComponents/navBar/NavBar'
import SideBar from '../../components/StatisticsComponents/sideBar/SideBar'
import Slider from '../../components/StatisticsComponents/slider/Slider'
import Graphs from './Graphs'
import Title from '../../components/General/Title/Title'

import {statisticsEnum, labels} from './util'

import './style.css'

const Statistics = () => {

    const [option, setOption] = useState(statisticsEnum.Discentes)

    const handleOption = (newOption) => {
        console.log(statisticsEnum[newOption])
        setOption(statisticsEnum[newOption])
    }
    
    return(
        <React.Fragment>
            <Header></Header>
            <div className={'mainStatistics'}>
                <Title name={"Estatísticas"}/>
                <div className={'contentStatistics'}>
                    <NavBar changeOption={handleOption} listEnum={statisticsEnum}/>
                    <div className={'modelStatistics'}>
                        <div className={'listStatistics'}>
                            <SideBar listOption={option}/>
                            <div className={'compStatistics'}>
                                <Slider labels ={labels}/>
                                <Graphs/>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Statistics;