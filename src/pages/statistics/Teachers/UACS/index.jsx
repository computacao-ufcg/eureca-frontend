import React from "react";

import UACSSkel from "../Skel";

const UACS = () => {
  return <UACSSkel query={`/statistics/teachers?academicUnitId=${1305}`} title={"Unidade Acadêmica de Ciências Sociais"} csvQuery={`/statistics/teachers/csv?academicUnitId=${1305}`} />;
};

export default UACS;