import React from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import "./style.css";

const SubjectsGraph = props => {
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
        <XAxis dataKey='name' />
        <YAxis dataKey={props.variable || "totalEnrollments"} />
        <Tooltip />
        <Legend
          verticalAlign='top'
          iconSize={10}
          iconType='circle'
          payload={[{ value: props.label, type: "circle", color: "#886859" }]}
        />
        <Bar dataKey={props.variable} fill='#886859' key='Número de turmas' />
      </BarChart>

      <p className='graph-label-y-subjects'>
        {props.label || "Taxa de Sucesso"}
      </p>
      <p className='graph-label-x-subjects'>Disciplinas</p>
    </div>
  );
};

export default SubjectsGraph;
