const getSummaryRiskClass = summary => {
  switch (summary.riskClass) {
    case "INACCURATE":
      return "Inexato";
    case "SAFE":
      return "Seguro";
    case "LOW":
      return "Baixo";
    case "AVERAGE":
      return "Médio";
    case "HIGH":
      return "Alto";
    case "UNFEASIBLE":
      return "Inviável";
    default:
      return "Não Aplicável";
  }
};

const getSummaryCostClass = summary => {
  switch (summary.costClass) {
    case "INACCURATE":
      return "Inexato";
    case "ADEQUATE":
      return "Adequado";
    case "REGULAR":
      return "Regular";
    case "HIGH":
      return "Alto";
    case "VERY_HIGH":
      return "Muito Alto";
    case "UNACCEPTABLE":
      return "Inaceitável";
    default:
      return "Não Aplicável";
  }
};

export default {
  translateRiskAndCost: data => {
    const summary = data.average || data;
    const risk = getSummaryRiskClass(summary);
    const cost = getSummaryCostClass(summary);

    return { risk, cost };
  },
};
