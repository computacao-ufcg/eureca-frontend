import React, { useState } from 'react';

import Egressos from './typeGraphs/Egressos';
import Evadidos from './typeGraphs/Evadidos';
import Ativos from './typeGraphs/Ativos';

import {CustomSlider1, CustomSlider2, CustomSlider3} from '../../../components/StatisticsComponents/slider/Slider'

import './style.css'

const Graphs = (props) => {
    let content = null;
    let slider = null;
    console.log(props.data)
    if(props.option === 'Egressos'){
        slider = <CustomSlider1 min={0} max={66} changeSlider={props.changeSlider} labels={props.labelSlider} type={'egressos'}/>
        content = <Egressos min={props.min} max={props.max} data={props.data.periodos} type={props.option}></Egressos>
    } else if(props.option === 'Evadidos') {
        slider = <CustomSlider3 min={0} max={47} changeSlider={props.changeSlider} labels={props.labelSlider} type={'evadidos'}/>
        content = <Evadidos min={props.min} max={props.max} data={props.data} labels={props.labels} type={props.option}></Evadidos>
    } else if(props.option === 'Ativos') {
        slider = <CustomSlider2 min={0} max={17} changeSlider={props.changeSlider} labels={props.labelSlider} type={'ativos'}/>
        content = <Ativos min={props.min} max={props.max} data={props.data} labels={props.labels} type={props.option}></Ativos>
    }
    return(
        <div>
            {slider}
            <div className={"titleGraph"}>{props.option}</div>
            {content}
        </div>
    )
}

export default Graphs;