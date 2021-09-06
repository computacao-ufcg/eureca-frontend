import React from "react";

import UAMatSkel from "../Skel";

const UAMat = () => {
  return <UAMatSkel query={`/statistics/teachers?academicUnitId=${1109}`} title={"Docentes - UAMat"} csvQuery={`/statistics/teachers/csv?academicUnitId=${1109}`}/>;
};

export default UAMat;