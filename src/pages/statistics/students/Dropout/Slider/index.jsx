import React, { useState } from "react";

import { RangeSlider } from "rsuite";
import "rsuite/dist/styles/rsuite-default.css";

import { labels } from "../dropoutUtil";

import "../style.css";

const EvadedSlider = props => {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(47);

  const handleStyle = {
    color: "#fff",
    fontSize: 1,
    width: 32,
    height: 22,
  };

  return labels ? (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className='mainSliderDropout'>
        <RangeSlider
          min={0}
          max={47}
          defaultValue={[value1, value2]}
          value={[value1, value2]}
          handleStyle={handleStyle}
          graduated
          className='custom-slider'
          tooltip={false}
          handleTitle={labels[value1]}
          onChange={v => {
            setValue1(v[0]);
            setValue2(v[1]);
            props.changeSlider(labels[v[0]], labels[v[1]]);
          }}
          renderMark={mark => {
            if ([value1, value2].includes(mark)) {
              return <span className={"legendSlider"}>{labels[mark]}</span>;
            }
          }}
        />
      </div>
    </div>
  ) : null;
};

export default EvadedSlider;
