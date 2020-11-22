import React from 'react';

import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

import {dataSucesso} from '../metricsUtil'

import '../../../styles.css'

const MetricsSucessGraph = () => {

    return (
        <div className={'mainGraphs'}>
            <BarChart
                width={800}
                height={400}
                data={dataSucesso["lp2"]}
                margin={{
                top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" label={{ value: 'Semestres', angle: 0, position: 'insideBottom', offset:-5 }} />
                <YAxis label={{ value: 'Taxa de Sucesso (%)', angle: -90, position: 'insideLeft'}}/>
                <Tooltip />
                <Legend verticalAlign="top" />
                <Bar dataKey="t1" fill="#E3A11B" name="Professor(a) 1" />
                <Bar dataKey="t2" fill="#108FEE" name="Professor(a) 2" />
                <Bar dataKey="t3" fill="#C2BBB0" name="Professor(a) 3" />
                <Bar dataKey="t4" fill="#B9513C" name="Professor(a) 4" />
                <Bar dataKey="t5" fill="#3C2619" name="Professor(a) 5" />
            </BarChart>
        </div>
    )
}

export default MetricsSucessGraph;