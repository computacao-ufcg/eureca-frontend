import React from "react";

import { LineChart , Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

import "./style.css";

const TeachersGraph = props => {
  return (
    <div className='main-teachers-graph'>
      <LineChart
        width={800}
        height={500}
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
        <YAxis dataKey="totalEnrolled" />
        <Tooltip />
        <Legend
          verticalAlign='top'
          iconSize={10}
          iconType='circle'
          payload={[{ value: props.label, type: "circle", color: "#886859" }]}
        />
        <Line dataKey={props.variable} fill='#886859' key='Número de turmas' />
      </LineChart>

      <p className='graph-label-y-teachers'>{props.label || "Taxa de Sucesso"}</p>
      <p className='graph-label-x-teachers'>Períodos</p>
    </div>
  );
};

export default TeachersGraph;
