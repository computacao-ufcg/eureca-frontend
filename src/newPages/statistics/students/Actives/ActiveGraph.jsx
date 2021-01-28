import React, { useEffect, useState } from 'react';

import { Loader } from 'rsuite';

import { XAxis, YAxis, CartesianGrid, Tooltip, Scatter, ScatterChart } from 'recharts';

import { getDataScatter } from './activeUtil';

import './activeGraph.css';

const ActiveGraph = (props) => {
    const [load, setLoad] = useState(false);

    // for graph
    const [red, setRed] = useState([]);
    const [green, setGreen] = useState([]);
    const [blue, setBlue] = useState([]);
    const [purple, setPurple] = useState([]);
    
    useEffect(() => {
        const carregaDados = () => {
            setLoad(false);

            const [red, green, blue, purple] = getDataScatter(props.data);

            props.handleText(red.length, green.length, blue.length, purple.length);

            setRed(red);
            setGreen(green);
            setBlue(blue);
            setPurple(purple);

            setLoad(true);
        }
        carregaDados();
    }, [props]);

    const CustomTooltip = ({ active, payload }) => {
        if (active) {
            return (
                <div className="custom-tooltip">
                    <p>Períodos Integralizados: {payload[0].payload.periodos_integralizados}</p>
                    <p>Créditos Integralizados: {payload[0].payload.porcentagem_concluida}%</p>
                </div>
            );
        }

        return null;
    };

    return (
        <div className="actives-graph-container">
            {load ?
                <React.Fragment>
                    <div className="graph-main">
                        <ScatterChart
                            width={1000}
                            height={700}
                            margin={{
                                top: 20, right: 80, bottom: 20, left: 20,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <Tooltip cursor={{ strokeDasharray: '3 3' }} content={CustomTooltip} />
                            <XAxis
                                dataKey="periodos_integralizados"
                                type="number"
                            />
                            <YAxis
                                dataKey="porcentagem_concluida"
                                type="number"
                            />
                            <Scatter data={red} fillOpacity={0.5} fill={"red"} name={"Abaixo do esperado"}></Scatter>
                            <Scatter data={green} fillOpacity={0.5} fill={"green"} name={"Dentro do esperado"}></Scatter>
                            <Scatter data={blue} fillOpacity={0.5} fill={"blue"} name={"Ideal"}></Scatter>
                            <Scatter data={purple} fillOpacity={0.5} fill={"purple"} name={"Acima do esperado"}></Scatter>
                        </ScatterChart>

                        <p className="graph-label-y">Créditos Integralizados</p>
                        <p className="graph-label-x">Períodos Integralizados</p>
                    </div>               
                </React.Fragment> : <Loader content="Carregando..." vertical></Loader>}
        </div>
    )
}

export default ActiveGraph;
