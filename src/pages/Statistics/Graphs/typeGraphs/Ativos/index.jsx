import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { ComposedChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
    Legend, Scatter, ScatterChart, Cell } from 'recharts';

import {ativosExemplo} from '../../../util'

import './style.css'

const Ativos = (props) => {
    console.log(props.data)
    const dataAtivos = props.data 
    const aux = ativosExemplo
    const history = useHistory();

    const handleColor = (node) => {
        if(node.porcentagem_concluida > 100) {
            return "brown"
        } else if (node.porcentagem_concluida < aux.medidas[node.periodos_ativos - 1].y ){
            return "red"
        } else if (node.porcentagem_concluida >= aux.medidas[node.periodos_ativos - 1].y && node.porcentagem_concluida < aux.medidas[node.periodos_ativos - 1].ideal) {
            return "green"
        } else if (node.porcentagem_concluida >= aux.medidas[node.periodos_ativos - 1].ideal){
            return "blue"
        } 
    }

    const status = (node) => {
        if(node.porcentagem_concluida > 100) {
            return "O aluno já deveria ter se formado"
        } else if (node.porcentagem_concluida < aux.medidas[node.periodos_ativos - 1].y ){
            return "O aluno apresenta dificuldades"
        } else if (node.porcentagem_concluida >= aux.medidas[node.periodos_ativos - 1].y && node.porcentagem_concluida < aux.medidas[node.periodos_ativos - 1].ideal) {
            return "O aluno apresenta desempenho satisfatório"
        } else if (node.porcentagem_concluida >= aux.medidas[node.periodos_ativos - 1].ideal){
            return "O aluno está acima do esperado"
        } 
    }
    const CustomTooltip = ({ active, payload, label }) => {
        if (active) {
          const statusNode = status(payload[0].payload)
          return (
            <div className="custom-tooltip">
              <p className="title-tooltip">{payload[0].payload.matricula}</p>
              <p>Períodos ativos: {payload[0].payload.periodos_ativos}</p>
              <p>Curso Concluído: {payload[0].payload.porcentagem_concluida}%</p>
              <p className="desc">{statusNode}</p>
            </div>
          );
        }
      
        return null;
    };
    return (
        <div className={'mainGraphs'}>
            {dataAtivos ? 
            <ScatterChart
                width={800}
                height={600}
                margin={{
                top: 20, right: 80, bottom: 20, left: 20,
                }}
            >
                <CartesianGrid strokeDasharray="3 3"  />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} content={<CustomTooltip />}/>
                <Legend />

                <XAxis dataKey="periodos_ativos" type="number" name='periodosAtivos' />
                <YAxis dataKey="porcentagem_concluida" type="number" name='cursoConcluido' unit='%' />
                <Scatter name="aluno" data={dataAtivos} fill="black">
                    {
                        dataAtivos[0] ? (dataAtivos.map((entry, index) => entry.porcentagem_concluida ? <Cell className="scatter-cell" key={`cell-${index}`} fill={handleColor(entry)} onClick={() => history.push("statistics/ativos/" + entry.matricula)}/> : null)) : null
                    }
                </Scatter>
                    
            </ScatterChart> : null}
        </div>
    )
}

export default Ativos;