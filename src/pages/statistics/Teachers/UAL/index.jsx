import React from "react";

import UALSkel from "../Skel";

const UAL = () => {
  return <UALSkel query={`/statistics/teachers?academicUnitId=${1307}`} title={"Docentes - UAL"}  csvQuery={`/statistics/teachers/csv?academicUnitId=${1307}`}/>;
};

export default UAL;