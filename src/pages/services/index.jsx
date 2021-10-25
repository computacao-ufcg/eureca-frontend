import React from "react";
import { useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import Header from "../../components/Header";
import "./style.css";

const ServicesPage = () => {
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
        </div>
      </div>
    </React.Fragment>
  );
};

export default ServicesPage;
