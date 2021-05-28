import React, { useState }  from "react";
import TeachersSlider from "./Slider";
import TeachersGraph from "./Graph";
import Export from "../../../newComponents/Export";
import { SelectPicker } from "rsuite";
import { useHistory } from "react-router";
import Header from "../../../newComponents/Header";
import { FiArrowLeft } from "react-icons/fi";

const Teachers = () => {
  const [departmentOption, setDepartmentOption] = useState("uasc");
  const [variable, setVariable] = useState("success");
  const [label, setLabel] = useState("taxa de sucesso");

  const handleVariableChange = variable => {
    setVariable(variable);
    const proposedLabel = variables.find(item => item.value === variable);
    setLabel(proposedLabel.label);
  };

  const variables = [
    {
      label: "Taxa de sucesso",
      value: "success",
      role: "Master",
    },
    {
      label: "Taxa de reprovação por nota",
      value: "failedDueToGrade",
      role: "Master",
    },
    {
      label: "Taxa de reprovação por falta",
      value: "failedDueToAbsences",
      role: "Master",
    },
    {
      label: "Taxa de trancamento",
      value: "failedDueToCanceling",
      role: "Master",
    },
    {
      label: "Número de matrículas",
      value: "enrollments",
      role: "Master",
    }
  ];

  const departmentTypes = [
    {
      label: "UASC",
      value: "uasc",
      role: "Master",
    },
    {
      label: "UAMaT",
      value: "uamat",
      role: "Master",
    },
    {
      label: "UAEst",
      value: "uest",
      role: "Master",
    },
    {
      label: "UAL",
      value: "ual",
      role: "Master",
    },
  ];
  const history = useHistory();
  
  return (
    <React.Fragment>
      <Header />
      <div className='alumni-main'>
        <div className='alumni-content'>
          <div className='backdot'>
            <span onClick={() => history.goBack()}>
              <FiArrowLeft size={25} />
            </span>
          </div>
          <div className='alumni-slider'>
          <div className='alumni-title'>Docentes</div>
            <TeachersSlider changeSlider={() => {}} />
            <div className='graph'>
              <TeachersGraph variable={variable} label={label}/>
              <div className='selectors'>
                <h6>text</h6>
                <SelectPicker
                  onChange={value => setDepartmentOption(value)}
                  data={departmentTypes}
                  className='selector-enrollments'
                  defaultValue={departmentOption}
                  searchable={false}
                />
                <h6>text</h6>
                <SelectPicker
                  onChange={value => handleVariableChange(value)}
                  data={variables}
                  className='selector-enrollments'
                  defaultValue={variable}
                  searchable={false}
                />
              </div>
            </div>
            <Export data={[]} name={"teachers"} />
          </div>
        </div>
      </div>
      
    </React.Fragment>
    
  )
}

export default Teachers;