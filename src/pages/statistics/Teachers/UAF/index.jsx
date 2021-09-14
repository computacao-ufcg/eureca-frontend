import React from "react";

import UAFSkel from "../Skel";

const UAF = () => {
  return (
    <UAFSkel
      query={`/statistics/teachers?academicUnitId=${1108}`}
      title={"Unidade Acadêmica de Física"}
      csvQuery={`/statistics/teachers/csv?academicUnitId=${1108}`}
    />
  );
};

export default UAF;
