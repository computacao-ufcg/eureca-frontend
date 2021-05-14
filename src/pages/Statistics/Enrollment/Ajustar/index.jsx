import React from "react";

import Header from "../../../../components/General/Header";
import NavBar from "../../../../components/StatisticsComponents/NavBar";

import Title from "../../../../components/General/Title/";

import "../../styles.css";

const Ajustar = () => {
  return (
    <React.Fragment>
      <Header />
      <div className={"mainStatistics"}>
        <Title name={"Estatísticas"} />
        <div className={"contentStatistics"}>
          <NavBar
            selectedOption={"Matrículas"}
            listEnum={["Discentes", "Disciplinas", "Matrículas"]}
          />
          <div className={"modelStatistics"}>
            <div className={"listStatistics"}></div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Ajustar;
