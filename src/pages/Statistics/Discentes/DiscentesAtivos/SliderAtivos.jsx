import React, {useState, useEffect} from 'react';

import { RangeSlider, Loader } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';

import '../../styles.css'

const SliderAtivos = (props) => {

    // const [labels, setLabel] = useState(props.labels);

    const labels = props.labels;
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(15);

    const handleStyle = {
        color: '#fff',
        fontSize: 1,
        width: 32,
        height: 22
    };

    return (
        <div className={'mainSlider'}>
                <RangeSlider
                    className="custom-slider"
                    min={props.min}
                    max={props.max}
                    defaultValue={[value1, value2]}
                    value={[value1, value2]}
                    handleStyle={handleStyle}
                    graduated
                    tooltip={false}
                    handleTitle={labels[value1]}
                    onChange={v => {
                        setValue1(v[0]);
                        setValue2(v[1]);
                        props.changeSlider(v[0], v[1]);
                    }}
                    renderMark={mark => {
                        return <span className={'legendSlider'}>{labels[mark]}</span>;
                    }}
                />
        </div>
    )
}

export default SliderAtivos;