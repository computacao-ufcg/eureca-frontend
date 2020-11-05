import React, {useState} from 'react';

import Header from '../../../../components/General/Header';
import NavBar from '../../../../components/StatisticsComponents/NavBar';
import SideBar from '../../../../components/StatisticsComponents/SideBar';
import Title from '../../../../components/General/Title';
// import Export from '../../../../components/StatisticsComponents/Export';

import { navOptions, subjectsOptions, nameSubjects } from '../../utilStatistics';

import { dataSummary, labelSlider } from './utilSummary';

import SliderSummary from './SliderSummary';
import GraphSummary from './GraphSummary';
import { useEffect } from 'react';

const Summary = () => {

    const [dataMaster, setDataMaster] = useState(dataSummary);
    const [dataGraph, setDataGraph] = useState([]);
    const [label, setLabel] = useState(labelSlider)
    const [period, setPeriod] = useState('2010.1');

    const handleSlider = (index) => {
        const periodo = label[index];      
        setPeriod(periodo);
        handlerDataGraph(periodo);
    }

    const handlerDataGraph = (periodo) => {
        let index = 0;
        
        dataMaster.map( (e,i) => {
            if(e.periodo == periodo){
                index = i;
                return;
            }
        });

        setDataGraph(dataMaster[index].data);
    }

    useEffect(()=>{
        handlerDataGraph('2010.1');
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
                                <SliderSummary changeSlider={handleSlider} labels={labelSlider} period={period}></SliderSummary>
                                <GraphSummary data={dataGraph}></GraphSummary>
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