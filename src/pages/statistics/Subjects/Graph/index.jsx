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

const SubjectsGraph = props => {
  return (
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
      <XAxis
        dataKey='name'
        label={{
          value: "Disciplinas",
          position: "insideBottomRight",
          dy: 10,
        }}
        padding={{
          bottom: 10,
          top: 20,
        }}
      />
      <YAxis
        dataKey={props.variable || "totalEnrollments"}
        label={{
          value: props.label,
          angle: -90,
          position: "insideBottomLeft",
        }}
        padding={{
          top: 50,
        }}
      />
      <Tooltip />
      <Legend
        verticalAlign='top'
        iconSize={10}
        iconType='circle'
        payload={[{ value: props.label, type: "circle", color: "#886859" }]}
      />
      <Bar dataKey={props.variable} fill='#886859' key='Número de turmas' />
    </BarChart>
  );
};

export default SubjectsGraph;
