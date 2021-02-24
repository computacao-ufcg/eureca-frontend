import React, { useEffect, useState } from 'react';

import Header from '../../../../newComponents/Home/Header'
import Title from '../../../../newComponents/Home/Title'
import DropoutSlider from './DropoutSlider'
import DropoutGraph from './DropoutGraph'

import { api_EB } from '../../../../services/api';

import './style.css'

const Dropout = () => {

    const [dataEgressos, setDataEgressos] = useState(null);
    const [min, setMin] = useState('');
    const [max, setMax] = useState('');

    useEffect(() => {
        updateGraph('1996.1', '2020.1')
    },[]);

    const handleSlider = (min, max) => {      
        setMin(min);
        setMax(max);
        updateGraph(min, max)
    }

    const updateGraph = async (min, max) => {
        let query = `api/statistics/students/dropouts?from=${min}&to=${max}`;

        const res = await api_EB.get(query, {headers:{"Authentication-Token": sessionStorage.getItem('eureca-token')}});
        
        if(res){
            console.log(res.data)
            setDataEgressos(res.data);
        } else{
            console.log(res.statusText);
        }

    }

    return(
        <React.Fragment>
            <Header/>
            <Title/>
            <div className={"dropout-main"}>
                <div className={"dropout-content"}>
                    <div className={"dropout-slider"}>
                        <div className={"dropout-title"}>Evadidos</div>
                        <DropoutSlider changeSlider={handleSlider}/>
                        <DropoutGraph data={dataEgressos}/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Dropout;

