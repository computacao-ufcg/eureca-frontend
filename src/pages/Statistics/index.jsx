import React, { useState, useEffect } from 'react'

import Header from '../../components/Header'

import NavBar from '../../components/StatisticsComponents/navBar/NavBar'
import SideBar from '../../components/StatisticsComponents/sideBar/SideBar'
import Slider from '../../components/StatisticsComponents/slider/Slider'
import Export from '../../components/StatisticsComponents/export'
import Graphs from './Graphs'
import Title from '../../components/General/Title/Title'
import Text from './Text'

import {statisticsEnum, labels, egressos, evadidos, labelTags} from './util'

import api from '../../services/api.js';

import './style.css'

const Statistics = () => {

    const [option, setOption] = useState(statisticsEnum.Discentes);
    const [optionSide, setOptionSide] = useState(statisticsEnum.Discentes[0]);

    const [min, setMin] = useState(0);
    const [max, setMax] = useState(17);
    const [data, setData] = useState(egressos.periodos);
    const [dataMaster, setDataMaster] = useState(egressos.periodos);
    const [type, setType] = useState("egressos")

    const handleOption = (newOption) => {
        setOption(statisticsEnum[newOption])
        setOptionSide(statisticsEnum[newOption][0])
    }

    const handleOptionSide = (newOption) => {
        setOptionSide(newOption);
        if(newOption === 'Egressos'){
            setData(egressos.periodos.slice(min, max+1))
            setDataMaster(egressos.periodos)
            setType("egressos")
            setCategoria("egressos", min, max)
        }
        else if(newOption === 'Evadidos'){
            setData(evadidos.periodos.slice(min, max+1))
            setDataMaster(evadidos.periodos)
            setType("evadidos")
            setCategoria("evadidos", min, max)
        }
    }

    const handleSlider = (min, max) => {
        setMin(min);
        setMax(max);
        setData(dataMaster.slice(min, max+1))
        setCategoria(type, min, max);
    }

    useEffect(() => {
        let query = type + "?" + "de=" + labels[min] + "&" + "ate=" + labels[max];
        console.log(query);
        api.get('api/estatisticas/' + query, {})
        .then(res => {
            console.log(res)
        })
        .catch(error => {
            console.log(error)
        })
    },[])

    const setCategoria = (categoria, min, max) => {
        let query = categoria + "?" + "de=" + labels[min] + "&" + "ate=" + labels[max];
        console.log(query);
        api.get('api/estatisticas/' + categoria, {})
        .then(res => {
            console.log(res)
        })
        .catch(error => {
            console.log(error)
        })
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
                            <SideBar changeOption={handleOptionSide} listOption={option}/>
                            <div className={'compStatistics'}>
                                <Slider min={min} max={max} changeSlider={handleSlider} labels ={labels}/>
                                <Graphs min={min} max={max} data={data} option={optionSide} labels={labelTags}/>
                                <Text min={labels[min]} max={labels[max]} data={egressos}/>
                                <Export data={egressos.periodos}/>
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