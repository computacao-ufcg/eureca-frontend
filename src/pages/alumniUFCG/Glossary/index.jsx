import React, { useEffect, useState } from "react";
import Header from "../../../components/Header";
import { useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import "./styles.css";
import { api_EB } from "../../../services/api";
import Enrollments from "../../../assets/glossary_images/Alumni.png";

const AlumniGlossary = () => {
  const history = useHistory();
  const [data, setData] = useState([]);

  useEffect(() => {
    getGlossary();
  }, []);

  const getGlossary = async () => {
    let query = `/statistics/students/alumni?from=1950.0&language=PORTUGUESE&to=2049.9`;

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
        <div className='main-content-glossary'>
          <Header></Header>
          <div className='main-glossary'>
            <div className='backdot'>
              <span onClick={() => history.goBack()}>
                <FiArrowLeft size={25} />
              </span>
            </div>
            <div className='container-title-glossary'>
              <h1>GLOSSÁRIO</h1>
            </div>
            <div className='main-container-glossary'>
              <div className='left-container'>
                <div>
                  <b>{data.glossary.alumniTracked.name + ": "}</b>{" "}
                  {data.glossary.alumniTracked.description}
                </div>
                <br />
                <div>
                  <b>{data.glossary.consolidatedEmployers.name + ": "}</b>{" "}
                  {data.glossary.consolidatedEmployers.description}
                </div>
              </div>
              <div className='img-container'>
                <img src={Enrollments} alt='' height={300} />
              </div>
              <div className='right-container'>
                <div>
                  <b>{data.glossary.employersInIndustry.name + ": "}</b>{" "}
                  {data.glossary.employersInIndustry.description}
                </div>
                <br />
                <div>
                  <b>{data.glossary.employersInGovernment.name + ": "}</b>{" "}
                  {data.glossary.employersInGovernment.description}
                </div>
              </div>
            </div>
            <div className='bottom-container'>
              <div>
                <b>{data.glossary.employersInOngs.name + ": "}</b>{" "}
                {data.glossary.employersInOngs.description}
              </div>
              <br />
              <div>
                <b>{data.glossary.employersInAcademy.name + ": "}</b>{" "}
                {data.glossary.employersInAcademy.description}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </React.Fragment>
  );
};

export default AlumniGlossary;
