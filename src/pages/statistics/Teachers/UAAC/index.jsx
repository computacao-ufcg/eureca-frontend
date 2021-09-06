import React from "react";

import UAACSkel from "../Skel";

const UAAC = () => {
  return <UAACSkel query={`/statistics/teachers?academicUnitId=${1301}`} title={"UAAC"} csvQuery={`/statistics/teachers/csv?academicUnitId=${1301}`} />;
};

export default UAAC;