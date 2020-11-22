import React, {useEffect, useState} from 'react';

import Header from '../../../../components/General/Header';
import NavBar from '../../../../components/StatisticsComponents/NavBar/index.jsx';
import SideBar from '../../../../components/StatisticsComponents/SideBar';

import { navOptions, studentsOptions, nameStudents } from '../../statisticsUtil';

import Title from '../../../../components/General/Title/';

import GraduatedSlider from './GraduatedSlider';
import GraduatedGraph from './GraduatedGraph';

import '../../styles.css';

import api from '../../../../services/api';

const GraduatedStudents = () => {

    const [dataEgressos, setDataEgressos] = useState(null);
    const [min, setMin] = useState('');
    const [max, setMax] = useState('');

    useEffect(() => {
        updateGraph('1981.1', '2019.2')
    },[]);

    const handleSlider = (min, max) => {      
        setMin(min);
        setMax(max);   
    }

    const updateGraph = async (min, max) => {
        let query = `api/estatisticas/egressos?de=${min}&ate=${max}`;

        const res = await api.get(query, {});
        
        if(res){
            setDataEgressos(res.data);
        } else{
            console.log(res.statusText);
        }

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
                            <SideBar selectedOption={"Egressos"} navSelected={"students"} listOption={ studentsOptions } names={ nameStudents } />
                            <div className={'compStatistics'}>
                                <div onMouseUp={() => updateGraph(min, max)}>
                                    <GraduatedSlider changeSlider={handleSlider}/>
                                </div>
                                <GraduatedGraph data={dataEgressos}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default GraduatedStudents;