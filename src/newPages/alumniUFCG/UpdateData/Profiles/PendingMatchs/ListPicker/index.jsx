import React, { useState } from 'react';

import { FiCheckCircle } from 'react-icons/fi';

import './styles.css';

const ListPicker = (props) => {
    const data = props.data;
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
                if(index < 5){
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
                            <span>score: {element.score}</span>
                        </div>
                    )
                }     
            })}
        </div>
    )
}

export default ListPicker;