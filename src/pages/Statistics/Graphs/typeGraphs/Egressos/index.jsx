import React, { useState } from 'react';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

import './style.css'

const Egressos = (props) => {
    console.log(props.data)
    return (
        <div className={'mainGraphs'}>
            <LineChart
                width={800}
                height={300}
                data={props.data}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="semestre_vinculo" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />    
                <Line yAxisId="left" type="monotone" dataKey="qtd_egressos" stroke="#885d41" activeDot={{ r: 8 }} />
                <Line yAxisId="right" type="monotone" dataKey="cra" stroke="#0073e5" />
            </LineChart>
        </div>
    )
}

export default Egressos;