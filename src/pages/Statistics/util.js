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

const evadidos = {
    "periodos": [
        {
            periodo: '12.1', tag1: 35, tag2: 33, tag3: 45, tag4: 54, tag5: 13, tag6: 17, tag7: 23, tag8: 66, tag9: 23
        },
        {
            periodo: '12.2', tag1: 25, tag2: 28, tag3: 42, tag4: 52, tag5: 17, tag6: 26, tag7: 24, tag8: 67, tag9: 26
        },
        {
            periodo: '13.1', tag1: 45, tag2: 24, tag3: 49, tag4: 50, tag5: 10, tag6: 19, tag7: 27, tag8: 60, tag9: 25
        },
        {
            periodo: '13.2', tag1: 28, tag2: 35, tag3: 44, tag4: 56, tag5: 23, tag6: 12, tag7: 23, tag8: 62, tag9: 24
        },
        {
            periodo: '14.1', tag1: 22, tag2: 41, tag3: 49, tag4: 51, tag5: 11, tag6: 20, tag7: 29, tag8: 63, tag9: 21
        },
        {
            periodo: '14.2', tag1: 34, tag2: 23, tag3: 46, tag4: 53, tag5: 16, tag6: 13, tag7: 25, tag8: 66, tag9: 20
        },
        {
            periodo: '15.1', tag1: 50, tag2: 34, tag3: 35, tag4: 64, tag5: 14, tag6: 12, tag7: 28, tag8: 66, tag9: 22
        },
        {
            periodo: '15.2', tag1: 24, tag2: 24, tag3: 46, tag4: 55, tag5: 17, tag6: 24, tag7: 33, tag8: 60, tag9: 22
        },
        {
            periodo: '16.1', tag1: 34, tag2: 37, tag3: 40, tag4: 51, tag5: 19, tag6: 14, tag7: 29, tag8: 76, tag9: 20
        },
        {
            periodo: '16.2', tag1: 19, tag2: 40, tag3: 42, tag4: 52, tag5: 20, tag6: 36, tag7: 31, tag8: 62, tag9: 19
        },
        {
            periodo: '17.1', tag1: 39, tag2: 43, tag3: 46, tag4: 58, tag5: 22, tag6: 24, tag7: 32, tag8: 67, tag9: 13
        },
        {
            periodo: '17.2', tag1: 37, tag2: 28, tag3: 46, tag4: 59, tag5: 14, tag6: 21, tag7: 29, tag8: 66, tag9: 44
        },
        {
            periodo: '18.1', tag1: 26, tag2: 34, tag3: 41, tag4: 60, tag5: 11, tag6: 24, tag7: 25, tag8: 56, tag9: 34
        },
        {
            periodo: '18.2', tag1: 29, tag2: 35, tag3: 38, tag4: 64, tag5: 21, tag6: 35, tag7: 26, tag8: 61, tag9: 21
        },
        {
            periodo: '19.1', tag1: 30, tag2: 51, tag3: 50, tag4: 52, tag5: 33, tag6: 22, tag7: 22, tag8: 64, tag9: 28
        },
        {
            periodo: '19.2', tag1: 32, tag2: 43, tag3: 42, tag4: 50, tag5: 25, tag6: 15, tag7: 22, tag8: 56, tag9: 22
        },
        {
            periodo: '20.1', tag1: 33, tag2: 34, tag3: 44, tag4: 53, tag5: 25, tag6: 17, tag7: 28, tag8: 62, tag9: 25
        },
        {
            periodo: '20.2', tag1: 40, tag2: 44, tag3: 48, tag4: 52, tag5: 18, tag6: 26, tag7: 29, tag8: 46, tag9: 33
        },
    ]
}

const labelTags = ['tag1', 'tag2', 'tag3', 'tag4', 'tag5', 'tag6', 'tag7', 'tag8', 'tag9'];

