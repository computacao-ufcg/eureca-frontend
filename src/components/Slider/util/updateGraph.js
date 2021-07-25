import { api_EB } from "../../../services/api";

const getSummaryQuery = (query, from, to) => {
  const f = from ? `?from=${from}` : "";
  const t = to ? `&to=${to}` : "";
  return `${query}${f}${t}`;
};

const getCSVQuery = (query, from, to) => {
  const f = from ? `?from=${from}` : "";
  const t = to ? `&to=${to}` : "";
  return `${query}/csv${f}${t}`;
};

export default async (query, loading, from, to) => {
  let response = {};
  const queryActives = getSummaryQuery(query, from, to);
  const queryActivesCSV = getCSVQuery(query, from, to);

  const token = sessionStorage.getItem("eureca-token");

  const options = {
    headers: {
      "Authentication-Token": token,
    },
  };

  const resSummary = await api_EB.get(queryActives, options);
  const resCSV = await api_EB.get(queryActivesCSV, options);

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
