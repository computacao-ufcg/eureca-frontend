import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { XAxis, YAxis, CartesianGrid, Tooltip,
    Legend, Scatter, ScatterChart, Cell } from 'recharts';

import {ativosExemplo} from '../../../util'

import { getMedidas } from '../../../utilAtivos';

import './style.css'

const Ativos = (props) => {
    console.log( "data ativos",props.data)
    console.log("props", props)
    const dataAtivos = props.data ;
    const medidas = getMedidas(props.data);
    const history = useHistory();


    /**
     * Metodo responsavel por retornar ["cor","descricao"] para cada aluno
     * @param {Object} node representacao do aluno
     */
    const handleInfo = (node) => {
        let result = ["red","aluno ruin"];

        // Medida é um único elemento do conjunto Medidas
        const [ medida ] = medidas.filter( e => e.x == node.periodos_integralizados);

        if(node.porcentagem_concluida > 100) {
            result = ["purple", "O aluno já deveria ter se formado"];
        } else if (node.porcentagem_concluida < medida.y ){
            result = ["red","O aluno apresenta dificuldades"];
        } else if (node.porcentagem_concluida >= medida.y && node.porcentagem_concluida < medida.ideal) {
            result = ["green","Está na média dos alunos"];
        } else if (node.porcentagem_concluida >= medida.ideal){
            result = ["blue","O aluno está na medida esperada"]
        } 

        return result;
    }

    const CustomTooltip = ({ active, payload, label }) => {
        if (active) {
          const statusNode = handleInfo(payload[0].payload)[1];
          return (
            <div className="custom-tooltip">
              <p className="title-tooltip">{payload[0].payload.matricula}</p>
              <p>Períodos Integralizados: {payload[0].payload.periodos_integralizados}</p>
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

                <XAxis dataKey="periodos_integralizados" type="number" name='periodosAtivos' />
                <YAxis dataKey="porcentagem_concluida" type="number" name='cursoConcluido' unit='%' />
                <Scatter name="aluno" data={dataAtivos} fill="black">
                    {
                        dataAtivos[0] ? (dataAtivos.map((entry, index) => entry.porcentagem_concluida ? <Cell className="scatter-cell" key={`cell-${index}`} fill={handleInfo(entry)[0]} onClick={() => history.push("statistics/ativos/" + entry.matricula)}/> : null)) : null
                    }
                </Scatter>
                    
            </ScatterChart> : null}
        </div>
    )
}

export default Ativos;