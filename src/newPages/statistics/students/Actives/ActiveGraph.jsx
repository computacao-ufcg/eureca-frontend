import React, { useState } from 'react';

import { XAxis, YAxis, CartesianGrid, Tooltip, AreaChart, Area } from 'recharts';

import { Switch } from 'pretty-checkbox-react'
import '@djthoms/pretty-checkbox';

import './activeGraph.css';

import { optionsActives } from './activeUtil';

const ActiveGraph = (props) => {

    const [tag0, setTag0] = useState("riskClassCount.inaccurate");
    const [tag1, setTag1] = useState("riskClassCount.safe");
    const [tag2, setTag2] = useState("riskClassCount.low");
    const [tag3, setTag3] = useState("riskClassCount.average");
    const [tag4, setTag4] = useState("riskClassCount.high");
    const [tag5, setTag5] = useState("riskClassCount.unfeasible");
    const [tag6, setTag6] = useState("riskClassCount.notApplicable");

    const tag0color = "#FFAE03";
    const tag1color = "#9BC53D";
    const tag2color = "#932551";
    const tag3color = "#4DA852";
    const tag4color = "#4FC6E3";
    const tag5color = "#E71D36";
    const tag6color = "#001021";

    const handleCheck = (event) => {
        switch (event.target.name) {
            case 'tag0':
                event.target.checked ? setTag0("riskClassCount.inaccurate") : setTag0('');
                break
            case 'tag1':
                event.target.checked ? setTag1("riskClassCount.safe") : setTag1('');
                break
            case 'tag2':
                event.target.checked ? setTag2("riskClassCount.low") : setTag2('');
                break
            case 'tag3':
                event.target.checked ? setTag3("riskClassCount.average") : setTag3('');
                break
            case 'tag4':
                event.target.checked ? setTag4("riskClassCount.high") : setTag4('');
                break
            case 'tag5':
                event.target.checked ? setTag5("riskClassCount.unfeasible") : setTag5('');
                break
            case 'tag6':
                event.target.checked ? setTag6("riskClassCount.notApplicable") : setTag6('');
                break
            default:
                console.error('error selection tags');
        }
    }

    return (
        <div className="actives-graph-container">
            <div className="graph-main">
                <AreaChart
                    width={800}
                    height={500}
                    data={props.data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="admissionTerm" />
                    <YAxis yAxisId="right" />
                    <Tooltip />
                    <Area yAxisId="right" dataKey={tag0} name={optionsActives[0]} type="monotone" stackId="1" stroke={tag0color} fill={tag0color} />
                    <Area yAxisId="right" dataKey={tag1} name={optionsActives[1]} type="monotone" stackId="1" stroke={tag1color} fill={tag1color} />
                    <Area yAxisId="right" dataKey={tag2} name={optionsActives[2]} type="monotone" stackId="1" stroke={tag2color} fill={tag2color} />
                    <Area yAxisId="right" dataKey={tag3} name={optionsActives[3]} type="monotone" stackId="1" stroke={tag3color} fill={tag3color} />
                    <Area yAxisId="right" dataKey={tag4} name={optionsActives[4]} type="monotone" stackId="1" stroke={tag4color} fill={tag4color} />
                    <Area yAxisId="right" dataKey={tag5} name={optionsActives[5]} type="monotone" stackId="1" stroke={tag5color} fill={tag5color} />
                    <Area yAxisId="right" dataKey={tag6} name={optionsActives[6]} type="monotone" stackId="1" stroke={tag6color} fill={tag6color} />
                </AreaChart>
                <p className="graph-label-y">Ativos</p>
                <p className="graph-label-x">Período de Admissão</p>
            </div>

            <div className="optionsActives">
                {optionsActives.map((e, index) =>
                    <label key={"label" + index}>
                        <Switch
                            shape="fill"
                            className={"switch" + index}
                            key={"check" + index}
                            name={"tag" + index}
                            id={index}
                            defaultChecked
                            onChange={handleCheck}
                        />{" " + optionsActives[index]}</label>)}
            </div>
        </div>
    )
}

export default ActiveGraph;
