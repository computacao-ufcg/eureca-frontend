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
  ReferenceLine,
} from "recharts";

import { subtitles_translations } from "../util";

import "../style.css";

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
            {
              labelSelected !== "valor médio para o Período" && 
                <Line
                isAnimationActive={false}
                dataKey={props.option}
                name={subtitles_translations[props.option].referenceLine}
                stroke='blue'
              />
            }
            
            <ReferenceLine
              yAxisId='left'
              y={
                labelSelected !== "Créditos Matriculados" &&
                labelSelected !== ""
                  ? subtitles_translations[props.option].value
                  : null
              }
              stroke='blue'
            />
            <ReferenceLine
              yAxisId='left'
              label=''
              stroke='red'
              strokeDasharray='3 3'
              segment={
                labelSelected === "Créditos Matriculados"
                  ? subtitles_translations[props.option].value
                  : []
              }
            />
            <ReferenceLine
              yAxisId='left'
              x={labelSelected === "Créditos Matriculados" ? "2016.1" : null}
              stroke='blue'
              label=''
            />
            <ReferenceLine
              yAxisId='left'
              label=''
              stroke='red'
              strokeDasharray='3 3'
              segment={
                labelSelected === "Créditos Matriculados"
                  ? [
                      { x: "2012.2", y: 196 },
                      { x: "2016.1", y: 196 },
                    ]
                  : []
              }
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
