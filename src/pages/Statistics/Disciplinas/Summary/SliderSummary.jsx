import React, {useState, useEffect} from 'react';

import { RangeSlider } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';

import {labelSlider} from './utilSummary';

import '../../styles.css'

const SliderSummary = (props) => {

    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(39);
    
    const handleStyle = {
        color: '#fff',
        fontSize: 1,
        width: 32,
        height: 22
    };

    return (
        labelSlider ?
        <div className={'mainSlider'}>
            <RangeSlider
                min={0}
                max={39}
                defaultValue={[value1, value2]}
                value={[value1, value2]}
                handleStyle={handleStyle}
                graduated
                className="custom-slider"
                tooltip={false}
                handleTitle={labelSlider[value1]}
                onChange={v => {
                    setValue1(v[0]);
                    setValue2(v[1]);
                    props.changeSlider(v[0], v[1]);
                }}
                renderMark={mark => {
                    if ([value1, value2].includes(mark)) {
                        return <span className={'legendSlider'}>{labelSlider[mark]}</span>;
                    }
                    
                }}
            />
        </div>
        : null
    )
}

export default SliderSummary;