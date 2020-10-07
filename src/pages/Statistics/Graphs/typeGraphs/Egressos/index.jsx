import React from 'react';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

import './styles.css'

const Egressos = (props) => {
    return (
        <div className={'mainGraphs'}>
            <LineChart
                width={800}
                height={400}
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
                <Line name="Número de Egressos" yAxisId="left" type="monotone" dataKey="qtd_egressos" stroke="#885d41" activeDot={{ r: 8 }} />
                <Line name="CRA Médio" yAxisId="right" type="monotone" dataKey="cra_medio" stroke="#0073e5" />
            </LineChart>
        </div>
    )
}

export default Egressos;