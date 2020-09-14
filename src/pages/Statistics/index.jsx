import React, { useState, useEffect } from 'react'

import Header from '../../components/Header'

import NavBar from '../../components/StatisticsComponents/navBar/NavBar'
import SideBar from '../../components/StatisticsComponents/sideBar/SideBar'
import Slider from '../../components/StatisticsComponents/slider/Slider'
import Export from '../../components/StatisticsComponents/export'
import Graphs from './Graphs'
import Title from '../../components/General/Title/Title'
import Text from './Text'

import {statisticsEnum, labels, egressos, evadidos, labelTags, labelsAtivos, ativosExemplo} from './util'

import api from '../../services/api.js';

import './style.css'

const Statistics = () => {

    const [option, setOption] = useState(statisticsEnum.Discentes);
    const [optionSide, setOptionSide] = useState(statisticsEnum.Discentes[0]);

    const [min, setMin] = useState(0);
    const [max, setMax] = useState(17);
    const [data, setData] = useState(ativosExemplo.alunos);
    const [dataMaster, setDataMaster] = useState(ativosExemplo);
    const [type, setType] = useState("ativos");
    const [label, setLabel] = useState(labelsAtivos);

    const handleOption = (newOption) => {
        setOption(statisticsEnum[newOption])
        setOptionSide(statisticsEnum[newOption][0])
    }

    const handleOptionSide = (newOption) => {
        if(newOption === 'Egressos'){
            setLabel(labels);
            setType("egressos")
            setCategoria("egressos", min, max)
        }
        else if(newOption === 'Evadidos'){
            setLabel(labels);
            setType("evadidos")
            setDataMaster(evadidos.periodos)
            setData(evadidos.periodos)
        }
        else if(newOption === 'Ativos'){
            setLabel(labelsAtivos);
            setCategoria("ativos", min, max)
            setType("ativos")
        }
        setOptionSide(newOption);
    }

    const handleSlider = (min, max) => {
        setMin(min);
        setMax(max);

        if(type==='ativos'){
            setData(getDataAtivos(dataMaster, label[min], label[max]));
        } else if(type === 'egressos'){
            setCategoria(type, min, max)
        } else if(type === 'evadidos'){
            setData(dataMaster.slice(min, max+1))
        }
    }

    const getDataAtivos = (dataMaster, start, end) => {
        let alunos = [];
        const medidas = dataMaster.medidas;
        const ideal = dataMaster.ideal;

        dataMaster.map(e => e.periodos_ativos >= start && e.periodos_ativos <= end ? alunos.push(e) : null);

        const aux = alunos;
        return aux;
    }

    useEffect(() => {
        let query = type + "?" + "de=" + labels[min] + "&" + "ate=" + labels[max];
        console.log(query);
        api.get('api/estatisticas/' + query, {})
        .then(res => {
            setData(res.data)
            setDataMaster(res.data)
            console.log(res.data)
        })
        .catch(error => {
            console.log(error)
        })
    },[])

    const setCategoria = (categoria, min, max) => {
        let query = categoria + "?" + "de=" + labels[min] + "&" + "ate=" + labels[max];
        console.log(query);
        api.get('api/estatisticas/' + query, {})
        .then(res => {
            setData(res.data)
            setDataMaster(res.data)
            console.log(res.data)
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
                                <Slider min={min} max={max} changeSlider={handleSlider} labels ={label}/>
                                <Graphs min={min} max={max} data={data} option={optionSide} labels={labelTags}/>
                                <Text min={labels[min]} max={labels[max]} data={data}/>
                                <Export type={type} data={data}/>
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