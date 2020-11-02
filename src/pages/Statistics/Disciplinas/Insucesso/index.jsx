import React from 'react';

import Header from '../../../../components/General/Header';
import NavBar from '../../../../components/StatisticsComponents/NavBar';
import SideBar from '../../../../components/StatisticsComponents/SideBar';

import Title from '../../../../components/General/Title';

import '../../styles.css';

const Insucesso = () => {

    return(
        <React.Fragment>
            <Header/>
            <div className={'mainStatistics'}>
                <Title name={"Estatísticas"}/>
                <div className={'contentStatistics'}>
                    <NavBar selectedOption={"Disciplinas"} listEnum={['Discentes', 'Disciplinas', 'Matrículas']}/>
                    <div className={'modelStatistics'}>
                        <div className={'listStatistics'}>
                            <SideBar selectedOption={"Insucesso"} navSelected={"disciplinas"} listOption={['Sumário', 'Detalhes', 'Desempenho', 'Insucesso', 'Requisitos']} names={['Sumario', 'Detalhes', 'Desempenho', 'Insucesso', 'Requisitos']}/>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Insucesso;