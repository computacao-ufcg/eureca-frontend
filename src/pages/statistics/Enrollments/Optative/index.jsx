import React from "react";

import OptativesEnrollmentsSkel from "../Skel";

import { baseEnrollmentsEndpoint } from "../../../../config/defaultValues";

const EnrollmentsOptatives = () => {
  return <OptativesEnrollmentsSkel query={`${baseEnrollmentsEndpoint}/optional`} title='Optativas' />;
};

export default EnrollmentsOptatives;
