import React from "react";

import UAAMiSkel from "../Skel";

const UAAMi = () => {
  return <UAAMiSkel query={`/statistics/teachers?academicUnitId=${1302}`} title={"Unidade Acadêmica de Arte e Mídia"} csvQuery={`/statistics/teachers/csv?academicUnitId=${1302}`} />;
};

export default UAAMi;