import React, {useEffect, useState} from 'react';

import Header from '../../../../components/General/Header';
import NavBar from '../../../../components/StatisticsComponents/NavBar';
import SideBar from '../../../../components/StatisticsComponents/SideBar';

import { nameStudents, navOptions, studentsOptions } from '../../statisticsUtil';

import Title from '../../../../components/General/Title';

import RetainedGraph from './RetainedGraph';
import RetainedSlider from './RetainedSlider';

import '../../styles.css';

import {teste} from './retainedUtil'


const RetainedStudents = () => {

    const [dataRetidos, setDataRetidos] = useState(teste);
    const [min, setMin] = useState('');
    const [max, setMax] = useState('');

    useEffect(() => {
        updateGraph('1981.1', '2019.2')
    },[]);


    const handleSlider = (min, max) => {      
        setMin(min);
        setMax(max);
        
        updateGraph(min,max);
    }

    
    const updateGraph = (min, max) => {
        let novo = [];
        
        teste.map(e => {
            if(e.periodo >= min && e.periodo <= max) {
                novo.push(e);
            }
        })

        setDataRetidos(novo);
    }
    
    

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
                            <div className={'compStatistics'}>
                                <div onMouseUp={() => updateGraph(min, max)}>
                                    <RetainedSlider changeSlider={handleSlider}/>
                                </div>
                                <RetainedGraph data={dataRetidos}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default RetainedStudents;