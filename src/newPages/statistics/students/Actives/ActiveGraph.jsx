import React, { useEffect, useState } from 'react';

import { Loader } from 'rsuite';

import { XAxis, YAxis, CartesianGrid, Tooltip, Scatter, ScatterChart } from 'recharts';

import { getDataScatter } from './activeUtil';

import './activeGraph.css';

const ActiveGraph = (props) => {
    const [loadding, setLoadding] = useState(true);

    // for graph
    const [normal, setNormal] = useState([]);
    const [late, setLate ]= useState([]);
    const [advanced, setAdvanced] = useState([]);
    const [critical, setCritical] = useState([]);
    const [notApplicable, setNotApplicable] = useState([]);
    const [unfeasible, setUnfeasible] = useState([]);
    
    useEffect(() => {
        const loaddingData = () => {
            setLoadding(true);

            const [normal, late, advanced, critical, notApplicable, unfeasible] = getDataScatter(props.data);

            setNormal(normal);
            setLate(late);
            setAdvanced(advanced);
            setCritical(critical);
            setNotApplicable(notApplicable);
            setUnfeasible(unfeasible);

            setLoadding(false);
        }

        loaddingData();
    }, [props.data]);

    const CustomTooltip = ({ active, payload }) => {
        if (active) {
            return (
                <div className="custom-tooltip">
                    <p>Períodos Integralizados: {payload[0].payload.completedTerms}</p>
                    <p>Créditos Integralizados: {(payload[0].payload.progress * 100).toFixed(2)}%</p>
                </div>
            );
        }

        return null;
    };

    return (
        <div className="actives-graph-container">
            {loadding ? <Loader content="Carregando..." vertical></Loader> :
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
                                dataKey="completedTerms"
                                type="number"
                            />
                            <YAxis
                                dataKey="progress"
                                type="number"
                            />
                            <Scatter data={normal} fillOpacity={0.5} fill={"blue"} name={"normal"}></Scatter>
                            <Scatter data={late} fillOpacity={0.5} fill={"green"} name={"late"}></Scatter>
                            <Scatter data={advanced} fillOpacity={0.5} fill={"purple"} name={"advanced"}></Scatter>
                            <Scatter data={critical} fillOpacity={0.5} fill={"red"} name={"critical"}></Scatter>
                            <Scatter data={notApplicable} fillOpacity={0.5} fill={"yellow"} name={"notApplicable"}></Scatter>
                            <Scatter data={unfeasible} fillOpacity={0.5} fill={"black"} name={"unfeasible"}></Scatter>
                        </ScatterChart>

                        <p className="graph-label-y">Créditos Integralizados</p>
                        <p className="graph-label-x">Períodos Integralizados</p>
                    </div>               
                </React.Fragment>
            }
        </div>
    )
}

export default ActiveGraph;
