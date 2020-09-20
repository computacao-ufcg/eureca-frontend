import React, { useState } from 'react';

import { Slider, RangeSlider } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';

import './style.css'

const CustomSlider = (props) => {
    const labels = props.labels
    const [value1, setValue1] = useState(props.min);
    const [value2, setValue2] = useState(props.type == "ativos" ? 16 : 68);
    console.log(value1, value2)
    const handleStyle = {
        color: '#fff',
        fontSize: 1,
        width: 32,
        height: 22
    };

    return (
        labels ?
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
                    props.changeSlider(v[0], v[1]);
                }}
                renderMark={mark => {
                    if(props.type != 'ativos'){
                        if ([value1, value2].includes(mark)) {
                            return <span className={'legendSlider'}>{labels[mark]}</span>;
                        }
                    } else {
                        return <span className={'legendSlider'}>{labels[mark]}</span>;
                    }
                }}
            />
        </div>
        : null
    )
}

export default CustomSlider;