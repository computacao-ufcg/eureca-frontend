import React, { useState, useEffect } from "react";

import { RangeSlider } from "rsuite";
import "rsuite/dist/styles/rsuite-default.css";

import "./style.css";

const ActiveSlider = props => {
  const [labels, setLabel] = useState([]);
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(0);
  const [labelLength, setLabelLength] = useState(0);

  const handleStyle = {
    color: "#fff",
    fontSize: 1,
    width: 32,
    height: 22,
  };

  useEffect(() => {
    const LL = props.labels.length === 0 ? 0 : props.labels.length - 1;
    console.log(props);

    setLabelLength(LL);
    setLabel(props.labels);
    setTo(LL);
  }, [props.labels]);

  return (
    <div className='main-slider'>
      <RangeSlider
        className='custom-slider'
        min={0}
        max={labelLength}
        defaultValue={[from, to]}
        value={[from, to]}
        handleStyle={handleStyle}
        graduated
        tooltip={false}
        handleTitle={labels[from]}
        onChange={v => {
          console.log(v);
          setFrom(v[0]);
          setTo(v[1]);
          props.changeSlider(from, to);
        }}
        renderMark={mark => {
          return <span className='legendSlider'>{labels[mark]}</span>;
        }}
      />
    </div>
  );
};

export default ActiveSlider;
