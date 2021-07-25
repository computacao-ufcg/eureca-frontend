import React from "react";

import "./style.css";

import EnrollmentsCardHome from "./EnrollmentsCardHome";
import SubjectsCardHome from "./SubjectsCardHome";
import StudentsCardHome from "./StudentsCardHome";
import AlumniCardHome from "./AlumniCardHome";
import TeachersCardHome from "./TeachersCardHome";
import RetentionCardHome from "./RetentionCardHome"

const CardHome = () => {
  return (
    <React.Fragment>
      <StudentsCardHome />
      <AlumniCardHome data={{}} />
      <EnrollmentsCardHome />
      <SubjectsCardHome />
      <TeachersCardHome />
      <RetentionCardHome/>
    </React.Fragment>
  );
};

export default CardHome;
