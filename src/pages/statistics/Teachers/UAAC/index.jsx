import React from "react";

import UAACSkel from "../Skel";

const UAAC = () => {
  return (
    <UAACSkel
      query={`/statistics/teachers?academicUnitId=${1301}`}
      title={"Unidade Acadêmica de Administração e Contabilidade"}
      csvQuery={`/statistics/teachers/csv?academicUnitId=${1301}`}
    />
  );
};

export default UAAC;
