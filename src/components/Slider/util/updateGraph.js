import { endpointWithCourseAndCurriculum, eurecaAuthenticationHeader } from "../../../config/defaultValues";
import { api_EB } from "../../../services/api";

const getSummaryQuery = (query, from, to) => {
  const f = from ? `&from=${from}` : "";
  const t = to ? `&to=${to}` : "";
  const endpoint = endpointWithCourseAndCurriculum(query);
  const fullEndpoint = `${endpoint}${f}${t}`;
  return fullEndpoint;
};

const getCSVQuery = (query, from, to) => {
  const f = from ? `&from=${from}` : "";
  const t = to ? `&to=${to}` : "";
  const endpoint = endpointWithCourseAndCurriculum(`${query}/csv`);
  const fullQuery = `${endpoint}${f}${t}`;
  return fullQuery;
};

export default async (query, loading, from, to) => {
  let response = {};
  const querySummary = getSummaryQuery(query, from, to);
  const queryCSV = getCSVQuery(query, from, to);

  const resSummary = await api_EB.get(querySummary, eurecaAuthenticationHeader);
  const resCSV = await api_EB.get(queryCSV, eurecaAuthenticationHeader);

  if (resSummary.status === 200) {
    response.data = resSummary.data;

    if (loading) {
      response.firstTerm = resSummary.data.from;
      response.lastTerm = resSummary.data.to;
    }
  } else {
    console.log("Error Data Ativos");
  }

  if (resCSV.status === 200) {
    response.dataCSV = resCSV.data;
  } else {
    console.log("Error Data Export");
  }

  return response;
};
