import React, { useEffect, useState } from 'react';

import { FiSearch } from 'react-icons/fi';

import Header from '../Header';

import ActiveSlider from './ActiveSlider';
import ActiveGraph from './ActiveGraph';

import api from '../../../services/api';

import './styles.css';

const Actives = () => {

    const [dataAtivos, setDataAtivos] = useState([]);
    const [dataExport, setDataExport] = useState([]);
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(0);
    const [label, setLabel] = useState([]);
    // const [load, setLoad] = useState(true);

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
    }

    const fetchDataApiWithLabel = async (min, max) => {
        const query = `ativos?de=${label[min]}&ate=${label[max]}`;
        const queryExport = `ativos/csv?de=${label[min]}&ate=${label[max]}`;

        const resAtivos = await api.get(`api/estatisticas/${query}`, {});
        const resExport = await api.get(`api/estatisticas/${queryExport}`, {});

        if (resAtivos.statusText === 'OK') {
            setDataAtivos(resAtivos.data);
        } else {
            console.log("Error Data Ativos");
        }

        if(resExport.statusText === 'OK'){
            setDataExport(resExport.data);
        }else {
            console.log("Error Data Export");
        }
    }

    useEffect(() => {
        const fetchDataApiWithoutLabel = async () => {
            const query = 'ativos';
            const queryExport = 'ativos/csv';
    
            const resAtivos = await api.get(`api/estatisticas/${query}`, {});
            const resExport = await api.get(`api/estatisticas/${queryExport}`, {});
    
            if (resAtivos.statusText === 'OK') {
                setDataAtivos(resAtivos.data);
                setLabel(getLabel(resAtivos.data));
            } else {
                console.log("Error Data Ativos");
            }

            if(resExport.statusText === 'OK'){
                setDataExport(resExport.data);
            }else {
                console.log("Error Data Export");
            }
        }
        
        fetchDataApiWithoutLabel();
    },[])


    return (
        <div className="main-container">
            <Header></Header>
            <div className="main-actives">
                <div className="main-actives-resume">
                    <div className="resume-text">
                        <p>ATIVOS</p>
                        <p>2012.2 a 2010.1</p>
                        <p>709</p>
                        <p>DISCENTES</p>
                    </div>
                    <div className="resume-box">
                        <div>
                            <p><span>42</span><br /> ideal</p>
                        </div>
                        <div>
                            <p><span>281</span><br />  esperado</p>
                        </div>
                        <div>
                            <p><span>1</span><br />  acima</p>
                        </div>
                        <div>
                            <p><span>385</span><br />  abaixo</p>
                        </div>
                    </div>
                </div>

                <div className="actives-input-box">
                    <div>
                        <FiSearch size={25} />
                    </div>
                    <input type="text" placeholder="Buscar por matrícula" />
                </div>

                <div className="actives-graph-box">
                    <div onMouseUp={() => fetchDataApiWithLabel(min, max)}>
                        <ActiveSlider changeSlider={handleSlider} labels={label} min={min} max={max}></ActiveSlider>
                    </div>
                    <ActiveGraph data={dataAtivos} periodoMin={label[min]} periodoMax={label[max]}></ActiveGraph>
                </div>
            </div>
            <div>NotREMOVE</div>
        </div>
    );
}

export default Actives;