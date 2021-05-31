import React, { useEffect, useState } from "react";
import SubjectsSlider from "./Slider";
import SubjectsGraph from "./Graph";
import Export from "../../../components/Export";
import { SelectPicker } from "rsuite";
import { useHistory } from "react-router";
import Header from "../../../components/Header";
import { FiArrowLeft } from "react-icons/fi";
import { api_EB } from "../../../services/api";

const Subjects = () => {
  const [disciplineOption, setDisciplineOption] = useState("obrigatorias");
  const [variable, setVariable] = useState("averageSuccess");
  const [label, setLabel] = useState("Taxa de sucesso");
  const [data, setData] = useState([]);

  const handleVariableChange = variable => {
    setVariable(variable);
    const proposedLabel = variables.find(item => item.value === variable);
    setLabel(proposedLabel.label);
  };

  useEffect(() => {
    (async function () {
      const query = `/statistics/subjects/summary/csv?from=1950.0&language=PORTUGUESE&to=2049.9`;
      try {
        const res = await api_EB.get(query, {
          headers: {
            "Authentication-Token": sessionStorage.getItem("eureca-token"),
          },
        });

        if (res) {
          setData(res.data);
        }
      } catch (err) {
        console.error(err);
      }
    })();
  }, [disciplineOption]);

  const variables = [
    {
      label: "Taxa de sucesso",
      value: "averageSuccess",
      role: "Master",
    },
    {
      label: "Taxa de reprovação por nota",
      value: "averageFailDueToGrade",
      role: "Master",
    },
    {
      label: "Taxa de reprovação por falta",
      value: "averageFailDueToAbsences",
      role: "Master",
    },
    {
      label: "Taxa de trancamento",
      value: "lockingRate",
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
    },
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
              <SubjectsGraph variable={variable} data={data} label={label} />
              <div className='selectors'>
                <h6>Disciplinas</h6>
                <SelectPicker
                  onChange={value => setDisciplineOption(value)}
                  data={disciplineTypes}
                  className='selector-enrollments'
                  defaultValue={disciplineOption}
                  searchable={false}
                />
                <h6>Variável</h6>
                <SelectPicker
                  onChange={value => handleVariableChange(value)}
                  data={variables}
                  className='selector-enrollments'
                  defaultValue={variable}
                  searchable={false}
                />
              </div>
            </div>
            <Export data={[]} name={"subjects"} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Subjects;
