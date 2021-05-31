import React from "react";

import HeaderHome from "../../components/Header";
import CardHome from "../../components/Home/CardHome";
import "./style.css";

const Home = () => {
  return (
    <React.Fragment>
      <HeaderHome />
      <div className='home-content'>
        <div className='home-cards'>
          <CardHome></CardHome>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
