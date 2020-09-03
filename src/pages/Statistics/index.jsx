import React, { useState, useEffect } from 'react'

import Header from '../../components/Header'

import NavBar from '../../components/StatisticsComponents/navBar/NavBar'
import SideBar from '../../components/StatisticsComponents/sideBar/SideBar'
import Slider from '../../components/StatisticsComponents/slider/Slider'
import Export from '../../components/StatisticsComponents/export'
import Graphs from './Graphs'
import Title from '../../components/General/Title/Title'
import Text from './Text'

import {statisticsEnum, labels, egressos, evadidos, labelTags,labelsAtivos, ativosExemplo} from './util'

import api from '../../services/api.js';

import './style.css'

const Statistics = () => {

    const [option, setOption] = useState(statisticsEnum.Discentes);
    const [optionSide, setOptionSide] = useState(statisticsEnum.Discentes[0]);

    const [min, setMin] = useState(0);
    const [max, setMax] = useState(17);
    const [data, setData] = useState(ativosExemplo);
    const [dataMaster, setDataMaster] = useState(ativosExemplo);
    const [type, setType] = useState("Ativos");
    const [label, setLabel] = useState(labelsAtivos);

    const handleOption = (newOption) => {
        setOption(statisticsEnum[newOption])
        setOptionSide(statisticsEnum[newOption][0])
    }

    const handleOptionSide = (newOption) => {
        setOptionSide(newOption);
        if(newOption === 'Egressos'){
            setLabel(labels);
            setData(egressos.periodos.slice(min, max+1))
            setDataMaster(egressos.periodos)
            setType("egressos")
            setCategoria("egressos", min, max)
        }
        else if(newOption === 'Evadidos'){
            setLabel(labels);
            setData(evadidos.periodos.slice(min, max+1))
            setDataMaster(evadidos.periodos)
            setType("evadidos")
            setCategoria("evadidos", min, max)
        }
        else if(newOption === 'Ativos'){
            setLabel(labelsAtivos);
            setDataMaster(ativosExemplo)
            setData(ativosExemplo)
            setType("ativos")
        }
    }

    const handleSlider = (min, max) => {
        setMin(min);
        setMax(max);
        setCategoria(type, min, max);

        if(type==='Ativos'){
            setData(getDataAtivos(dataMaster, label[min], label[max]));
        }else{
            setData(dataMaster.slice(min, max+1))
        }
    }

    const getDataAtivos = (dataMaster, start, end) => {
        let alunos = [];
        const medidas = dataMaster.medidas;
        const ideal = dataMaster.ideal;

        dataMaster.alunos.map(e =>{
            if(e.x >= start && e.x <= end){
                alunos.push(e);
            }
            return null;
        });

        const aux = {alunos, medidas, ideal};

        return aux;
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
                                <Slider min={min} max={max} changeSlider={handleSlider} labels ={label}/>
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