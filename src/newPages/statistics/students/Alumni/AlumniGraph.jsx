import React from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import { subtitles_translations } from "./util";

import "./style.css";

const AlumniGraph = props => {
  // obtém a tradução correspondente do valor selecionado
  const labelSelected = subtitles_translations[props.option];

  return (
    <React.Fragment>
      {props.data.terms ? (
        <div className='main-graphs-alumni'>
          <LineChart
            width={800}
            height={500}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray='3 3' />

            <XAxis dataKey='graduationTerm' allowDuplicatedCategory={false} />
            <YAxis yAxisId='left' dataKey={props.option} />

            <Tooltip />
            <Legend
              verticalAlign='top'
              margin={{ top: 30, left: 10, right: 0, bottom: 0 }}
            />
            <Line
              interval={2}
              isAnimationActive={false}
              dataKey={props.option}
              data={props.data.terms}
              name={labelSelected}
              yAxisId='left'
              stroke='#885d41'
              key='Número de Egressos'
            />
          </LineChart>
          <p className='graph-label-y'>Egressos</p>
          <p className='graph-label-x'>Período de Egresso</p>
        </div>
      ) : null}
    </React.Fragment>
  );
};

export default AlumniGraph;
