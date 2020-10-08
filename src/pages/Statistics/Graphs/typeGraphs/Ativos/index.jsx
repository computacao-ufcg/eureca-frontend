import React, { useEffect, useState }  from 'react';

import { XAxis, YAxis, CartesianGrid, Tooltip, Scatter, ScatterChart } from 'recharts';

import Loading from '../../../../../components/general/Loading';
import Legenda from '../../../../../components/statisticsComponents/ativos/Legenda';

import { getDataScatter, getPercentagem, getPeriodDown } from './utilAtivos';

import './styles.css';

const Ativos = (props) => {
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(0);
    const [load, setLoad] = useState(false);

    const [red, setRed ] = useState([]);
    const [green, setGreen ] = useState([]);
    const [blue, setBlue ] = useState([]);
    const [purple, setPurple ] = useState([]);
    const [periodDown, setPeriodDown] = useState([]);
    const [periodDownValue, setPeriodDownValue] = useState(0);

    const carregaDados = () => {
        setLoad(false);

        const [red, green, blue, purple] = getDataScatter(props.data);
        const [ period, percentagem ] = getPeriodDown(red);

        setMin(props.min);
        setMax(props.max);

        setRed(red);
        setGreen(green);
        setBlue(blue);
        setPurple(purple);

        setPeriodDown(period);
        setPeriodDownValue(percentagem);

        setLoad(true);
    }

    useEffect(() => {
        carregaDados();
    },[props.data]);

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
            {load ?
                <div className="ativos-main">
                    <div className={'mainGraphs'}>
                        <ScatterChart
                            width={800}
                            height={700}
                            margin={{
                                top: 20, right: 80, bottom: 20, left: 20,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <Tooltip cursor={{ strokeDasharray: '3 3' }} content={<CustomTooltip />} />
                            <XAxis 
                                dataKey="periodos_integralizados" 
                                type="number" 
                                name='periodosAtivos' 
                                label={{ value: "Periodos Integralizados", position: 'insideBottom', offset:0 }}
                            />
                            <YAxis 
                                dataKey="porcentagem_concluida" 
                                type="number" 
                                name='cursoConcluido' 
                                unit='%' 
                                label={{ value: "Curso Concluido", angle: -90, position: 'insideLeft', offset:0 }}
                            />
                            <Scatter data={red} fill={"Red"} name={"Abaixo do esperado"}></Scatter>
                            <Scatter data={green} fill={"green"} name={"Dentro do esperado"}></Scatter>
                            <Scatter data={blue} fill={"blue"} name={"Ideal"}></Scatter>
                            <Scatter data={purple} fill={"purple"} name={"Acima do esperado"}></Scatter>
                        </ScatterChart>
                    </div>
                    <Legenda></Legenda>
                    <div className="ativos-texto">
                         <p>Existem <strong>{props.data.length}</strong> discentes ativos com ingresso entre <strong>{min}</strong> e <strong>{max}</strong>. <strong>{blue.length}</strong> ({getPercentagem(props, blue)}%)
                        dos discentes ativos estão com a execução curricular no patamar ideal, <strong>{green.length}</strong> ({getPercentagem(props, green)}%)
                        estão dentro do esperado, <strong>{purple.length}</strong> ({getPercentagem(props, purple)}%) estão acima do esperado,
                        enquanto que <strong>{red.length}</strong> ({getPercentagem(props, red)}%) estão com a execução curricular abaixo do esperado.  
                        <strong>{periodDown}</strong> é o semestre com mais discentes com execução curricular abaixo do esperado ({periodDownValue}).
                        </p>
                    </div>
                </div> : <Loading />}
        </>
    )
}

export default Ativos;