import React, {useState, useEffect} from 'react';

import { Slider } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';

import {labelSlider} from './utilSummary';

import '../../styles.css'

const SliderSummary = (props) => {

    const [labels, setLabel] = useState([]);
    const [value, setValue] = useState(0);
    const [labelLength, setLabelLength] = useState(0);

    const handleStyle = {
        color: '#fff',
        fontSize: 12,
        width: 32,
        height: 22
    };

    useEffect(()=>{
        const LL = props.labels.length === 0 ? 0 : props.labels.length - 1;
        
        setLabelLength(LL);
        setLabel(props.labels);

    }, [props.labels])

    return (
        <div className={'mainSlider'}>
                <Slider 
                    min={0}
                    max={labelLength}
                    value={value}
                    tooltip={false}
                    handleStyle={handleStyle}
                    handleTitle={labels[value]}
                    onChange={v => {
                        setValue(v);
                        props.changeSlider(v);
                    }}
                    graduated
                    renderMark={mark => {
                        return <span className={'legendSlider'}>{labels[mark]}</span>;
                    }}
                />
        </div>
    )
}

export default SliderSummary;