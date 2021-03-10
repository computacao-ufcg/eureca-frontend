import React from 'react';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

import '../../../../pages/Statistics/styles.css';

const AlumniGraph = (props) => {

    return (
        <React.Fragment>
            {props.data ? 
                <div className={'mainGraphs'}>
                    <LineChart
                        width={800}
                        height={400}
                        margin={{
                            top: 5, right: 30, left: 20, bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />

                        <XAxis dataKey="graduationTerm"  allowDuplicatedCategory={false} label={{ value: 'Semestres', angle: 0, position: 'insideBottom', offset:-5 }}/>
                        <YAxis yAxisId="left" dataKey="alumniCount" label={{ value: 'Egressos', angle: -90, position: 'insideLeft'}} />
                        <YAxis yAxisId="right" orientation="right" domain={[0, 10]} label={{ value: 'CRA', angle: -270, position: 'insideRight', textAnchor: 'middle'}}/>

                        <Tooltip />
                        <Legend verticalAlign="top" margin={{top: 10, left: 10, right: 0, bottom: 0 }} /> 
                        <Line dataKey="alumniCount" data={props.data}  name="Número de Egressos" yAxisId="left" stroke="#885d41" key="Número de Egressos" />
                        <Line dataKey="averageGpa" data={props.data} name="CRA Médio" yAxisId="right" stroke="#0073e5" key="CRA Médio"/>
                    </LineChart>
                </div>
            : null}
        </React.Fragment>
    )
}

export default AlumniGraph;