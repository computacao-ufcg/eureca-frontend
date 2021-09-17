const variables = [
    {
      label: "Taxa de sucesso",
      value: "succeededRate",
      role: "Master",
    },
    {
      label: "Taxa de reprovação por nota",
      value: "failedDueToGradeRate",
      role: "Master",
    },
    {
      label: "Taxa de reprovação por falta",
      value: "failedDueToAbsencesRate",
      role: "Master",
    },
    {
      label: "Taxa de trancamento",
      value: "suspendedRate",
      role: "Master",
    },
    {
      label: "Número de matrículas",
      value: "totalEnrolled",
      role: "Master",
    },
    {
      label: "Média de matrículas por turma",
      value: "averageEnrollmentsPerClass",
      role: "Master",
    },
    {
      label: "Cancelados",
      value: "cancelledRate",
      role: "Master",
    },
    {
      label: "Número de turmas",
      value: "classesCount",
      role: "Master",
    },
    {
      label: "Número de dispensas",
      value: "exemptedRate",
      role: "Master",
    },
    {
      label: "undefined",
      value: "ongoingRate",
      role: "Master",
    },
    {
      label: "Número de disciplinas",
      value: "subjectsCount",
      role: "Master",
    },
  ];

  const translatedVariables = {
    succeededRate: "Taxa de sucesso",
    failedDueToGradeRate: "Taxa de reprovação por nota",
    failedDueToAbsencesRate: "Taxa de reprovação por falta",
    suspendedRate: "Taxa de trancamento",
    totalEnrolled: "Número de matrículas",
    averageEnrollmentsPerClass: "Média de matrículas por turma",
    cancelledRate: "Cancelados",
    classesCount: "Número de turmas",
    exemptedRate: "Número de dispensas",
    ongoingRate: "undefined",
    subjectsCount: "Número de disciplinas",
  }


export { variables, translatedVariables };