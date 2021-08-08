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

// Mapeamento das chaves de acesso ao json para os valores traduzidos que serão exibidos nas
// legendas do gráfico.
const subtitles_translations = {
  // "Período de graduação": "graduationTerm",

  attemptedCredits: {
    name: "valor médio para o Período",
    value: [
      { x: "2016.1", y: 196 },
      { x: "2020.1", y: 20 },
    ],
  },
  averageLoad: {
    name: "Carga média",
    value: 21.6,
    referenceLine: "Carga média esperada para o período",
  },
  cost: {
    name: "Custo médio para o Período",
    value: 1,
    referenceLine: "Custo ideal",
  },
  courseDurationPrediction: {
    name: "Previsão de Tempo Médio de Conclusão para o Período",
    value: 10.25,
    referenceLine: "Tempo de conclusão médio esperado",
  },
  feasibility: {
    name: "Viabilidade Média",
    value: 1,
    referenceLine: "Limite para Risco desprezível",
  },
  pace: {
    name: "Ritmo Médio para o Período",
    value: 21.6,
    referenceLine: "Ritmo Médio de Referência para o Período",
  },
  risk: {
    name: "Risco médio para o Período",
    value: 1,
    referenceLine: "Limite para Risco desprezível",
  },
  successRate: {
    name: "Taxa Média de Sucesso para o Período",
    value: 1,
    referenceLine: "Taxa de Sucesso de Referência",
  },
};

const select_items = [
  {
    label: "Créditos Matriculados",
    value: "attemptedCredits",
    role: "Master",
  },
  {
    label: "Carga Média",
    value: "averageLoad",
    role: "Master",
  },
  {
    label: "Custo Médio",
    value: "cost",
    role: "Master",
  },
  {
    label: "Previsão Média de Conclusão",
    value: "courseDurationPrediction",
    role: "Master",
  },
  {
    label: "Ritmo Médio",
    value: "pace",
    role: "Master",
  },
  {
    label: "Risco Médio",
    value: "risk",
    role: "Master",
  },
  {
    label: "Taxa Média de Sucesso",
    value: "successRate",
    role: "Master",
  },
];

export { labels, prediction, subtitles_translations, select_items };
