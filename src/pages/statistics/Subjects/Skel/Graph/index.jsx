import React from "react";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { translatedVariables } from "../util";

import "./style.css";

const MandatoryGraph = props => {
  console.log(props);
  const parsedMetrics = props.data.map(term => {
    return {
      term: term.term,
      ...term.metrics,
    };
  });

  return (
    <div className='main-subjects-graph'>
      <LineChart
        width={800}
        height={500}
        data={parsedMetrics}
        margin={{
          top: 30,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='term' />
        <YAxis dataKey={props.variable} />

        <Tooltip />
        <Legend
          verticalAlign='top'
          iconSize={10}
          iconType='circle'
          payload={[{ value: props.label, type: "circle", color: "#886859" }]}
        />
        <Line dataKey={props.variable} fill='#886859' name={translatedVariables[props.variable]} />
      </LineChart>

      <div className='axis-y'>
        <p className='graph-label-y-subjects'>{props.label}</p>
      </div>
      <p className='graph-label-x-subjects'>Períodos</p>
    </div>
  );
};

export default MandatoryGraph;
