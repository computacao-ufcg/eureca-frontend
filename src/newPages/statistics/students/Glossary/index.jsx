import React, { useEffect, useState } from "react";
import Header from "../../../../newComponents/Header";
import { useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import "./styles.css";
import { api_EB } from "../../../../services/api";
import GlossaryImg from "../../../../assets/new_glossary_images/Glossary_examples.png";

const StudentsGlossary = () => {
  const history = useHistory();
  const [data, setData] = useState([]);

  useEffect(() => {
    getGlossary();
  }, []);

  const getGlossary = async () => {
    let query = `/statistics/students/summary`;

    const res = await api_EB.get(query, {
      headers: {
        "Authentication-Token": sessionStorage.getItem("eureca-token"),
      },
    });

    if (res) {
      console.log(res.data);
      setData(res.data);
    } else {
      console.log(res.statusText);
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
                  <b>{data.glossary.abandonCount.name + ": "}</b>{" "}
                  {data.glossary.abandonCount.description}
                </div>
                <br />
                <div>
                  <b>{data.glossary.active.name + ": "}</b>{" "}
                  {data.glossary.active.description}
                </div>
                <br />
                <div>
                  <b>{data.glossary.canceledCount.name + ": "}</b>{" "}
                  {data.glossary.canceledCount.description}
                </div>
                <br />
                <div>
                  <b>{data.glossary.averageLoad.name + ": "}</b>{" "}
                  {data.glossary.averageLoad.description}
                </div>
                <br />
                <div>
                  <b>{data.glossary.averageGpa.name + ": "}</b>{" "}
                  {data.glossary.averageGpa.description}
                </div>
                <br />
                <div>
                  <b>{data.glossary.averageCost.name + ": "}</b>{" "}
                  {data.glossary.averageCost.description}
                </div>
                <br />
              </div>
              <div className='img-container'>
                <img src={GlossaryImg} alt="" height={400} />
              </div>
              <div className='right-container'>
                <div>
                  <b>{data.glossary.alumnus.name + ": "}</b>{" "}
                  {data.glossary.alumnus.description}
                </div>
                <br />
                <div>
                  <b>{data.glossary.dropout.name + ": "}</b>{" "}
                  {data.glossary.dropout.description}
                </div>
                <br />
                <div>
                  <b>{data.glossary.averageAlumni.name + ": "}</b>{" "}
                  {data.glossary.averageAlumni.description}
                </div>
                <br />
                <div>
                  <b>{data.glossary.maximumAlumni.name + ": "}</b>{" "}
                  {data.glossary.maximumAlumni.description}
                </div>
                <br />
                <div>
                  <b>{data.glossary.minimumAlumni.name + ": "}</b>{" "}
                  {data.glossary.minimumAlumni.description}
                </div>
                <br />
                <div>
                  <b>{data.glossary.predictedGraduation.name + ": "}</b>{" "}
                  {data.glossary.predictedGraduation.description}
                </div>
                <br />
              </div>
            </div>
            <div className='bottom-container'>
              <div>
                <b>{data.glossary.rejoinCount.name + ": "}</b>{" "}
                {data.glossary.rejoinCount.description}
              </div>
              <div>
                <b>{data.glossary.delayed.name + ": "}</b>{" "}
                {data.glossary.delayed.description}
              </div>
              <div>
                <b>{data.glossary.averageRisk.name + ": "}</b>{" "}
                {data.glossary.averageRisk.description}
              </div>
              <div>
                <b>{data.glossary.successRate.name + ": "}</b>{" "}
                {data.glossary.successRate.description}
              </div>
              <div>
                <b>{data.glossary.averageTime.name + ": "}</b>{" "}
                {data.glossary.averageTime.description}
              </div>
              <div>
                <b>{data.glossary.transferCount.name + ": "}</b>{" "}
                {data.glossary.transferCount.description}
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

export default StudentsGlossary;
