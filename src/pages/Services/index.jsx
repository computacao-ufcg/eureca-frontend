import React from "react";

import Header from "../../components/General/Header";

import Title from "../../components/General/Title";

import "./style.css";

const Services = () => {
  return (
    <React.Fragment>
      <Header></Header>
      <div className={"mainServices"}>
        <Title name={"Serviços"} />
      </div>
    </React.Fragment>
  );
};

export default Services;
