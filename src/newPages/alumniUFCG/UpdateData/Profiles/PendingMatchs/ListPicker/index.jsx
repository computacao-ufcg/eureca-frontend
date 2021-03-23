import React, { useState } from 'react';

import { FiCheckCircle } from 'react-icons/fi';

import './styles.css';

const ListPicker = (props) => {
    const filterData = (data, filter) => {
        console.log(data, filter)
        let auxData = [];
        let unit = []
        
        if(filter === 'very-likely'){
            data.forEach(alumni => {
                console.log(alumni)
                if(alumni.matchClassification == "VERY_LIKELY"){
                    unit.push(alumni)
                }
            })       
        } else if(filter === 'likely'){
            data.forEach(alumni => {
                console.log(alumni)
                if(alumni.matchClassification == "VERY_LIKELY" || alumni.matchClassification == "LIKELY"){
                    unit.push(alumni)
                }
            })
        } else if(filter === 'average'){
            data.forEach(alumni => {
                console.log(alumni)
                if(alumni.matchClassification == "VERY_LIKELY" || alumni.matchClassification == "LIKELY" || alumni.matchClassification == "AVERAGE"){
                    unit.push(alumni)
                }
            })
        } else if(filter === 'unlikely'){
            data.forEach(alumni => {
                console.log(alumni)
                if(alumni.matchClassification == "VERY_LIKELY" || alumni.matchClassification == "LIKELY" || alumni.matchClassification == "AVERAGE" || alumni.matchClassification == "UNLIKELY"){
                    unit.push(alumni)
                }
            })
        } else {
            return data;
        }

        console.log(unit)
        return unit;
    }

    const data = props.filter == 'all' ? props.data : filterData(props.data, props.filter);
    const [selectedOption, setSelectedOption] = useState(null);
    const [selected, setSelected] = useState(null);

    const handleSelected = (element) => {
        if (selected === element) {
            setSelected(null);
            setSelectedOption(null);
            props.onPickerOption(null);
        } else {
            setSelected(element);
            props.onPickerOption(element)
        }
    }

    
    

    return (
        <div className="listpicker-container">
            {data.map((element, index) => {
                if (index < 5) {
                    return (
                        <div
                            key={`listpicker${index}`}
                            onClick={() => {
                                setSelectedOption(element);
                                handleSelected(element);
                            }}
                        >
                            {selectedOption === element ?
                                <div className="listpicker-selected">
                                    <FiCheckCircle fill="#80AD9D" size={25} />
                                </div>
                                : null}
                            <p>{element.profile.fullName}</p>
                        </div>
                    )
                }
            })}
        </div>
    )
}

export default ListPicker;