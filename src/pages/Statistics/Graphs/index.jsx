import React from 'react';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

import './style.css'

import {egressos} from '../util'

const Graphs = () => {
    const data = [
        {
            name: '12.1', masc: 55, fem: 12, cra: 65,
        },
        {
            name: '12.2', masc: 67, fem: 11, cra: 72,
        },
        {
            name: '13.1', masc: 70, fem: 21, cra: 77,
        },
        {
            name: '13.2', masc: 75, fem: 15, cra: 79,
        },
        {
            name: '14.1', masc: 78, fem: 12, cra: 72,
        },
        {
            name: '14.2', masc: 72, fem: 15, cra: 67,
        },
        {
            name: '15.1', masc: 76, fem: 13, cra: 74,
        },
        {
            name: '15.2', masc: 77, fem: 15, cra: 76,
        },
        {
            name: '16.1', masc: 65, fem: 22, cra: 73,
        },
        {
            name: '16.2', masc: 72, fem: 17, cra: 75,
        },
    ];
    console.log(egressos.periodos)
    return (
        <div className={'mainGraphs'}>
            <LineChart
                width={500}
                height={300}
                data={egressos.periodos}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Line yAxisId="left" type="monotone" dataKey="egressos" stroke="#885d41" activeDot={{ r: 8 }} />
                <Line yAxisId="right" type="monotone" dataKey="cra" stroke="#0073e5" />
            </LineChart>
        </div>
    )
}

export default Graphs;