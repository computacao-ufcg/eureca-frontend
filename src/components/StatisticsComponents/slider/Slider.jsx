import React, { useState } from 'react';

import { Slider, RangeSlider } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';

import './style.css'

const CustomSlider1 = (props) => {
    const labels = props.labels

    const [value1, setValue1] = useState(props.min);
    const [value2, setValue2] = useState(props.max);
    
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
                min={props.min}
                max={props.max}
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

const CustomSlider2 = (props) => {
    const labels = props.labels
    console.log("AAAA", props.min, props.max)
    
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(16);
    
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
                max={16}
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

const CustomSlider3 = (props) => {
    const labels = props.labels

    const [value1, setValue1] = useState(19);
    const [value2, setValue2] = useState(66);
    
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
                min={19}
                max={66}
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


export {CustomSlider1, CustomSlider2, CustomSlider3};