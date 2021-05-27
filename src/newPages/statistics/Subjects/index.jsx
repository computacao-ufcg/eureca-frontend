import React  from "react";
import SubjectsSlider from "./Slider";
import { useHistory } from "react-router";
import Header from "../../../newComponents/Header";
import { FiArrowLeft } from "react-icons/fi";
import "./styles.css";

const Subjects = () => {

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
            <SubjectsSlider changeSlider={() => {}} />
          </div>
        </div>
      </div>
      
    </React.Fragment>
    
  )
}

export default Subjects;