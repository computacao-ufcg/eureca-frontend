import React from 'react';

import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

import {data} from './utilMetrics'

import '../../styles.css'

const GraphMetrics = () => {

    return (
        <div className={'mainGraphs'}>
            <BarChart
                width={800}
                height={400}
                data={data["lp2"]}
                margin={{
                top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" label={{ value: 'Semestres', angle: 0, position: 'insideBottom', offset:-5 }} />
                <YAxis label={{ value: 'Taxa de Sucesso (%)', angle: -90, position: 'insideLeft'}}/>
                <Tooltip />
                <Legend verticalAlign="top" />
                <Bar dataKey="t1" fill="#8884d8" name="Professor(a) 1" />
                <Bar dataKey="t2" fill="#82ca9d" name="Professor(a) 2"/>
                <Bar dataKey="t3" fill="#85cef8" name="Professor(a) 3"/>
            </BarChart>
        </div>
    )
}

export default GraphMetrics;