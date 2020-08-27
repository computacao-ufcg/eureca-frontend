import React, { useState } from 'react';

import { ComposedChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
    Legend, Scatter, ScatterChart, Cell } from 'recharts';

import './style.css'

const Ativos = (props) => {

    const handleColor = (node) => {
        if (node.y <= props.data.medidas[node.x - 1].y ){
            return "red"
        } else if (node.y > props.data.medidas[node.x - 1].y && node.y <= props.data.medidas[node.x - 1].ideal) {
            return "blue"
        } else if (node .y > props.data.medidas[node.x - 1].ideal){
            return "green"
        }
    }
    return (
        <div className={'mainGraphs'}>
            <ScatterChart
                width={800}
                height={300}
                margin={{
                top: 20, right: 80, bottom: 20, left: 20,
                }}
            >
                <CartesianGrid strokeDasharray="3 3"  />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Legend />

                <XAxis dataKey="x" type="number" name='periodosAtivos' />
                <YAxis dataKey="y" type="number" name='cursoConcluido' unit='%' />
                <Scatter name="aluno" data={props.data.alunos} fill="black">
                    {
                        props.data.alunos.map((entry, index) => <Cell key={`cell-${index}`} fill={handleColor(entry)} />)
                    }
                </Scatter>
                    
            </ScatterChart>
        </div>
    )
}

export default Ativos;