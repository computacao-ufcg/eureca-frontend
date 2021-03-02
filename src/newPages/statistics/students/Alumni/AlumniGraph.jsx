import React from 'react';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

import './style.css';

const AlumniGraph = (props) => {

    const summary = props.data.summary;

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
                        <YAxis yAxisId="left" dataKey="alumniCount" label={{ value: 'Egressos', angle: -90, position: 'insideLeft' }} />
                        <YAxis yAxisId="right" orientation="right" domain={[0, 10]} label={{ value: 'CRA', angle: -270, position: 'insideRight', textAnchor: 'middle' }} />

                        <Tooltip />
                        <Legend verticalAlign="top" margin={{ top: 10, left: 10, right: 0, bottom: 0 }} />
                        <Line dataKey="alumniCount" data={props.data.terms} name="Número de Egressos" yAxisId="left" stroke="#885d41" key="Número de Egressos" />
                        <Line dataKey="averageGpa" data={props.data.terms} name="CRA Médio" yAxisId="right" stroke="#0073e5" key="CRA Médio" />
                    </LineChart>
                    <div className='textEgressos'>
                    <p>
                    Entre <strong>{props.data.terms[0].graduationTerm || 0}</strong> e <strong>{props.data.terms[props.data.terms.length - 1].graduationTerm || 0}</strong> foram graduados <strong>{summary.totalDegreeCount || 0}</strong> discentes, com uma média de <strong>{summary.averageDegreeCount.toFixed(2) || 0}</strong> graduados por período. 

                    O período <strong>{summary.maxDegreeCountTerm || 0}</strong> foi o que mais teve egressos <strong>({summary.maxDegreeCount || 0})</strong>, enquanto que o período <strong>{summary.minDegreeCountTerm || 0}</strong> foi o que teve menos <strong>({summary.minDegreeCount || 0})</strong>. O CRA médio desse período foi de <strong>{summary.averageGpa.toFixed(2) || 0}</strong>.
                    </p>
                </div>
                </div>
                
                : null}
        </React.Fragment>
    )
}

export default AlumniGraph;