import React from "react";
import "./style.css";

import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, } from "recharts";

const DelayedGraph = props => {

  return (
    <React.Fragment>
      {props.data ? (
        <div className='graph-main-delay'>
          <BarChart
            width={800}
            height={500}
            data={props.data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray='3 3' />

            <XAxis dataKey='subjectName' tick={false} />
            <YAxis yAxisId='left' dataKey="retention" />

            <Tooltip />
            <Legend 
              iconSize={10}
              iconType='circle'
              verticalAlign='top' 
              margin={{ top: 30, left: 10, right: 0, bottom: 0 }} />
            <Bar
              dataKey="retention"
              data={props.data}
              name="retenção"
              yAxisId='left'
              stroke='#885d41'
              fill='#886859'
            />
          </BarChart>
          <div className='axis-y'>
            <p className='graph-label-y-delayed'>{"Retenção"}</p>
          </div>
          <p className='graph-label-x-delayed'>Disciplinas</p>
        </div>
      ) : null}
    </React.Fragment>
  );
};

export default DelayedGraph;
