import { alumniToken, courseCode, curriculum, eurecaToken } from "./storage";

const eurecaAuthenticationHeader = { headers: { "Authentication-Token": eurecaToken } };
const alumniAuthenticationHeader = { headers: { "Authentication-Token": alumniToken } };

const baseEnrollmentsEndpoint = "/statistics/enrollments";
const baseRetentionEndpoint = "/statistics/retention";
const baseTeachersEndpoint = "/statistics/teachers";
const baseSubjectsEndpoint = "/statistics/subjects";
const baseStudentsEndpoint = "/statistics/students";

const endpointWithCourseAndCurriculum = endpoint => {
  return `${endpoint}?courseCode=${courseCode}&curriculumCode=${curriculum}`;
};

export {
  eurecaAuthenticationHeader,
  alumniAuthenticationHeader,
  baseEnrollmentsEndpoint,
  baseRetentionEndpoint,
  baseTeachersEndpoint,
  baseSubjectsEndpoint,
  baseStudentsEndpoint,
  endpointWithCourseAndCurriculum,
};
