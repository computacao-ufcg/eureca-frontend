import React from 'react';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

import Export from '../../../../components/StatisticsComponents/Export'

import '../../styles.css'

import { prediction } from './graduatedUtil'

const GraduatedGraph = (props) => {
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

                        <XAxis dataKey="periodo_conclusao"  allowDuplicatedCategory={false} label={{ value: 'Semestres', angle: 0, position: 'insideBottom', offset:-5 }}/>
                        <YAxis yAxisId="left" dataKey="qtd_egressos" label={{ value: 'Egressos', angle: -90, position: 'insideLeft'}} />
                        <YAxis yAxisId="right" orientation="right" domain={[0, 10]} label={{ value: 'CRA', angle: -270, position: 'insideRight', textAnchor: 'middle'}}/>

                        <Tooltip />
                        <Legend verticalAlign="top" margin={{top: 10, left: 10, right: 0, bottom: 0 }} /> 
                        <Line dataKey="qtd_egressos" data={props.data.periodos}  name="Número de Egressos" yAxisId="left" stroke="#885d41" key="Número de Egressos" />
                        <Line dataKey="cra_medio" data={props.data.periodos} name="CRA Médio" yAxisId="right" stroke="#0073e5" key="CRA Médio"/>
                        <Line data={prediction} name="Número de Egressos Previstos" yAxisId="left" type="monotone" dataKey="qtd_egressos" stroke="#885d41" strokeDasharray="5 5" key="previstos" />
                        
                    </LineChart>
                    
                    <div className={'textEgressos'}>
                        <p>
                        Entre <strong>{props.data.periodos[0].periodo_conclusao}</strong> e <strong>{props.data.periodos[props.data.periodos.length - 1].periodo_conclusao}</strong> foram graduados <strong>{props.data.total_graduados}</strong> discentes, com uma média de <strong>{props.data.media_graduados}</strong> graduados por período. 

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

export default GraduatedGraph;