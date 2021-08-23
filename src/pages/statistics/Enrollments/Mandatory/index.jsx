import React from "react";

import MandatoryEnrollmentsSkel from "../Skel";

import { baseEnrollmentsEndpoint } from "../../../../config/defaultValues";

const EnrollmentsMandatory = () => {
  return <MandatoryEnrollmentsSkel query={`${baseEnrollmentsEndpoint}/mandatory`} title='Obrigatórias' />;
};

export default EnrollmentsMandatory;
