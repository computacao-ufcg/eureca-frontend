const variables = [
  {
    label: "Total de aprovados",
    value: "succeeded",
    role: "Master",
  },
  {
    label: "Total de cancelamentos",
    value: "cancelled",
    role: "Master",
  },
  {
    label: "Total de dispensas",
    value: "exempted",
    role: "Master",
  },
  {
    label: "Reprovação por nota",
    value: "failedDueToGrade",
    role: "Master",
  },
  {
    label: "Reprovação por falta",
    value: "failedDueToAbsences",
    role: "Master",
  },
  {
    label: "Total de trancamentos",
    value: "suspended",
    role: "Master",
  },
  {
    label: "Total de matriculas",
    value: "totalEnrolled",
    role: "Master",
  },
  {
    label: "Número de turmas",
    value: "numberOfClasses",
    role: "Master",
  },
];

const translatedVariables = {
  numberOfClasses: "Número de turmas",
  suspended: "Número de trancamentos",
  totalEnrolled: "Número de matrículas",
  failedDueToAbscences: "Número de reprovações por falta",
  failedDueToGrade: "Número de reprovações por nota",
  succeeded: "Número de aprovações",
  cancelled: "Número de cancelamentos",
  exempted: "Número de dispensas",
};

export { variables, translatedVariables };
