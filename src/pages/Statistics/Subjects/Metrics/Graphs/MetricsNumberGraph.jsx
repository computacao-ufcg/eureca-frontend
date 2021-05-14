import React from "react";

import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Line,
} from "recharts";

import { dataNumber } from "../metricsUtil";

import "../../../styles.css";

const MetricsNumberGraph = () => {
  return (
    <div className={"mainGraphs"}>
      <ComposedChart
        width={800}
        height={400}
        data={dataNumber["lp2"]}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis
          dataKey='name'
          label={{
            value: "Semestres",
            angle: 0,
            position: "insideBottom",
            offset: -5,
          }}
        />
        <YAxis
          label={{
            value: "Número de Alunos",
            angle: -90,
            position: "insideLeft",
          }}
        />
        <Tooltip />
        <Legend verticalAlign='top' />
        <Bar dataKey='t1' fill='#E3A11B' name='Professor(a) 1' stackId='a' />
        <Bar dataKey='t2' fill='#108FEE' name='Professor(a) 2' stackId='a' />
        <Bar dataKey='t3' fill='#C2BBB0' name='Professor(a) 3' stackId='a' />
        <Bar dataKey='t4' fill='#B9513C' name='Professor(a) 4' stackId='a' />
        <Bar dataKey='t5' fill='#3C2619' name='Professor(a) 5' stackId='a' />
        <Line dataKey='total' stroke='orange' name='Total' legendType='none' />
      </ComposedChart>
    </div>
  );
};

export default MetricsNumberGraph;
