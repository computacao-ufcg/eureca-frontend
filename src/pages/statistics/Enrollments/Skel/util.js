const variables = [
  {
    label: "Total de matrículas",
    value: "enrollmentsCount",
    role: "Master",
  },
  {
    label: "Total de turmas",
    value: "classesCount",
    role: "Master",
  },
  {
    label: "Média de matrículas por turma",
    value: "averageEnrollmentsPerClass",
    role: "Master",
  },
];

const translatedVariables = {
  classesCount: "Número de turmas",
  enrollmentsCount: "Número de matrículas",
  averageEnrollmentsPerClass: "Média de matrículas por turma",
};

export { variables, translatedVariables };
