const academic_units = [
  {
    label: "UAAC",
    value: "1301",
    role: "Master",
  },
  {
    label: "UAAMi",
    value: "1302",
    role: "Master",
  },
  {
    label: "UACS",
    value: "1305",
    role: "Master",
  },
  {
    label: "UAEF",
    value: "1303",
    role: "Master",
  },
  {
    label: "UAEst",
    value: "1114",
    role: "Master",
  },
  {
    label: "UAF",
    value: "1108",
    role: "Master",
  },
  {
    label: "UAL",
    value: "1307",
    role: "Master",
  },
  {
    label: "UAMat",
    value: "1109",
    role: "Master",
  },
  {
    label: "UASC",
    value: "1411",
    role: "Master",
  },
];

const subject_type = [
  {
    label: "Todos",
    value: ".*?",
    role: "Master",
  },
  {
    label: "Obrigatórias",
    value: "MANDATORY",
    role: "Master",
  },
  {
    label: "Optativas",
    value: "OPTIONAL",
    role: "Master",
  },
  {
    label: "Eletivas",
    value: "ELECTIVE",
    role: "Master",
  },
  {
    label: "Complementares",
    value: "COMPLEMENTARY",
    role: "Master",
  },
];

const operations = [
  {
    label: ">",
    value: ">",
    role: "Master",
  },
  {
    label: "≥",
    value: ">=",
    role: "Master",
  },
  {
    label: "<",
    value: "<",
    role: "Master",
  },
  {
    label: "≤",
    value: "<=",
    role: "Master",
  },
  {
    label: "=",
    value: "=",
    role: "Master",
  },
];

const genders = [
  {
    label: "Todos",
    value: ".*?",
    role: "Master",
  },
  {
    label: "Feminino",
    value: "Feminino",
    role: "Master",
  },
  {
    label: "Masculino",
    value: "Masculino",
    role: "Master",
  },
];

const statuses = [
  {
    label: "Todos",
    value: "Todos",
    role: "Master",
  },
  {
    label: "Ativos",
    value: "Ativos",
    role: "Master",
  },
  {
    label: "Evadidos",
    value: "Evadidos",
    role: "Master",
  },
  {
    label: "Egressos",
    value: "Egressos",
    role: "Master",
  },
];

const cotas = [
  {
    label: "Todas",
    value: "todas",
    role: "Master",
  },
  {
    label: "AC",
    value: "AC",
    role: "Master",
  },
  {
    label: "L1",
    value: "L1",
    role: "Master",
  },
  {
    label: "L2",
    value: "L2",
    role: "Master",
  },
  {
    label: "L5",
    value: "L5",
    role: "Master",
  },
  {
    label: "L6",
    value: "L6",
    role: "Master",
  },
  {
    label: "L9",
    value: "L9",
    role: "Master",
  },
  {
    label: "L10",
    value: "L10",
    role: "Master",
  },
  {
    label: "L13",
    value: "L13",
    role: "Master",
  },
  {
    label: "L14",
    value: "L14",
    role: "Master",
  },
];

const admissionTerm = [
  {
    label: "Todos",
    value: ".*?",
    role: "Master",
  },
  {
    label: "2009.1",
    value: "2009.1",
    role: "Master",
  },
  {
    label: "2009.2",
    value: "2009.2",
    role: "Master",
  },
  {
    label: "2010.1",
    value: "2010.1",
    role: "Master",
  },
  {
    label: "2010.2",
    value: "2010.2",
    role: "Master",
  },
  {
    label: "2011.1",
    value: "2011.1",
    role: "Master",
  },
  {
    label: "2011.2",
    value: "2011.2",
    role: "Master",
  },
  {
    label: "2012.1",
    value: "2012.1",
    role: "Master",
  },
  {
    label: "2012.2",
    value: "2012.2",
    role: "Master",
  },
  {
    label: "2013.1",
    value: "2013.1",
    role: "Master",
  },
  {
    label: "2013.2",
    value: "2013.2",
    role: "Master",
  },
  {
    label: "2014.1",
    value: "2014.1",
    role: "Master",
  },
  {
    label: "2014.2",
    value: "2014.2",
    role: "Master",
  },
  {
    label: "2015.1",
    value: "2015.1",
    role: "Master",
  },
  {
    label: "2015.2",
    value: "2015.2",
    role: "Master",
  },
  {
    label: "2016.1",
    value: "2016.1",
    role: "Master",
  },
  {
    label: "2016.2",
    value: "2016.2",
    role: "Master",
  },
  {
    label: "2017.1",
    value: "2017.1",
    role: "Master",
  },
  {
    label: "2017.2",
    value: "2017.2",
    role: "Master",
  },
  {
    label: "2018.1",
    value: "2018.1",
    role: "Master",
  },
  {
    label: "2018.2",
    value: "2018.2",
    role: "Master",
  },
  {
    label: "2019.1",
    value: "2019.1",
    role: "Master",
  },
  {
    label: "2019.2",
    value: "2019.2",
    role: "Master",
  },
  {
    label: "2020.1",
    value: "2020.1",
    role: "Master",
  },
  {
    label: "2020.2",
    value: "2020.2",
    role: "Master",
  },
  {
    label: "2021.1",
    value: "2021.1",
    role: "Master",
  },
];

const risco = [
  {
    label: "todos",
    value: "todos",
    role: "Master",
  },
  {
    label: "Muito baixo",
    value: "Muito baixo",
    role: "Master",
  },
  {
    label: "Baixo",
    value: "Baixo",
    role: "Master",
  },
  {
    label: "Médio",
    value: "Médio",
    role: "Master",
  },
  {
    label: "Alto",
    value: "Alto",
    role: "Master",
  },
  {
    label: "Muito alto ",
    value: "Muito alto ",
    role: "Master",
  },
];

const custo = [
  {
    label: "todos",
    value: "todos",
    role: "Master",
  },
  {
    label: "Inexato",
    value: "Inexato",
    role: "Master",
  },
  {
    label: "Adequado",
    value: "Adequado",
    role: "Master",
  },
  {
    label: "Regular",
    value: "Regular",
    role: "Master",
  },
  {
    label: "Alto",
    value: "Alto",
    role: "Master",
  },
  {
    label: "Muito alto",
    value: "Muito alto",
    role: "Master",
  },
  {
    label: "Inaceitável",
    value: "Inaceitável",
    role: "Master",
  },
];

export { admissionTerm, academic_units, subject_type, operations, genders, statuses, cotas, risco, custo };
