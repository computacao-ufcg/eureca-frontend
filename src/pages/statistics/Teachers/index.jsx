import React, { useState, useEffect } from "react";
import TeachersSlider from "./Slider";
import TeachersGraph from "./Graph";
import Export from "../../../components/Export";
import { SelectPicker } from "rsuite";
import { useHistory } from "react-router";
import Header from "../../../components/Header";
import { FiArrowLeft } from "react-icons/fi";
import { api_EB } from "../../../services/api";

const Teachers = () => {
  const [departmentOption, setDepartmentOption] = useState("uasc");
  const [variable, setVariable] = useState("success");
  const [label, setLabel] = useState("taxa de sucesso");
  const [data, setData] = useState([]);

  const handleVariableChange = variable => {
    setVariable(variable);
    const proposedLabel = variables.find(item => item.value === variable);
    setLabel(proposedLabel.label);
  };

  useEffect(() => {
    (async function () {
      const query = `/api/statistics/teachers/summary/csv?from=1950.0&language=PORTUGUESE&to=2049.9`;
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
  }, [departmentOption]);

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
    },
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
              <TeachersGraph variable={variable} data={data} label={label} />
              <div className='selectors'>
                <h6>Unidade Acadêmica</h6>
                <SelectPicker
                  onChange={value => setDepartmentOption(value)}
                  data={departmentTypes}
                  className='selector-enrollments'
                  defaultValue={departmentOption}
                  searchable={false}
                  cleanable={false}
                />
                <h6>Variável</h6>
                <SelectPicker
                  onChange={value => handleVariableChange(value)}
                  data={variables}
                  className='selector-enrollments'
                  defaultValue={variable}
                  searchable={false}
                  cleanable={false}
                />
              </div>
            </div>
            <Export data={[]} name={"teachers"} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Teachers;
