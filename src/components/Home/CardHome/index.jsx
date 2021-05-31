import React from "react";

import "./style.css";

import EnrollmentsCardHome from "./EnrollmentsCardHome";
import SubjectsCardHome from "./SubjectsCardHome";
import StudentsCardHome from "./StudentsCardHome";
import AlumniCardHome from "./AlumniCardHome";
import TeachersCardHome from "./TeachersCardHome";

const CardHome = () => {
  return (
    <React.Fragment>
      <StudentsCardHome />
      <AlumniCardHome data={{}} />
      <EnrollmentsCardHome />

      <SubjectsCardHome />
      <TeachersCardHome />
    </React.Fragment>
  );
};

export default CardHome;
