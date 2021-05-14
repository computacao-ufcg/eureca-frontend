import React, { useState } from "react";

import Header from "../../../../components/General/Header";
import NavBar from "../../../../components/StatisticsComponents/NavBar";
import SideBar from "../../../../components/StatisticsComponents/SideBar";

import {
  navOptions,
  subjectsOptions,
  nameSubjects,
} from "../../statisticsUtil";

import Title from "../../../../components/General/Title";

import MetricsSlider from "./MetricsSlider";
import MetricsSelect from "./MetricsSelect";
import MetricsSuccessGraph from "./Graphs/MetricsSuccessGraph";
import MetricsNumberGraph from "./Graphs/MetricsNumberGraph";
import MetricsSizeGraph from "./Graphs/MetricsSizeGraph";

import "../../styles.css";

const Metrics = () => {
  const [graph, setGraph] = useState(<MetricsSuccessGraph />);

  const handleSlider = (v1, v2) => {};

  const handleMetricsSelect = value => {
    if (value === "nMatricula") {
      setGraph(<MetricsNumberGraph />);
    } else if (value === "taxaSucesso") {
      setGraph(<MetricsSuccessGraph />);
    } else if (value === "tamanhoTurma") {
      setGraph(<MetricsSizeGraph />);
    }
  };

  const handleSelectSubject = value => {};

  return (
    <React.Fragment>
      <Header />
      <div className={"mainStatistics"}>
        <Title name={"Estatísticas"} />
        <div className={"contentStatistics"}>
          <NavBar selectedOption={"Subjects"} listEnum={navOptions} />
          <div className={"modelStatistics"}>
            <div className={"listStatistics"}>
              <SideBar
                selectedOption={"Métricas"}
                navSelected={"subjects"}
                listOption={subjectsOptions}
                names={nameSubjects}
              />
              <div className={"compStatistics"}>
                <MetricsSlider changeSlider={handleSlider} />
                <MetricsSelect
                  handleMetrics={handleMetricsSelect}
                  handleSubject={handleSelectSubject}
                />
                {graph}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Metrics;
