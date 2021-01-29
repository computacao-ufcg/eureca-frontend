import React, { useState } from 'react';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

import Export from '../../../../components/StatisticsComponents/Export'

import '../../styles.css'


const RetainedGraph = (props) => {


    const mapGraph = () => {

        
        
        let soma = 0;
        for (let i = 0; i < props.data.length; i ++) {
            soma += props.data[i].retidos;
            
        }

        

        return soma;
    
    }

    

    return (
        <React.Fragment>
            {props.data ? 
                <div className={'GraphRetidos'}>
                    <LineChart
                        width={800}
                        height={400}
                        margin={{
                            top: 5, right: 30, left: 20, bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />

                        <XAxis dataKey="periodo" />
                        <YAxis datakey="retidos" type="number" domain={[0, 25]} />
                        <Tooltip />
                        <Legend verticalAlign="top" margin={{top: 10, left: 10, right: 0, bottom: 0 }}/>

                        <Line data={props.data} name="Número de Retidos" type="monotone" dataKey="retidos" stroke="#885d41" />


                    </LineChart>

                    
                    <div className={'textRetidos'}>
                        
                        <p>
                            Entre <strong>{props.data[0].periodo}</strong> e <strong>{props.data[props.data.length - 1].periodo}</strong> ficaram retidos <strong>{mapGraph()}</strong> alunos.
                            
                        </p>
                    </div>

                    <div className={'exportEgressos'}>
                        <Export data={props.data} name={'retidos'}/>
                    </div>

                
                </div>

            : null}
            
        </React.Fragment>
    )
}

export default RetainedGraph;