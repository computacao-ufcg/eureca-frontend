import React, { useState, useEffect } from "react";

import { RangeSlider } from "rsuite";
import "rsuite/dist/styles/rsuite-default.css";

import "../../styles.css";

const SummarySlider = props => {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [labelSlider, setLabelSlider] = useState([]);
  const [labelLength, setLabelLength] = useState(0);

  const handleStyle = {
    color: "#fff",
    fontSize: 1,
    width: 32,
    height: 22,
  };

  useEffect(() => {
    const LL = props.labels.length === 0 ? 0 : props.labels.length - 1;

    setLabelLength(LL);
    setLabelSlider(props.labels);
    setValue2(LL);
  }, [props.labels]);

  return (
    <div className={"mainSlider"}>
      <RangeSlider
        min={0}
        max={labelLength}
        defaultValue={[value1, value2]}
        value={[value1, value2]}
        handleStyle={handleStyle}
        graduated
        className='custom-slider'
        tooltip={false}
        handleTitle={labelSlider[value1]}
        onChange={v => {
          setValue1(v[0]);
          setValue2(v[1]);
          props.changeSlider(v[0], v[1]);
        }}
        renderMark={mark => {
          if ([value1, value2].includes(mark)) {
            return <span className={"legendSlider"}>{labelSlider[mark]}</span>;
          }
        }}
      />
    </div>
  );
};

export default SummarySlider;
