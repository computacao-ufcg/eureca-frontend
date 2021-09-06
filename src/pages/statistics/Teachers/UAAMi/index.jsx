import React from "react";

import UAAMiSkel from "../Skel";

const UAAMi = () => {
  return <UAAMiSkel query={`/statistics/teachers?academicUnitId=${1302}`} title={"UAAMi"} csvQuery={`/statistics/teachers/csv?academicUnitId=${1302}`} />;
};

export default UAAMi;