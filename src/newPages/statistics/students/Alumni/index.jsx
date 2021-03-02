import React, { useEffect, useState } from 'react';

import Header from '../../../../newComponents/Header'
import Title from '../../../../newComponents/Home/Title'
import AlumniSlider from './AlumniSlider'
import AlumniGraph from './AlumniGraph'
import Export from '../../../../newComponents/Export'

import { api_EB } from '../../../../services/api';

import './style.css'

const Alumni = () => {

    const [dataEgressos, setDataEgressos] = useState(null);
    const [min, setMin] = useState('');
    const [max, setMax] = useState('');
    const [dataCSV, setDataCSV] = useState([]);

    useEffect(() => {
        updateGraph('1966.1', '2020.1')
        handleCSV('1966.1', '2020.1');
    },[]);

    const handleSlider = (min, max) => {      
        setMin(min);
        setMax(max);
        updateGraph(min, max);
        handleCSV(min, max);
    }

    const updateGraph = async (min, max) => {
        let query = `api/statistics/students/alumni?from=${min}&to=${max}`;

        const res = await api_EB.get(query, {headers:{"Authentication-Token": sessionStorage.getItem('eureca-token')}});
        
        if(res){
            console.log(res.data)
            setDataEgressos(res.data);
        } else{
            console.log(res.statusText);
        }
    }

    const handleCSV = async (min, max) => {
        let query = `api/statistics/students/alumni/csv?from=${min}&to=${max}`;

        const res = await api_EB.get(query, {headers:{"Authentication-Token": sessionStorage.getItem('eureca-token')}});
        
        if(res){
            console.log(res.data)
            setDataCSV(res.data);
        } else{
            console.log(res.statusText);
        }
    }

    return(
        <React.Fragment>
            <Header/>
            <div className="alumni-main">
                <div className="alumni-content">
                    <div className="alumni-slider">
                        <div className="alumni-title">Egressos</div>
                        <AlumniSlider changeSlider={handleSlider}/>
                        <AlumniGraph data={dataEgressos || {}}/>
                        <Export data={dataCSV} name={'alumni'}/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Alumni;

