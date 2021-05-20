import React, { useEffect, useState } from "react";
import Header from "../../../../newComponents/Header";
import { useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import "./styles.css";
import { api_EB } from "../../../../services/api";
import GlossaryImg from "../../../../assets/new_glossary_images/Glossary_examples.png";

const EnrollmentsGlossary = () => {
  const history = useHistory();
  const [data, setData] = useState([]);

  useEffect(() => {
    getGlossary();
  }, []);

  const getGlossary = async () => {
    let query = `api/statistics/enrollments/summary`;

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
                
              </div>
              <div className='img-container'>
                <img src={GlossaryImg} height={400} />
              </div>
              <div className='right-container'>
                
              </div>
            </div>
            <div className='bottom-container'>
              
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
