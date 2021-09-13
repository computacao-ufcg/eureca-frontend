import React from "react";

import UAEFSkel from "../Skel";

const UAEF = () => {
  return (
    <UAEFSkel
      query={`/statistics/teachers?academicUnitId=${1303}`}
      title={"Unidade Acadêmica de Economia e Finanças"}
      csvQuery={`/statistics/teachers/csv?academicUnitId=${1303}`}
    />
  );
};

export default UAEF;
