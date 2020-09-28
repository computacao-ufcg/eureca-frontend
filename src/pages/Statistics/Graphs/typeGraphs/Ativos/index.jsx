import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import {
    XAxis, YAxis, CartesianGrid, Tooltip,
    Legend, Scatter, ScatterChart
} from 'recharts';

import { getDataScatter } from '../../../utilAtivos';

import './style.css';

const Ativos = (props) => {
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(0);
    const [periodo, setPeriodo] = useState(["",0]);
    
    console.log("Props de Ativos:", props);
    const dataAtivos = props.data[0] ? getDataScatter(props.data) : null;

    const getPeriodDown= (data) => {
        let myMap = new Map();
        let periodo = "";
        let maior  = 0;
        let result = [periodo, maior];

        // criado um mapa com a quantidade de cada elemento.
        data.forEach( e => {
            let value = myMap.get(e.periodo_ingresso);
            if(value){
                myMap.set(e.periodo_ingresso, (value + 1));
            }else{
                myMap.set(e.periodo_ingresso, 1);
            }
        })
        
        // pegando o periodo que mais se repetiu.
        for(let [key,value] of myMap){
            if(maior < value){
                periodo = key;
                maior = value;
            }
        }

        return result;
    }

    const getPercentagem = (data) => {
        const total = props.data.length;
        let result = 0;

        if(total !== 0){
            result = parseFloat((data.length / total * 100).toFixed(2));
        }
        
        return result;
    }

    useEffect ( () => {
        setMin(props.min);
        setMax(props.max);
    });

    const CustomTooltip = ({ active, payload }) => {
        if (active) {
            return (
                <div className="custom-tooltip">
                    <p className="title-tooltip">{payload[0].payload.matricula}</p>
                    <p>Períodos Integralizados: {payload[0].payload.periodos_integralizados}</p>
                    <p>Curso Concluído: {payload[0].payload.porcentagem_concluida}%</p>
                </div>
            );
        }

        return null;
    };

    return (
        <>
            {dataAtivos ? 
            <>
                <div className={'mainGraphs'}>
                    
                        <ScatterChart
                            width={800}
                            height={600}
                            margin={{
                                top: 20, right: 80, bottom: 20, left: 20,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <Legend />
                            <Tooltip cursor={{ strokeDasharray: '3 3' }} content={<CustomTooltip />} />
                            <XAxis dataKey="periodos_integralizados" type="number" name='periodosAtivos' />
                            <YAxis dataKey="porcentagem_concluida" type="number" name='cursoConcluido' unit='%' />
                            <Scatter data={dataAtivos[0]} fill={"Red"} name={"Aluno com dificuldades"}></Scatter>
                            <Scatter data={dataAtivos[1]} fill={"green"} name={"Aluno na media dos discentes"}></Scatter>
                            <Scatter data={dataAtivos[2]} fill={"blue"} name={"Aluno na media ideal"}></Scatter>
                            <Scatter data={dataAtivos[3]} fill={"purple"} name={"Aluno com créditos concluidos"}></Scatter>
                        </ScatterChart> 
                </div>
                <div>
                    {/* (setPeriodo(getPeriodDown(dataAtivos[0])), */}
                        <p>Existem <strong>{props.data.length}</strong> discentes ativos com ingresso entre <strong>{min}</strong> e <strong>{max}</strong>. <strong>{dataAtivos[2].length}</strong> ({getPercentagem(dataAtivos[2])}%) 
                        dos discentes ativos estão com a execução curricular no patamar ideal, <strong>{dataAtivos[1].length}</strong> ({getPercentagem(dataAtivos[1])}%) 
                        estão dentro do esperado, <strong>{dataAtivos[3].length}</strong> ({getPercentagem(dataAtivos[3])}%) estão acima do esperado, 
                        enquanto que <strong>{dataAtivos[0].length}</strong> ({getPercentagem(dataAtivos[0])}%) estão com a execução curricular abaixo do esperado. 
                        <strong>{periodo[0]}</strong> é o semestre com mais discentes com execução curricular abaixo do esperado ({periodo[1]}).
                        </p> 
                </div>
            </> : null }
        </>
    )
}

export default Ativos;