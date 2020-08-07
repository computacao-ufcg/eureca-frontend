const statisticsEnum = {
    "options": [
        "Discentes",
        "Matriculas",
        "Disciplinas",
    ],
    "Discentes":[
        "Ativos",
        "Egressos",
        "Evadidos",
        "Retidos",
    ],
    "Matriculas": [
        "Exemplo",
        "Mais Exemplos",
        "Alguma coisa",
        "Vamos lá",
        "Alo"
    ],
    "Disciplinas": [
        "Oac",
        "Loac",
        "Eda",
        "Leda",
        "P1",
        "P2"
    ]
}

const labels = ['12.1', '12.2', '13.1', '13.2', '14.1', '14.2', '15.1', '15.2', '16.1', '16.2', '17.1', '17.2', '18.1', '18.2', '19.1', '19.2', '20.1', '20.2'];

const egressos = {
    "graduados": "250",
    "avg_graduados": "32.8",
    "max_periodo": "15.1",
    "max_egressos": "41",
    "min_periodo": "13.2",
    "min_egressos": "12",
    "avg_cra": "7.71",
    "min_cra": "6.22",
    "max_cra": "8.13",
    "mediana_cra": "7.83",
    "periodos": [
        {
            periodo: '12.1', cra: 6.4, egressos: 33,
        },
        {
            periodo: '12.2', cra: 7.8, egressos: 28,
        },
        {
            periodo: '13.1', cra: 7.7, egressos: 24,
        },
        {
            periodo: '13.2', cra: 7.9, egressos: 35,
        },
        {
            periodo: '14.1', cra: 7.2, egressos: 41,
        },
        {
            periodo: '14.2', cra: 6.7, egressos: 23,
        },
        {
            periodo: '15.1', cra: 7.4, egressos: 34,
        },
        {
            periodo: '15.2', cra: 7.6, egressos: 24,
        },
        {
            periodo: '16.1', cra: 7.3, egressos: 37,
        },
        {
            periodo: '16.2', cra: 7.5, egressos: 40,
        },
        {
            periodo: '17.1', cra: 7.4, egressos: 43,
        },
        {
            periodo: '17.2', cra: 6.8, egressos: 28,
        },
        {
            periodo: '18.1', cra: 7.5, egressos: 34,
        },
        {
            periodo: '18.2', cra: 6.9, egressos: 35,
        },
        {
            periodo: '19.1', cra: 8.2, egressos: 51,
        },
        {
            periodo: '19.2', cra: 7.7, egressos: 43,
        },
        {
            periodo: '20.1', cra: 8.4, egressos: 34,
        },
        {
            periodo: '20.2', cra: 6.6, egressos: 44,
        },
    ]
}
export {statisticsEnum, labels, egressos};