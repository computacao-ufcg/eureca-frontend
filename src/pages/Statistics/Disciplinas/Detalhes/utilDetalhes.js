const disciplinas = [
    {
        "label": "Laboratório de Programação 2",
        "value": "lp2",
        "role": "Obrigatórias"
    },
    {
        "label": "Programação 2",
        "value": "p2",
        "role": "Obrigatórias"
    },
    {
        "label": "Sistemas Operacionais",
        "value": "so",
        "role": "Obrigatórias"
    },
    {
        "label": "Laboratório de Programação 1",
        "value": "lp1",
        "role": "Obrigatórias"
    },
    {
        "label": "Redes de Computadores",
        "value": "redes",
        "role": "Obrigatórias"
    },
    {
        "label": "Arquitetura de Software",
        "value": "arqsoft",
        "role": "Optativas Expecíficas"
    },
    {
        "label": "Informática e Sociedade",
        "value": "infosoc",
        "role": "Optativas Gerais"
    },
    {
        "label": "Cáculo Diferencial 3",
        "value": "c3",
        "role": "Extracurriculares"
    },
];

const metricas = [
    {
        "label": "Taxa de Sucesso",
        "value": "taxaSucesso",
        "role": "metrica"
    },
    {
        "label": "Número de Matrículas",
        "value": "nMatricula",
        "role": "metrica"
    },
    {
        "label": "Taxa de Sucesso",
        "value": "taxaSucesso",
        "role": "tamanhoTurma"
    }
];

const data = {
 "lp2": [
    {
      name: '2014.1', t1: 75, t2: 60, t3: 48,
    },
    {
      name: '2014.2', t1: 70, t2: 45, t3: 62,
    },
    {
      name: '2015.1', t1: 78, t2: 82, t3: 65,
    },
    {
      name: '2015.2', t1: 88, t2: 86, t3: 80,
    },
    {
      name: '2016.1', t1: 94, t2: 90, t3: 82,
    },
    {
      name: '2016.2', t1: 90, t2: 90, t3: 86,
    },
    {
      name: '2017.1', t1: 92, t2: 90, t3: 88,
    },
  ]
};

export {disciplinas, metricas, data}