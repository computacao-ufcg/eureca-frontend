import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

const NavBar = props => {
  return (
    <div className={"mainNavBar"}>
      <div className={"buttonsNavBar"}>
        <Link to={"students"}>
          <button
            id={"buttonStudents"}
            className={
              props.selectedOption === "Students"
                ? "selectedButton"
                : "customButton"
            }
            value={"Students"}
          >
            Discentes
          </button>
        </Link>
        <Link to={"subjects"}>
          <button
            id={"buttonSubjects"}
            className={
              props.selectedOption === "Subjects"
                ? "selectedButton"
                : "customButton"
            }
            value={"Subjects"}
          >
            Disciplinas
          </button>
        </Link>
        <Link to={"enrollments"}>
          <button
            id={"buttonEnrollments"}
            className={
              props.selectedOption === "Enrollments"
                ? "selectedButton"
                : "customButton"
            }
            value={"Enrollments"}
          >
            Matrículas
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
