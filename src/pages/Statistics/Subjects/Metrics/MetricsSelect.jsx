import React from 'react';

import { SelectPicker } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';

import {metricas, disciplinas} from './metricsUtil'

const MetricsSelect = (props) => {
    
    const changeMetric = (value) => {
        props.handleMetrics(value)
    }
    const changeSubject = (value) => {
        props.handleSubject(value)
    }
    return(
        <React.Fragment>
            <SelectPicker placeholder={"Disciplinas"} data={disciplinas} onChange={changeSubject} groupBy="role" defaultValue={'lp2'} block />
            <hr/>
            <SelectPicker placeholder={"Métricas"} data={metricas} onChange={changeMetric} defaultValue={'taxaSucesso'} block />
            <hr/>
        </React.Fragment>
    )
}

export default MetricsSelect;