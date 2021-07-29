const labels = [
  "2011.1",
  "2011.2",
  "2012.1",
  "2012.2",
  "2013.1",
  "2013.2",
  "2014.1",
  "2014.2",
  "2015.1",
  "2015.2",
  "2016.1",
  "2016.2",
  "2017.1",
  "2017.2",
  "2018.1",
  "2018.2",
  "2019.1",
  "2019.2",
  "2020.1",
];

const prediction = [
  { cra_medio: 7.66, periodo_conclusao: "2019.2", qtd_egressos: 50 },
  { cra_medio: 6.36, periodo_conclusao: "2020.1", qtd_egressos: 54 },
  { cra_medio: 6.83, periodo_conclusao: "2020.2", qtd_egressos: 55 },
  { cra_medio: 5.8, periodo_conclusao: "2021.1", qtd_egressos: 56 },
  { cra_medio: 6.05, periodo_conclusao: "2021.2", qtd_egressos: 66 },
  { cra_medio: 6.36, periodo_conclusao: "2022.1", qtd_egressos: 74 },
  { cra_medio: 5.74, periodo_conclusao: "2022.2", qtd_egressos: 82 },
  { cra_medio: 6.05, periodo_conclusao: "2023.1", qtd_egressos: 86 },
  { cra_medio: 6.36, periodo_conclusao: "2023.2", qtd_egressos: 84 },
  { cra_medio: 5.74, periodo_conclusao: "2024.1", qtd_egressos: 82 },
];

const subtitles_translations = {
  maximum: {
    name: "Máxima",
  },
  minimum: { 
    name: "Mínimo"
  },
  first_quarter: { 
    name: "Primeiro quartil"
  },
  median: {
    name: "Mediana"
  },
  third_quarter: { 
    name: "Terceiro quartil"
  },
  average: { 
    name: "Média"
  },
};

const select_items = [
  {
    label: "Máxima",
    value: "maximum",
    role: "Master",
  },
  {
    label: "Mínimo",
    value: "minimum",
    role: "Master",
  },
  {
    label: "Primeiro quartil",
    value: "first_quarter",
    role: "Master",
  },
  {
    label: "Mediana",
    value: "median",
    role: "Master",
  },
  {
    label: "Terceiro quartil",
    value: "third_quarter",
    role: "Master",
  },
  {
    label: "Média",
    value: "average",
    role: "Master",
  }
];

export { labels, prediction, subtitles_translations, select_items };
