import React from "react";

import UASCSkel from "../Skel";

const UASC = () => {
  return <UASCSkel query={`/statistics/teachers?academicUnitId=${1411}`} title={"UASC"} csvQuery={`/statistics/teachers/csv?academicUnitId=${1411}`} />;
};

export default UASC;