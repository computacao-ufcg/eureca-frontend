import React from "react";
import { useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import Header from "../../components/Header";
import "./style.css";

const SearchScreen = (props) => {
    const history = useHistory();
    return (
        <React.Fragment>
          <div className='main-content'>
            <Header></Header>
            <div className='main-search-teachers'>
              <div className='backdot'>
                <span onClick={() => history.goBack()}>
                  <FiArrowLeft size={25} />
                </span>
              </div>
              <div className='container-title-search'>
                <h1>BUSCAR</h1>
              </div>
              <div className='selects'>
                {props.children}
              </div>
              <div className='search-button'>
                  <button type='submit'>
                    BUSCAR
                  </button>
                </div>
              <div className='response'>
                <div className='copy-button'>
                  <button type='submit'>
                    COPIAR
                  </button>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
}

export default SearchScreen;