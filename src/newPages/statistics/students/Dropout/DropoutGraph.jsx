import React, { useState, useEffect } from "react";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Line,
  ComposedChart,
} from "recharts";

import MySwitch from "../Actives/MySwitch";

import "@djthoms/pretty-checkbox";

import "rc-checkbox/assets/index.css";
import "./style.css";

import Export from "../../../../components/StatisticsComponents/Export";

import { dataDropout } from "./dropoutUtil";

const EvadedGraph = props => {
  const data = props.data ? props.data.terms : null;
  console.log(data);

  const [tags, setTags] = useState([]);

  useEffect(() => {
    setTags(
      dataDropout.map((tag, index) => {
        return {
          select: true,
          id: index,
          name: tag.name,
          value: tag.value,
          color: tag.color,
          valueTranslate: tag.valueTranslate,
        };
      })
    );
  }, []);

  const handleCheck = (data, event) => {
    let checked = event.target.checked;
    let name = event.target.name;
    let newTags = [];

    if (name === "all") {
      newTags = tags.map(d => {
        checked ? (d.select = true) : (d.select = false);
        return d;
      });
    } else {
      newTags = tags.map((d, index) => {
        if (d.id === data.id) {
          d.select = checked;
        }
        return d;
      });
    }

    setTags(newTags);
  };

  return (
    <React.Fragment>
      {data ? (
        <div className='rootGraphEvadidos'>
          <div className='mainGraphEvadidos'>
            <div className='graph-main'>
              <ComposedChart
                width={800}
                height={500}
                data={data}
                margin={{
                  top: 5,
                  right: 0,
                  left: 10,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis interval={2} dataKey='dropoutTerm' />
                <YAxis yAxisId='left' />
                <Tooltip />
                {tags.map(d => (
                  <Area
                    key={d.id}
                    yAxisId='left'
                    dataKey={d.select ? d.value : ""}
                    name={d.valueTranslate}
                    type='monotone'
                    stackId='1'
                    stroke={d.color}
                    fill={d.color}
                  />
                ))}
              </ComposedChart>
              <p className='graph-label-y'>Evadidos</p>
              <p className='graph-label-x'>Período de Evasão</p>
            </div>
            <div className='optionsEvadidos'>
              <MySwitch tags={tags} handleCheck={handleCheck} />
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </React.Fragment>
  );
};

export default EvadedGraph;
