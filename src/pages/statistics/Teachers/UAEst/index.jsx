import React from "react";

import UAEstSkel from "../Skel";

const UAEst = () => {
  return <UAEstSkel query={`/statistics/teachers?academicUnitId=${1114}`} title={"UAEst"} csvQuery={`/statistics/teachers/csv?academicUnitId=${1114}`}/>;
};

export default UAEst;