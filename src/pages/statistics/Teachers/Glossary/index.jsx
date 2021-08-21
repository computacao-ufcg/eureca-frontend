import React, { useEffect, useState } from "react";
import Header from "../../../../components/Header";
import { useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import "./styles.css";
import { api_EB } from "../../../../services/api";
import GlossaryTeachers from "../../../../assets/glossary_images/Teachers.png";
import {
  baseTeachersEndpoint,
  endpointWithCourseAndCurriculum,
  eurecaAuthenticationHeader,
} from "../../../../config/defaultValues";

const TeachersGlossary = () => {
  const history = useHistory();
  const [data, setData] = useState([]);

  useEffect(() => {
    getGlossary();
  }, []);

  const getGlossary = async () => {
    const endpoint = `${baseTeachersEndpoint}/summary`;
    const query = endpointWithCourseAndCurriculum(endpoint);

    const res = await api_EB.get(query, eurecaAuthenticationHeader);

    if (res) {
      setData(res.data);
    } else {
      console.error(res.statusText);
    }
  };

  return (
    <React.Fragment>
      {data.glossary ? (
        <div className='main-content-teachers-glossary'>
          <Header></Header>
          <div className='main-teachers-glossary'>
            <div className='backdot'>
              <span onClick={() => history.goBack()}>
                <FiArrowLeft size={25} />
              </span>
            </div>
            <div className='container-title-teachers-glossary'>
              <h1>GLOSSÁRIO</h1>
            </div>
            <div className='main-container-teachers-glossary'>
              <div className='left-container'>
                <div>
                  <b>{data.glossary.max.name + ": "}</b> {data.glossary.max.description}
                </div>
                <br />
                <div>
                  <b>{data.glossary.min.name + ": "}</b> {data.glossary.min.description}
                </div>
                <br />
              </div>
              <div className='img-container'>
                <img src={GlossaryTeachers} alt='' height={300} />
              </div>
              <div className='right-container'>
                <div>
                  <b>{data.glossary.failedDueToAbsences.name + ": "}</b> {data.glossary.failedDueToAbsences.description}
                </div>
                <br />
                <div>
                  <b>{data.glossary.failedDueToGrade.name + ": "}</b> {data.glossary.failedDueToGrade.description}
                </div>
                <br />
              </div>
            </div>
            <div className='bottom-container'>
              <div>
                <b>{data.glossary.failedDueToCanceling.name + ": "}</b> {data.glossary.failedDueToCanceling.description}
              </div>
              <br />
              <div>
                <b>{data.glossary.success.name + ": "}</b> {data.glossary.success.description}
              </div>
              <br />
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </React.Fragment>
  );
};

export default TeachersGlossary;
