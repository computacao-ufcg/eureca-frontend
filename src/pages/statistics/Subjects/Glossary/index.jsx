import React, { useEffect, useState } from "react";
import Header from "../../../../components/Header";
import { useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import "./style.css";
import { api_EB } from "../../../../services/api";
import GlossaryImg from "../../../../assets/glossary_images/Subjects.png";

const SubjectsGlossary = () => {
  const history = useHistory();
  const [data, setData] = useState([]);

  useEffect(() => {
    getGlossary();
  }, []);

  const getGlossary = async () => {
    let query = `/statistics/subjects/summary`;

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
        <div className='main-content-subjects-glossary'>
          <Header></Header>
          <div className='main-subjects-glossary'>
            <div className='backdot'>
              <span onClick={() => history.goBack()}>
                <FiArrowLeft size={25} />
              </span>
            </div>
            <div className='container-title-subjects-glossary'>
              <h1>GLOSSÁRIO</h1>
            </div>
            <div className='main-container-subjects-glossary'>
              <div className='left-container'>
                <div>
                  <b>{data.glossary.complementary.name + ":"} </b>{" "}
                  {data.glossary.complementary.description}
                </div>
              </div>
              <div className='img-container'>
                <img src={GlossaryImg} height={300} />
              </div>
              <div className='right-container'>
                <div>
                  <b>{data.glossary.mandatory.name + ":"} </b>{" "}
                  {data.glossary.mandatory.description}
                </div>
                <div>
                  <b>{data.glossary.optional.name + ":"} </b>{" "}
                  {data.glossary.optional.description}
                </div>
              </div>
            </div>
            <div className='bottom-container'>
              <div>
                <b>{data.glossary.elective.name + ":"} </b>{" "}
                {data.glossary.elective.description}
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

export default SubjectsGlossary;
