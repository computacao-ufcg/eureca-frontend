import React from 'react';

import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

import {dataSize} from '../utilMetrics'

import '../../../styles.css'

const GraphMetricsSize = () => {

    return(
        <div className={'mainGraphs'}>
            <BarChart
                width={800}
                height={400}
                data={dataSize["lp2"]}
                margin={{
                top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" label={{ value: 'Semestres', angle: 0, position: 'insideBottom', offset:-5 }} />
                <YAxis label={{ value: 'Tamanho das Turmas', angle: -90, position: 'insideLeft'}}/>
                <Tooltip />
                <Legend verticalAlign="top" />
                <Bar dataKey="min" fill="#E3A11B" name="Mínimo" />
                <Bar dataKey="medio" fill="#108FEE" name="Médio" />
                <Bar dataKey="max" fill="#C2BBB0" name="Máximo" />
            </BarChart>
        </div>
    )
}

export default GraphMetricsSize;