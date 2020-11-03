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
        "label": "Análise e Técnica de Algoritmos",
        "value": "atal",
        "role": "Obrigatórias"
    },
    {
        "label": "Redes de Computadores",
        "value": "redes",
        "role": "Obrigatórias"
    },
    {
        "label": "Programação 1",
        "value": "p1",
        "role": "Obrigatórias"
    },
    {
        "label": "Teoria dos Grafos",
        "value": "grafos",
        "role": "Obrigatórias"
    },
    {
        "label": "Estrutura de Dados e Algoritmos",
        "value": "eda",
        "role": "Obrigatórias"
    },
    {
        "label": "Laboratório de Estrutura de Dados",
        "value": "leda",
        "role": "Obrigatórias"
    },
    {
        "label": "Organização e Arquitetura de Computadores",
        "value": "oac",
        "role": "Obrigatórias"
    },
    {
        "label": "Laboratório de Organização e Arquitetura de Computadores",
        "value": "loac",
        "role": "Obrigatórias"
    },
    {
        "label": "Paradigmas de Linguagem de Programação",
        "value": "plp",
        "role": "Obrigatórias"
    },
    {
        "label": "Teoria da Computação",
        "value": "tc",
        "role": "Obrigatórias"
    },
    {
        "label": "Lógica para Computação",
        "value": "logica",
        "role": "Obrigatórias"
    },
    {
        "label": "Fundamentos Matemáticos para Ciência da Computação 1",
        "value": "fmcc1",
        "role": "Obrigatórias"
    },
    {
        "label": "Fundamentos Matemáticos para Ciência da Computação 2",
        "value": "fmcc2",
        "role": "Obrigatórias"
    },
    {
        "label": "Programação Concorrente",
        "value": "pc",
        "role": "Obrigatórias"
    },
    {
        "label": "Arquitetura de Software",
        "value": "arqsoft",
        "role": "Optativas Expecíficas"
    },
    {
        "label": "Algoritmos Avançados",
        "value": "aa",
        "role": "Optativas Expecíficas"
    },
    {
        "label": "Programação Funcional",
        "value": "funcional",
        "role": "Optativas Expecíficas"
    },
    {
        "label": "Administração de Sistemas",
        "value": "sysadm",
        "role": "Optativas Expecíficas"
    },
    {
        "label": "Príncipios de Desenvolvimento Web",
        "value": "devweb",
        "role": "Optativas Expecíficas"
    },
    {
        "label": "Informática e Sociedade",
        "value": "infosoc",
        "role": "Optativas Gerais"
    },
    {
        "label": "Língua Portuguesa",
        "value": "portugues",
        "role": "Optativas Gerais"
    },
    {
        "label": "Cáculo Diferencial 3",
        "value": "c3",
        "role": "Extracurriculares"
    },
    {
        "label": "Física Geral 1",
        "value": "f1",
        "role": "Extracurriculares"
    },
    {
        "label": "Física Geral 2",
        "value": "f2",
        "role": "Extracurriculares"
    },
    {
        "label": "Física Geral 3",
        "value": "f3",
        "role": "Extracurriculares"
    },
    {
        "label": "Física Geral 4",
        "value": "f4",
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
        "label": "Tamanho da turma",
        "value": "tamanhoTurma",
        "role": "metrica"
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