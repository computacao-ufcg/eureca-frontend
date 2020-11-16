import React, {useEffect, useState} from 'react';

import Header from '../../../../components/General/Header';
import NavBar from '../../../../components/StatisticsComponents/NavBar';
import SideBar from '../../../../components/StatisticsComponents/SideBar';
import Title from '../../../../components/General/Title';
// import Export from '../../../../components/StatisticsComponents/Export';

import { navOptions, subjectsOptions, nameSubjects } from '../../utilStatistics';

import { dataSummary, labelSlider } from './utilSummary';

import SliderSummary from './SliderSummary';
import GraphSummary from './GraphSummary';

import api from '../../../../services/api';

const Summary = () => {

    // const [dataMaster, setDataMaster] = useState(dataSummary);
    const [dataGraph, setDataGraph] = useState([]);
    const [label, setLabel] = useState(labelSlider)

    const [load, setLoad] = useState(false);

    const [min, setMin] = useState(0);
    const [max, setMax] = useState(0);

    const handleSlider = (min, max) => {      
        setMin(min);
        setMax(max);
        fetchDataApiWithLabel(min, max);
    }

    const fetchDataApiWithLabel = async (min, max) => {
        const query = `disciplinas/sumario?de=${label[min]}&ate=${label[max]}`;

        const resSummary = await api.get(`api/estatisticas/${query}`, {});

        if (resSummary.statusText === 'OK') {
            formatData(resSummary.data);
        } else {
            console.log("Error Data Ativos");
        }
    }

    const formatData = (data) => {

        setLoad(true);

        const dados = data.map(e => {
            const  group = e.group;
            const { lim_inf, lim_sup, q1, q2, q3 } = e.data;

            return { 'label': group, 'y': [lim_inf, q1, q3, lim_sup, q2] };
        });

        setDataGraph(dados);

        setLoad(false);
    }

    useEffect(() => { 
        fetchDataApiWithLabel(0, 39);
    },[])

    return (
        <React.Fragment>
            <Header />
            <div className={'mainStatistics'}>
                <Title name={"Estatísticas"} />
                <div className={'contentStatistics'}>
                    <NavBar selectedOption={"Disciplinas"} listEnum={navOptions} />
                    <div className={'modelStatistics'}>
                        <div className={'listStatistics'}>
                            <SideBar selectedOption={"Sumário"} navSelected={"disciplinas"} listOption={subjectsOptions} names={ nameSubjects }/>
                            <div className={'compStatistics'}>
                                <SliderSummary changeSlider={handleSlider} labels={label} min={min} max={max}></SliderSummary>
                                {/* {!load ? */}
                                <GraphSummary data={dataGraph}></GraphSummary>
                                {/* : null} */}
                                <br />
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Summary;