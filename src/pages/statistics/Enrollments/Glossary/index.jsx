import React, { useEffect, useState } from "react";
import Header from "../../../../components/Header";
import { useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import "./styles.css";
import { api_EB } from "../../../../services/api";
import EnrollmentGlossary from "../../../../assets/new_glossary_images/Screenshot_Enrollments.png";

const EnrollmentsGlossary = () => {
  const history = useHistory();
  const [data, setData] = useState([]);

  useEffect(() => {
    getGlossary();
  }, []);

  const getGlossary = async () => {
    let query = `/statistics/enrollments/summary`;

    const res = await api_EB.get(query, {
      headers: {
        "Authentication-Token": sessionStorage.getItem("eureca-token"),
      },
    });

    if (res) {
      setData(res.data);
    } else {
      console.error(res.statusText);
    }
  };

  return (
    <React.Fragment>
      {data.glossary ? (
        <div className='main-content-enrollments-glossary'>
          <Header></Header>
          <div className='main-enrollments-glossary'>
            <div className='backdot'>
              <span onClick={() => history.goBack()}>
                <FiArrowLeft size={25} />
              </span>
            </div>
            <div className='container-title-enrollments-glossary'>
              <h1>GLOSSÁRIO</h1>
            </div>
            <div className='main-container-enrollments-glossary'>
              <div className='left-container'>
                <div>
                  <b>{data.glossary.averageClassesPerDiscipline.name + ": "}</b>{" "}
                  {data.glossary.averageClassesPerDiscipline.description}
                </div>
                <br />
                <div>
                  <b>{data.glossary.averageClassesPerPeriod.name + ": "}</b>{" "}
                  {data.glossary.averageClassesPerPeriod.description}
                </div>
                <br />
              </div>
              <div className='img-container'>
                <img src={EnrollmentGlossary} alt='' height={300} />
              </div>
              <div className='right-container'>
                <div>
                  <b>{data.glossary.averageEnrollmentsPerPeriod.name + ": "}</b>{" "}
                  {data.glossary.averageEnrollmentsPerPeriod.description}
                </div>
                <br />
                <div>
                  <b>{data.glossary.averageEnrollmentsPerClass.name + ": "}</b>{" "}
                  {data.glossary.averageEnrollmentsPerClass.description}
                </div>
                <br />
              </div>
            </div>
            <div className='bottom-container'>
              <div>
                <b>{data.glossary.max.name + ": "}</b>{" "}
                {data.glossary.max.description}
              </div>
              <br />
              <div>
                <b>{data.glossary.min.name + ": "}</b>{" "}
                {data.glossary.min.description}
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

export default EnrollmentsGlossary;
