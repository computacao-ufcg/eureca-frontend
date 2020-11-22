import React, {useEffect, useState} from 'react';

import Header from '../../../../components/General/Header';
import NavBar from '../../../../components/StatisticsComponents/NavBar';
import SideBar from '../../../../components/StatisticsComponents/SideBar';
import Title from '../../../../components/General/Title';
// import Export from '../../../../components/StatisticsComponents/Export';

import { navOptions, subjectsOptions, nameSubjects } from '../../statisticsUtil';

import { dataSummary, labelSlider } from './summaryUtil';

import SummarySlider from './SummarySlider';
import SummaryGraph from './SummaryGraph';

import api from '../../../../services/api';

const Summary = () => {

    // const [dataMaster, setDataMaster] = useState(dataSummary);
    const [dataGraph, setDataGraph] = useState([]);
    const [label, setLabel] = useState(labelSlider)

    const [min, setMin] = useState(0);
    const [max, setMax] = useState(0);

    const handleSlider = (min, max) => {      
        setMin(min);
        setMax(max);    
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

        const dados = data.map(e => {
            const  group = e.group;
            const { lim_inf, lim_sup, q1, q2, q3 } = e.data;

            return { 'label': group, 'y': [lim_inf, q1, q3, lim_sup, q2] };
        });

        setDataGraph(dados);
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
                    <NavBar selectedOption={"Subjects"} listEnum={navOptions} />
                    <div className={'modelStatistics'}>
                        <div className={'listStatistics'}>
                            <SideBar selectedOption={"Sumário"} navSelected={"subjects"} listOption={subjectsOptions} names={ nameSubjects }/>
                            <div className={'compStatistics'}>
                                <div onMouseUp={ ()=> fetchDataApiWithLabel(min, max)}>
                                    <SummarySlider changeSlider={handleSlider} labels={label} min={min} max={max}></SummarySlider>
                                </div>
                                <SummaryGraph data={dataGraph}></SummaryGraph>
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