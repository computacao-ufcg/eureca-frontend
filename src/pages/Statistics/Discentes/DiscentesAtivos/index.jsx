import React, { useState, useEffect } from 'react';

import Header from '../../../../components/General/Header';
import NavBar from '../../../../components/StatisticsComponents/NavBar';
import SideBar from '../../../../components/StatisticsComponents/SideBar';
import Title from '../../../../components/General/Title/';

import SliderAtivos from './SliderAtivos';
import GraphAtivos from './GraphAtivos';

import api from '../.././../../services/api';

import '../../styles.css';

const DiscentesAtivos = () => {
    const [dataAtivos, setDataAtivos] = useState([]);
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(0);
    const [label, setLabel] = useState([]);
    // const [load, setLoad] = useState(true);

     /**
     * Metodo responsavel por pegar o label do gráfico.
     * @param {Object} data // DataAtivos
     */
    const getLabel = (data) => {
        const aux = new Set();
        let newLabel = [];

        data.forEach(e => {
            aux.add(e.periodo_ingresso); // montando o novo label com elementos unicos.
        });

        newLabel = Array.from(aux).sort((a, b) => a - b); // Transformando em array e ordenando o Label

        setMin(0);
        setMax(newLabel.length - 1);

        return newLabel;
    }

    const handleSlider = (min, max) => {      
        setMin(min);
        setMax(max);
        fetchDataApiWithLabel(min, max);
    }

    const fetchDataApiWithLabel = async (min, max) => {
        const query = `ativos?de=${label[min]}&ate=${label[max]}`;
        // const query = `ativos?de=${min}&ate=${max}`;
        const res = await api.get(`api/estatisticas/${query}`, {});

        if (res.statusText === 'OK') {
            setDataAtivos(res.data);
        } else {
            console.log("Error");
        }
    }

    useEffect(() => {
        const fetchDataApiWithoutLabel = async () => {

            const query = 'ativos';
            const res = await api.get(`api/estatisticas/${query}`, {});
    
            if (res.statusText === 'OK') {
                setDataAtivos(res.data);
                setLabel(getLabel(res.data));
            } else {
                console.log("Error");
            }
        }
        
        fetchDataApiWithoutLabel();
    },[])

    return (
        <React.Fragment>
            <Header />
            <div className={'mainStatistics'}>
                <Title name={"Estatísticas"} />
                <div className={'contentStatistics'}>
                    <NavBar selectedOption={"Discentes"} listEnum={['Discentes', 'Disciplinas', 'Matrículas']} />
                    <div className={'modelStatistics'}>
                        <div className={'listStatistics'}>
                            <SideBar selectedOption={"Ativos"} navSelected={"discentes"} listOption={['Ativos', 'Egressos', 'Evadidos', 'Retidos']} />
                            {/* { !load ? */}
                            <div className={'compStatistics'}>
                                <SliderAtivos changeSlider={handleSlider} labels={label} min={min} max={max}></SliderAtivos>
                                <GraphAtivos data={dataAtivos} periodoMin={label[min]} periodoMax={label[max]}></GraphAtivos>
                            </div>
                            {/* : <Loader content="Carregando..." vertical></Loader> } */}
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default DiscentesAtivos;