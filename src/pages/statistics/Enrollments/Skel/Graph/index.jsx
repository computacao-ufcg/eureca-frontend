import React from "react";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

import { translatedVariables } from "../util";

import "./style.css";

const MandatoryGraph = props => {
  return (
    <div className='main-subjects-graph'>
      <BarChart
        width={680}
        height={350}
        data={props.data}
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
        <Bar dataKey={props.variable} fill='#886859' name={translatedVariables[props.variable]} />
      </BarChart>

      <div className='axis-y'>
        <p className='graph-label-y-subjects'>{props.label}</p>
      </div>
      <p className='graph-label-x-subjects'>Períodos</p>
    </div>
  );
};

export default MandatoryGraph;
