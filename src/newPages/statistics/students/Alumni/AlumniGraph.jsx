import React from 'react';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

import { subtitles_translations } from './util';

import './style.css';

const AlumniGraph = (props) => {
    // obtém a tradução correspondente do valor selecionado
    const labelSelected = subtitles_translations[props.option];

    return (
        <React.Fragment>
            {props.data.terms ?
                <div className="main-graphs-alumni">
                    <LineChart
                        width={800}
                        height={400}
                        margin={{
                            top: 5, right: 30, left: 20, bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />

                        <XAxis dataKey="graduationTerm" allowDuplicatedCategory={false} label={{ value: 'Semestres', angle: 0, position: 'insideBottom', offset: -5 }} />
                        <YAxis yAxisId="left" dataKey={ props.option } label={{ value: labelSelected, angle: -90, position: 'insideLeft' }} />

                        <Tooltip />
                        <Legend verticalAlign="top" margin={{ top: 30, left: 10, right: 0, bottom: 0 }} />
                        <Line dataKey={ props.option } data={props.data.terms} name={ labelSelected } yAxisId="left" stroke="#885d41" key="Número de Egressos" />
                    </LineChart>
                        
                </div>     
                : null}
        </React.Fragment>
    )
}

export default AlumniGraph;