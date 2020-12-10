import React, {useState, useEffect} from 'react';

import { RangeSlider } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';

import '../../styles.css'

const ActiveSlider = (props) => {

    const [labels, setLabel] = useState([]);
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);
    const [labelLength, setLabelLength] = useState(0);

    const handleStyle = {
        color: '#fff',
        fontSize: 1,
        width: 32,
        height: 22
    };

    useEffect(()=>{
        const LL = props.labels.length === 0 ? 0 : props.labels.length - 1;
        
        setLabelLength(LL);
        setLabel(props.labels);
        setValue2(LL);

    }, [props.labels])

    return (
        <div className={'mainSlider'}>
                <RangeSlider
                    className="custom-slider"
                    min={0}
                    max={labelLength}
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

export default ActiveSlider;