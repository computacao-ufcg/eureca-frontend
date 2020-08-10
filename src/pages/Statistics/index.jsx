import React, { useState } from 'react'

import Header from '../../components/Header'

import NavBar from '../../components/StatisticsComponents/navBar/NavBar'
import SideBar from '../../components/StatisticsComponents/sideBar/SideBar'
import Slider from '../../components/StatisticsComponents/slider/Slider'
import Export from '../../components/StatisticsComponents/export'
import Graphs from './Graphs'
import Title from '../../components/General/Title/Title'
import Text from './Text'

import {statisticsEnum, labels, egressos} from './util'

import './style.css'

const Statistics = () => {

    const [option, setOption] = useState(statisticsEnum.Discentes)

    const [min, setMin] = useState(0)
    const [max, setMax] = useState(17)
    const [data, setData] = useState(egressos.periodos);

    const handleOption = (newOption) => {
        console.log(statisticsEnum[newOption])
        setOption(statisticsEnum[newOption])
    }

    const handleSlider = (min, max) => {
        setMin(min);
        setMax(max);
        setData(egressos.periodos.slice(min, max+1))
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
                                <Slider min={min} max={max} changeSlider={handleSlider} labels ={labels}/>
                                <Graphs min={min} max={max} data={data}/>
                                <Text min={labels[min]} max={labels[max]} data={egressos}/>
                                <Export data={data}/>
                                <br/>
                                <br/>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Statistics;