/// EXEMPLOS DE JSON
const egressosExemplo = {
    "graduados": 250,
    "avg_graduados": 42.8,
    "max_periodo": "15.1",
    "max_egressos": 41,
    "min_periodo": "13.2",
    "min_egressos": 12,
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

const evadidosExemplo = {
    "periodos": [
        {
            periodo: '12.1', tag1: 35, tag2: 33, tag3: 45, tag4: 54, tag5: 13, tag6: 17, tag7: 23, tag8: 66, tag9: 23
        },
        {
            periodo: '12.2', tag1: 25, tag2: 28, tag3: 42, tag4: 52, tag5: 17, tag6: 26, tag7: 24, tag8: 67, tag9: 26
        },
        {
            periodo: '13.1', tag1: 45, tag2: 24, tag3: 49, tag4: 50, tag5: 10, tag6: 19, tag7: 27, tag8: 60, tag9: 25
        },
        {
            periodo: '13.2', tag1: 28, tag2: 35, tag3: 44, tag4: 56, tag5: 23, tag6: 12, tag7: 23, tag8: 62, tag9: 24
        },
        {
            periodo: '14.1', tag1: 22, tag2: 41, tag3: 49, tag4: 51, tag5: 11, tag6: 20, tag7: 29, tag8: 63, tag9: 21
        },
        {
            periodo: '14.2', tag1: 34, tag2: 23, tag3: 46, tag4: 53, tag5: 16, tag6: 13, tag7: 25, tag8: 66, tag9: 20
        },
        {
            periodo: '15.1', tag1: 50, tag2: 34, tag3: 35, tag4: 64, tag5: 14, tag6: 12, tag7: 28, tag8: 66, tag9: 22
        },
        {
            periodo: '15.2', tag1: 24, tag2: 24, tag3: 46, tag4: 55, tag5: 17, tag6: 24, tag7: 33, tag8: 60, tag9: 22
        },
        {
            periodo: '16.1', tag1: 34, tag2: 37, tag3: 40, tag4: 51, tag5: 19, tag6: 14, tag7: 29, tag8: 76, tag9: 20
        },
        {
            periodo: '16.2', tag1: 19, tag2: 40, tag3: 42, tag4: 52, tag5: 20, tag6: 36, tag7: 31, tag8: 62, tag9: 19
        },
        {
            periodo: '17.1', tag1: 39, tag2: 43, tag3: 46, tag4: 58, tag5: 22, tag6: 24, tag7: 32, tag8: 67, tag9: 13
        },
        {
            periodo: '17.2', tag1: 37, tag2: 28, tag3: 46, tag4: 59, tag5: 14, tag6: 21, tag7: 29, tag8: 66, tag9: 44
        },
        {
            periodo: '18.1', tag1: 26, tag2: 34, tag3: 41, tag4: 60, tag5: 11, tag6: 24, tag7: 25, tag8: 56, tag9: 34
        },
        {
            periodo: '18.2', tag1: 29, tag2: 35, tag3: 38, tag4: 64, tag5: 21, tag6: 35, tag7: 26, tag8: 61, tag9: 21
        },
        {
            periodo: '19.1', tag1: 30, tag2: 51, tag3: 50, tag4: 52, tag5: 33, tag6: 22, tag7: 22, tag8: 64, tag9: 28
        },
        {
            periodo: '19.2', tag1: 32, tag2: 43, tag3: 42, tag4: 50, tag5: 25, tag6: 15, tag7: 22, tag8: 56, tag9: 22
        },
        {
            periodo: '20.1', tag1: 33, tag2: 34, tag3: 44, tag4: 53, tag5: 25, tag6: 17, tag7: 28, tag8: 62, tag9: 25
        },
        {
            periodo: '20.2', tag1: 40, tag2: 44, tag3: 48, tag4: 52, tag5: 18, tag6: 26, tag7: 29, tag8: 46, tag9: 33
        },
    ]
}

export {statisticsEnum, labels, egressos, evadidos, labelTags};