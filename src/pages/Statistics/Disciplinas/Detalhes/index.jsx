import React from 'react';

import Header from '../../../../components/General/Header';
import NavBar from '../../../../components/StatisticsComponents/NavBar';
import SideBar from '../../../../components/StatisticsComponents/SideBar';

import Title from '../../../../components/General/Title';

import GraphDetalhes from './GraphDetalhes'
import SelectDetalhes from './SelectDetalhes'

import '../../styles.css';

const Detalhes = () => {

    return(
        <React.Fragment>
            <Header/>
            <div className={'mainStatistics'}>
                <Title name={"Estatísticas"}/>
                <div className={'contentStatistics'}>
                    <NavBar selectedOption={"Disciplinas"} listEnum={['Discentes', 'Disciplinas', 'Matrículas']}/>
                    <div className={'modelStatistics'}>
                        <div className={'listStatistics'}>
                            <SideBar selectedOption={"Detalhes"} navSelected={"disciplinas"} listOption={['Sumário', 'Detalhes', 'Desempenho', 'Insucesso', 'Requisitos']} names={['Sumario', 'Detalhes', 'Desempenho', 'Insucesso', 'Requisitos']}/>
                            <div className={'compStatistics'}>
                                <SelectDetalhes/>
                                <GraphDetalhes/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>    )
}

export default Detalhes;