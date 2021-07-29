import React from "react";
import "./style.css";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import { subtitles_translations } from "../util";

const DelayedGraph = props => {
  // obtém a tradução correspondente do valor selecionado
  const labelSelected = subtitles_translations[props.option]
    ? subtitles_translations[props.option].name
    : "";

  return (
    <React.Fragment>
      {props.data ? (
        <div className='graph-main-delay'>
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

            <XAxis
              dataKey='term'
              interval={1}
              allowDuplicatedCategory={false}
            />
            <YAxis yAxisId='left' dataKey={props.option} />

            <Tooltip />
            <Legend
              verticalAlign='top'
              margin={{ top: 30, left: 10, right: 0, bottom: 0 }}
            />
            <Line
              isAnimationActive={false}
              dataKey={props.option}
              data={props.data}
              name={labelSelected}
              yAxisId='left'
              stroke='#885d41'
              key='Número de Egressos'
            />
          </LineChart>
          <div className="axis-y">
            <p className='graph-label-y-delayed'>{labelSelected || "Retidos"}</p>
          </div>
          <p className='graph-label-x-delayed'>Período de Ingresso</p>
        </div>
      ) : null}
    </React.Fragment>
  );
};

export default DelayedGraph;
