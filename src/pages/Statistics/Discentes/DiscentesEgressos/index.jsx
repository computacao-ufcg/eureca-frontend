import React, {useEffect, useState} from 'react';

import Header from '../../../../components/General/Header';
import NavBar from '../../../../components/StatisticsComponents/NavBar/index.jsx';
import SideBar from '../../../../components/StatisticsComponents/SideBar';

import Title from '../../../../components/General/Title/';

import SliderEgressos from './SliderEgressos';
import GraphEgressos from './GraphEgressos';

import '../../styles.css';

import api from '../../../../services/api';

const DiscentesEgressos = () => {

    const [dataEgressos, setDataEgressos] = useState(null) 

    useEffect(() => {
        updateGraph('1981.1', '2019.2')
    },[]);

    const handleSlider = (min, max) => {      
        updateGraph(min, max);
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
                    <NavBar selectedOption={"Discentes"} listEnum={['Discentes', 'Disciplinas', 'Matrículas']}/>
                    <div className={'modelStatistics'}>
                        <div className={'listStatistics'}>
                            <SideBar selectedOption={"Egressos"} navSelected={"discentes"} listOption={['Ativos', 'Egressos', 'Evadidos', 'Retidos']} names={['Ativos', 'Egressos', 'Evadidos', 'Retidos']}/>
                            <div className={'compStatistics'}>
                                <SliderEgressos changeSlider={handleSlider}/>
                                <GraphEgressos data={dataEgressos}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default DiscentesEgressos;