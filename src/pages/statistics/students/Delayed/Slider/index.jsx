import React, { useState, useEffect } from "react";

import { RangeSlider } from "rsuite";

import "../style.css";

const GraduatedSlider = props => {
  const [labels, setLabels] = useState([]);
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(14);

  useEffect(() => {
    setFrom(0);
    setLabels(props.from, props.to);
    setTo(labels.length - 1);
  }, []);

  const handleStyle = {
    color: "#fff",
    fontSize: 1,
    width: 32,
    height: 22,
  };

  return props.labels ? (
    <div className={"mainSlider"}>
      <RangeSlider
        min={0}
        max={14}
        defaultValue={[from, to]}
        value={[from, to]}
        handleStyle={handleStyle}
        graduated
        className='custom-slider'
        tooltip={false}
        handleTitle={props.labels[from]}
        onChange={v => {
          setFrom(v[0]);
          setTo(v[1]);
          props.changeSlider(props.labels[v[0]], props.labels[v[1]]);
        }}
        renderMark={mark => {
          if ([from, to].includes(mark)) {
            return <span className={"legendSlider"}>{props.labels[mark]}</span>;
          }
        }}
      />
    </div>
  ) : null;
};

export default GraduatedSlider;
