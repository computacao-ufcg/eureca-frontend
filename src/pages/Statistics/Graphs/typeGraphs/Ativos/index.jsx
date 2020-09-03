import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { ComposedChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
    Legend, Scatter, ScatterChart, Cell } from 'recharts';

import './style.css'

const Ativos = (props) => {
    const history = useHistory();
    const handleColor = (node) => {
        if (node.y < props.data.medidas[node.x - 1].y ){
            return "red"
        } else if (node.y >= props.data.medidas[node.x - 1].y && node.y < props.data.medidas[node.x - 1].ideal) {
            return "green"
        } else if (node .y >= props.data.medidas[node.x - 1].ideal){
            return "blue"
        }
    }

    const status = (node) => {
        if (node.y < props.data.medidas[node.x - 1].y ){
            return "O aluno apresenta dificuldades"
        } else if (node.y >= props.data.medidas[node.x - 1].y && node.y < props.data.medidas[node.x - 1].ideal) {
            return "O aluno apresenta desempenho satisfatório"
        } else if (node .y >= props.data.medidas[node.x - 1].ideal){
            return "O aluno está acima do esperado"
        }
    }
    const CustomTooltip = ({ active, payload, label }) => {
        if (active) {
          const statusNode = status(payload[0].payload)
          return (
            <div className="custom-tooltip">
              <p className="title-tooltip">{payload[0].payload.id}</p>
              <p>Períodos ativos: {payload[0].payload.x}</p>
              <p>Curso Concluído: {payload[0].payload.y}%</p>
              <p className="desc">{statusNode}</p>
            </div>
          );
        }
      
        return null;
    };
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
                <Tooltip cursor={{ strokeDasharray: '3 3' }} content={<CustomTooltip />}/>
                <Legend />

                <XAxis dataKey="x" type="number" name='periodosAtivos' />
                <YAxis dataKey="y" type="number" name='cursoConcluido' unit='%' />
                <Scatter name="aluno" data={props.data.alunos} fill="black">
                    {
                        props.data.alunos.map((entry, index) => <Cell className="scatter-cell" key={`cell-${index}`} fill={handleColor(entry)} onClick={() => history.push("statistics/ativos/" + entry.id)}/>)
                    }
                </Scatter>
                    
            </ScatterChart>
        </div>
    )
}

export default Ativos;