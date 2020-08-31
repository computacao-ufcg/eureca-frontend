import React, { useState } from 'react';

import Egressos from './typeGraphs/Egressos';
import Evadidos from './typeGraphs/Evadidos';
import Ativos from './typeGraphs/Ativos';

import './style.css'

const Graphs = (props) => {
    let content = null;

    if(props.option === 'Egressos'){
        content = <Egressos min={props.min} max={props.max} data={props.data}></Egressos>
    } else if(props.option === 'Evadidos') {
        content = <Evadidos min={props.min} max={props.max} data={props.data} labels={props.labels}></Evadidos>
    } else if(props.option === 'Ativos') {
        content = <Ativos min={props.min} max={props.max} data={props.data} labels={props.labels}></Ativos>
    }
    return(
        <div>
            <div className={"titleGraph"}>{props.option}</div>
            {content}
        </div>
    )
}

export default Graphs;