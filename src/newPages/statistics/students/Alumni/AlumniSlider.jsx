import React, { useState, useEffect } from 'react';

import { RangeSlider } from 'rsuite';

import '../../../../pages/Statistics/styles.css';

const AlumniSlider = (props) => {

    const [label, setLabel] = useState([]);
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);
    const [labelLength, setLabelLength] = useState(0);

    const handleStyle = {
        color: '#fff',
        fontSize: 1,
        width: 32,
        height: 22
    };

    useEffect(() => {
        const LL = props.label.length === 0 ? 0 : props.label.length - 1;

        setLabelLength(LL);
        setLabel(props.label);
        setValue2(LL);

    }, [props.label])

    return (
        <div className={"mainSlider"}>
            <RangeSlider
                min={0}
                max={labelLength}
                defaultValue={[value1, value2]}
                value={[value1, value2]}
                handleStyle={handleStyle}
                graduated
                className="custom-slider"
                tooltip={false}
                handleTitle={label[value1]}
                onChange={v => {
                    setValue1(v[0]);
                    setValue2(v[1]);
                    props.changeSlider(label[v[0]], label[v[1]]);
                }}
                renderMark={mark => {
                    if ([value1, value2].includes(mark)) {
                        return <span className={'legendSlider'}>{label[mark]}</span>;
                    }

                }}
            />
        </div>
    )
}

export default AlumniSlider;