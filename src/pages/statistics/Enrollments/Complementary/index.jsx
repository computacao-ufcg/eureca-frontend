import React from "react";

import ComplementaryEnrollmentsSkel from "../Skel";

import { baseEnrollmentsEndpoint } from "../../../../config/defaultValues";

const EnrollmentsComplementary = () => {
  return <ComplementaryEnrollmentsSkel query={`${baseEnrollmentsEndpoint}/complementary`} title='Complementares' />;
};

export default EnrollmentsComplementary;
