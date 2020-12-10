import React, { useEffect, useState } from 'react';

// General Components 
import Header from '../../../../components/General/Header';
import NavBar from '../../../../components/StatisticsComponents/NavBar';
import SideBar from '../../../../components/StatisticsComponents/SideBar';
import Title from '../../../../components/General/Title';
import { navOptions, subjectsOptions, nameSubjects } from '../../statisticsUtil';

// Inter Components
import SummarySlider from './SummarySlider';
import SummaryGraph from './SummaryGraph';
import SummaryGraph2 from './SummaryGraph2';

// Api
import api from '../../../../services/api';

import './styles.css';

const Summary = () => {
    const [loading, setLoading] = useState(true);

    const [dataGraph, setDataGraph] = useState([]);
    const [label, setLabel] = useState([]);

    const [min, setMin] = useState(0);
    const [max, setMax] = useState(0);

    const handleSlider = (min, max) => {
        setMin(min);
        setMax(max);
    }

    const fetchDataApiWithLabel = async (min, max) => {
        setLoading(true);
        const query = `disciplinas/sumario?de=${label[min]}&ate=${label[max]}`;

        const resSummary = await api.get(`api/estatisticas/${query}`, {});

        if (resSummary.statusText === 'OK') {
            // formatData(resSummary.data);
            setDataGraph(resSummary.data.dados);
        } else {
            console.log("Error Data Ativos");
        }

        setLoading(false);
    }

    const formatData = (data) => {

        const dados = data.map(e => {
            const group = e.group;
            const { lim_inf, lim_sup, q1, q2, q3 } = e.data;

            return { 'label': group, 'y': [lim_inf, q1, q3, lim_sup, q2] };
        });

        setDataGraph(dados);
    }

    useEffect(() => {
        const fetchDataApiWithoutLabel = async () => {
            setLoading(true);
            const query = `disciplinas/sumario`;

            const resSummary = await api.get(`api/estatisticas/${query}`, {});

            if (resSummary.statusText === 'OK') {
                // formatData(resSummary.data.dados);
                setDataGraph(resSummary.data.dados);
                console.log(resSummary.data.periodos)
                setLabel(resSummary.data.periodos);
            } else {
                console.log("Error Data Ativos");
            }

            setLoading(false);
        }

        fetchDataApiWithoutLabel();
    }, [])

    return (
        <React.Fragment>
            <Header />
            <div className={'mainStatistics'}>
                <Title name={"Estatísticas"} />
                <div className={'contentStatistics'}>
                    <NavBar selectedOption={"Subjects"} listEnum={navOptions} />
                    <div className={'modelStatistics'}>
                        <div className={'listStatistics'}>
                            <SideBar selectedOption={"Sumário"} navSelected={"subjects"} listOption={subjectsOptions} names={nameSubjects} />
                            <div className={'compStatistics'}>
                                <div onMouseUp={() => fetchDataApiWithLabel(min, max)}>
                                    <SummarySlider changeSlider={handleSlider} labels={label} min={min} max={max}></SummarySlider>
                                </div>
                                {/* {
                                    loading ? null : <SummaryGraph data={dataGraph}></SummaryGraph>
                                } */}
                                <div className={'main-content-graph'}>
                                    <h2>Sumário</h2>
                                    <SummaryGraph2></SummaryGraph2>
                                </div>
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