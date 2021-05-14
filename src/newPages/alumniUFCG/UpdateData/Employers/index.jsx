import React, { useState } from "react";
import { Nav } from "rsuite";
import "rsuite/dist/styles/rsuite-default.css";

import Classified from "./Classified";
import Disqualified from "./Disqualified";

import "./styles.css";

const Employers = () => {
  const [dataAux, setDataAux] = useState([]);
  const [data, setData] = useState(<Classified data={dataAux} />);
  const [activeNav, setActiveNav] = useState("classified");

  const handleNav = eventKey => {
    if (eventKey === "classified") {
      setData(<Classified data={dataAux} />);
    } else if (eventKey === "desqualified") {
      setData(<Disqualified handleData={handleData} />);
    }
    setActiveNav(eventKey);
  };

  const handleData = elemento => {
    let list = dataAux;
    list.push(elemento);
    setDataAux(list);
  };

  return (
    <div className='employers-container'>
      <div className='employers-tab'>
        <Nav onSelect={handleNav} activeKey={activeNav} appearance={"tabs"}>
          <Nav.Item eventKey={"classified"}>Classificados</Nav.Item>
          <Nav.Item eventKey={"desqualified"}>Não Classificados</Nav.Item>
        </Nav>
      </div>
      {data}
    </div>
  );
};

export default Employers;
