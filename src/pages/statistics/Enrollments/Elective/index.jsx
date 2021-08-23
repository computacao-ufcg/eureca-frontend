import React from "react";

import ElectivesEnrollmentsSkel from "../Skel";

import { baseEnrollmentsEndpoint } from "../../../../config/defaultValues";

const EnrollmentsElectives = () => {
  return <ElectivesEnrollmentsSkel query={`${baseEnrollmentsEndpoint}/elective`} title='Eletivas' />;
};

export default EnrollmentsElectives;
