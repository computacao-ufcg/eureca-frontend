import React, { useState } from "react";

import { RangeSlider } from "rsuite";

import sliderGenerator from "./sliderLabelGenerator";

const GraduatedSlider = props => {
  const firstTerm = props.firstTerm;
  const lastTerm = props.lastTerm;
  const labels = sliderGenerator.generate(firstTerm, lastTerm);

  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(labels.length - 1);

  const handleStyle = {
    color: "#fff",
    fontSize: 1,
    width: 32,
    height: 22,
  };

  const changeSlider = async values => {
    const [from, to] = values;
    setFrom(from);
    setTo(to);
    await props.changeSlider(labels[from], labels[to]);
  };

  return (
    <div className={"mainSlider"}>
      <RangeSlider
        min={0}
        max={labels.length - 1}
        defaultValue={[from, to]}
        value={[from, to]}
        handleStyle={handleStyle}
        graduated
        className='custom-slider'
        tooltip={false}
        handleTitle={labels[from]}
        onChange={changeSlider}
        renderMark={mark => {
          if ([from, to].includes(mark)) {
            return <span className={"legendSlider"}>{labels[mark]}</span>;
          }
        }}
      />
    </div>
  );
};

export default GraduatedSlider;
