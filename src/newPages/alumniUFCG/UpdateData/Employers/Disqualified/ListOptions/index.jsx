import React, { useState } from "react";

import { FiCheckCircle } from "react-icons/fi";

import "./styles.css";

const ListOptions = props => {
  const data = props.data;
  const [selectedOption, setSelectedOption] = useState(null);
  const [selected, setSelected] = useState(null);

  const handleSelected = companyType => {
    if (selected === companyType) {
      setSelected(null);
      setSelectedOption(null);
      props.onPickerOption("");
    } else {
      setSelected(companyType);
      props.onPickerOption(companyType.value);
    }
  };

  return (
    <div className='listOptions-container'>
      {data.map((companyType, index) => {
        return (
          <div
            key={`listOptions${index}`}
            onClick={() => {
              setSelectedOption(companyType);
              handleSelected(companyType);
            }}
          >
            {selectedOption === companyType ? (
              <div className='listOptions-selected'>
                <FiCheckCircle fill='#80AD9D' size={25} />
              </div>
            ) : null}
            <p>{companyType.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ListOptions;
