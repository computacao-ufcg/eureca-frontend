import React from 'react';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

import Export from '../../../../components/StatisticsComponents/Export'

import '../../styles.css'

const GraphEgressos = (props) => {
    return (
        <React.Fragment>
            {props.data ? 
                <div className={'mainGraphs'}>
                    <LineChart
                        width={800}
                        height={400}
                        data={props.data.periodos}
                        margin={{
                            top: 5, right: 30, left: 20, bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="semestre_ingresso" />
                        <YAxis yAxisId="left" />
                        <YAxis yAxisId="right" orientation="right" />
                        <Tooltip />
                        <Legend />    
                        <Line name="Número de Egressos" yAxisId="left" type="monotone" dataKey="qtd_egressos" stroke="#885d41" activeDot={{ r: 8 }} />
                        <Line name="CRA Médio" yAxisId="right" type="monotone" dataKey="cra_medio" stroke="#0073e5" />
                    </LineChart>
                    
                    <div className={'textEgressos'}>
                        <p>
                        Entre <strong>{props.data.periodos[0].semestre_ingresso}</strong> e <strong>{props.data.periodos[props.data.periodos.length - 1].semestre_ingresso}</strong> foram graduados <strong>{props.data.total_graduados}</strong> discentes, com uma média de <strong>{props.data.media_graduados}</strong> graduados por período. 
                        O período <strong>{props.data.periodo_max_graduados}</strong> foi o que mais teve egressos <strong>({props.data.max_graduados})</strong>, enquanto que o período <strong>{props.data.periodo_min_graduados}</strong> foi o que teve menos <strong>({props.data.min_graduados})</strong>. O CRA médio desse período foi de <strong>{props.data.cra_medio}</strong>.
                        </p>
                    </div>

                    <div className={'exportEgressos'}>
                        <Export data={props.data.periodos} name={"egressos"}/>
                    </div>

                </div>
                
            : null}
        </React.Fragment>
    )
}

export default GraphEgressos;