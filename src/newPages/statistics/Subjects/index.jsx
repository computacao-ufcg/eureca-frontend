import React, { useState }  from "react";
import SubjectsSlider from "./Slider";
import SubjectsGraph from "./Graph";
import Export from "../../../newComponents/Export";
import { SelectPicker } from "rsuite";
import { useHistory } from "react-router";
import Header from "../../../newComponents/Header";
import { FiArrowLeft } from "react-icons/fi";

const Subjects = () => {
  const [disciplineOption, setDisciplineOption] = useState("Obrigatórias");
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
      label: "Retenção absoluta",
      value: "relativeRetention",
      role: "Master",
    },
    {
      label: "Retenção relativa",
      value: "absoluteRetention",
      role: "Master",
    }
  ];

  const disciplineTypes = [
    {
      label: "Obrigatórias",
      value: "obrigatorias",
      role: "Master",
    },
    {
      label: "Eletivas",
      value: "eletivas",
      role: "Master",
    },
    {
      label: "Optativas",
      value: "optatives",
      role: "Master",
    },
    {
      label: "Complementares",
      value: "complementary",
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
          <div className='alumni-title'>Disciplinas</div>
            <SubjectsSlider changeSlider={() => {}} />
            <div className='graph'>
              <SubjectsGraph variable={variable} label={label}/>
              <div className='selectors'>
                <SelectPicker
                  onChange={value => setDisciplineOption(value)}
                  data={disciplineTypes}
                  className='selector-enrollments'
                  defaultValue={disciplineOption}
                />
                <SelectPicker
                  onChange={value => handleVariableChange(value)}
                  data={variables}
                  className='selector-enrollments'
                  defaultValue={variable}
                />
              </div>
            </div>
            <Export data={[]} name={"subjects"} />
          </div>
        </div>
      </div>
      
    </React.Fragment>
    
  )
}

export default Subjects;