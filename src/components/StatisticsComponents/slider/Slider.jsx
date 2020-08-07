import React, { useState } from 'react';

import { Slider, RangeSlider } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';

import './style.css'

const CustomSlider = (props) => {

    const [value1, setValue1] = useState(3)
    const [value2, setValue2] = useState(12)

    const labels = props.labels
    const handleStyle = {
        color: '#fff',
        fontSize: 1,
        width: 32,
        height: 22
    };

    return (
        <div className={'mainSlider'}>
            <RangeSlider
                min={0}
                max={labels.length - 1}
                defaultValue={[value1, value2]}
                value={[value1, value2]}
                handleStyle={handleStyle}
                graduated
                className="custom-slider"
                tooltip={false}
                handleTitle={labels[value1]}
                onChange={v => {
                console.log(v);
                setValue1(v[0]);
                setValue2(v[1]);
                }}
                renderMark={mark => {
                    return <span>{labels[mark]}</span>;
                }}
            />
        </div>
    )
}

export default CustomSlider;