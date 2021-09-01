import React from "react";
import "./style.css";

import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart , Line } from "recharts";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label}`}</p>
        <p className="intro">{`Aptos : ${payload[0].payload.possible}`}</p>
        <p className="intro">{`Recomendados : ${payload[0].payload.adequate}`}</p>
      </div>
    );
  }

  return null;
};

const DelayedGraph = props => {

  return (
    <React.Fragment>
      {props.data ? (
        <div className='graph-main-delay'>
          <LineChart
            width={800}
            height={500}
            data={props.data.retention}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray='3 3' />

            <XAxis dataKey='admissionTerm' />
            <YAxis yAxisId='left' dataKey='adequate' />
            <Tooltip content={<CustomTooltip />}/>
            <Legend 
              iconSize={10}
              iconType='circle'
              verticalAlign='top' 
              margin={{ top: 30, left: 10, right: 0, bottom: 0 }} />
            <Line
              dataKey="adequate"
              data={props.data}
              name="Recomendados"
              yAxisId='left'
              stroke='#3CB371'
            />
            <Line
              dataKey="possible"
              data={props.data}
              name="Aptos"
              yAxisId='left'
              stroke='#885d41'
            />
          </LineChart>
          <div className='axis-y'>
            <p className='graph-label-y-delayed'>Demanda acumulada</p>
          </div>
          <p className='graph-label-x-delayed'>Período de Admissão</p>
        </div>
      ) : null}
    </React.Fragment>
  );
};

export default DelayedGraph;
