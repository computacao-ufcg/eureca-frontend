import React, {useEffect, useState} from 'react';

import Header from '../../../../components/General/Header';
import NavBar from '../../../../components/StatisticsComponents/NavBar';
import SideBar from '../../../../components/StatisticsComponents/SideBar';

import Title from '../../../../components/General/Title/';

import SliderEvadidos from './SliderEvadidos';
import GraphEvadidos from './GraphEvadidos';

import '../../styles.css';

import api from '../../../../services/api';

const DiscentesEvadidos = () => {

    const [dataEgressos, setDataEgressos] = useState(null) 

    useEffect(() => {
        updateGraph('1996.1', '2020.1')
    },[]);

    const handleSlider = (min, max) => {      
        updateGraph(min, max);
    }

    const updateGraph = async (min, max) => {
        let query = `api/estatisticas/evadidos?de=${min}&ate=${max}`;

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
                            <SideBar selectedOption={"Evadidos"} navSelected={"discentes"} listOption={['Ativos', 'Egressos', 'Evadidos', 'Retidos']} names={['Ativos', 'Egressos', 'Evadidos', 'Retidos']}/>
                            <div className={'compStatistics'}>
                                <SliderEvadidos changeSlider={handleSlider}/>
                                <GraphEvadidos data={dataEgressos}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default DiscentesEvadidos;