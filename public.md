# Eureca route document

### Statistics

#### Students

##### Actives Students:

- Request: **[GET]** `api/statistics/students/actives`
- Response:

```javascript
[
  "slider_label": ["2013.2", "2014.1", "...", "2019.2"],
  "content": [
    {
      "enrollment": "112240557",
      "admission_period": "2012.2",
      "paid-in_periods": 3,
      "percentage_completed": 40.02,
      "situation": "ideal",
    },
    {
      "enrollment": "113104033",
      "admission_period": "2013.1",
      "paid-in_periods": 14,
      "percentage_completed": 91.84, 
      "situation": "bellow_expected",
    },
    {
      "enrollment": "118254859",
      "admission_period": "2018.2",
      "paid-in_periods": 3,
      "percentage_completed": 66.33,
      "situation": "above_expected",
    },
    {
      "enrollment": "118254859",
      "admission_period": "2018.2",
      "paid-in_periods": 3,
      "percentage_completed": 15.33,
      "situation": "expected",
    },
    ...
  ],
  "text_data": {
    "total_actives": 709,
    "total_situation": {
      "above_expected": 1,
      "ideal": 42,
      "expected": 281,
      "bellow_expected": 385, 
    },
    "total_situation_percentage": {
      "above_expected": 0.14,
      "ideal": 4.94,
      "expected": 39.63,
      "bellow_expected": 54.3, 
    },
    "bellow_expected_period": {
      "period": "2019.2",
      "total": 79
    }
  }
]
```
- **enrollment**: Matrícula do aluno.
- **admission_period**: Período de ingresso.
- **paid-in_periods**: Períodos integralizados.
- **percentage_completed**: Porcentagem concluida.
- **situation**: Situação do aluno. Pode ser quatro valores: "bellow_expected", "expected", "ideal", "above_expected".
- **sliderLabel**: Lista com periodos, em ordem crescente. 
- **total_actives**: Total de ativos entre os periodos registrados. 
- **total_situation**: A soma total dos alunos para cada situação.
- **total_situation_percentage**: A porcentagem total dos alunos para cada situação.
- **bellow_expected_period**: Período com maior taxa de alunos que estão na situação "Abaixo do esperado".

Na rota abaixo não será necessário a chave Sliderlabel no json retornado, pois os labels do slider já foram renderizados.

- Request: **[GET]** `api/statistics/students/actives?from={initial_date}&to={final_date}`
- Response:

```javascript
[
  "content": [
    {
      "enrollment": "112240557",
      "admission_period": "2012.2",
      "paid-in_periods": 3,
      "percentage_completed": 40.02,
      "situation": "ideal",
    },
    {
      "enrollment": "113104033",
      "admission_period": "2013.1",
      "paid-in_periods": 14,
      "percentage_completed": 91.84, 
      "situation": "bellow_expected",
    },
    {
      "enrollment": "118254859",
      "admission_period": "2018.2",
      "paid-in_periods": 3,
      "percentage_completed": 66.33,
      "situation": "above_expected",
    },
    {
      "enrollment": "118254859",
      "admission_period": "2018.2",
      "paid-in_periods": 3,
      "percentage_completed": 15.33,
      "situation": "expected",
    },
    ...
  ],
  "text_data": {
    "total_actives": 709,
    "total_situation": {
      "above_expected": 1,
      "ideal": 42,
      "expected": 281,
      "bellow_expected": 385, 
    },
    "total_situation_percentage": {
      "above_expected": 0.14,
      "ideal": 4.94,
      "expected": 39.63,
      "bellow_expected": 54.3, 
    },
    "bellow_expected_period": {
      "period": "2019.2",
      "total": 79
    }
  }
```

##### Actives Students CSV:

- Request: **[GET]** `api/statistics/students/actives/csv`
- Request: **[GET]** `api/statistics/students/actives/csv?from={initial_date}&to={final_date}`
- Response:

```JavaScript
[
  {
    "admission_period": "2012.2",
    "complementary_credits_paid-in": 26,
    "cra": 5.68,
    "curriculum": "2017",
    "enrollment": "112240557",
    "genre": "Feminino",
    "iea": 1.69,
    "institutional_enrollments": 0,
    "mandatory_credits_paid-in": 120,
    "marital_status": "Solteiro(a)",
    "mc": 7.0,
    "optional_credits_paid-in": 58,
    "overall_average_admission": null,
    "paid-in_periods": 14,
    "quota": "Não registrada",
    "student_mobility": 0,
    "total_locks": 1
  },
  ...
]

```

##### Graduated Students:

- Request: **[GET]** `api/statistics/students/graduated`
- Response:

```javascript
"avg_cra":6.36,
"min_graduates":2,
"max_graduates":50,
"avg_graduates":17.16,
"total_graduates": 1321,
"top_period":"2019.2",
"bottom_period":"1984.1"
"slider_label": ["2013.2", "2014.1", "...", "2019.2"],
"content": [
  { "avg_cra":6.36, "completion_period":"1981.1", "amount_graduates":4},
  { "avg_cra":6.83, "completion_period":"1982.1", "amount_graduates":5},
  { "avg_cra":5.8, "completion_period":"1982.2"," amount_graduates":6},
  { "avg_cra":6.05, "completion_period":"1983.1", "amount_graduates":6},
  { "avg_cra":6.36, "completion_period":"1983.2", "amount_graduates":4},
  { "avg_cra":5.74, "completion_period":"1984.1", "amount_graduates":2},
  { "avg_cra":6.36, "completion_period":"1984.2", "amount_graduates":2},
  { "avg_cra":6.85, "completion_period":"1985.1", "amount_graduates":2},
  { "avg_cra":5.92, "completion_period":"1985.2", "amount_graduates":10},
  ...
]
```

Rota de graduados com opções de seleção do intervalo de períodos, através dos filtros 'from' e 'to'.

- Request: **[GET]** `api/statistics/students/graduated?from={initial_date}&to={final_date}`
- Response:

```javascript
"avg_cra":6.36,
"min_graduates":2,
"max_graduates":50,
"avg_graduates":17.16,
"total_graduates": 1321,
"top_period":"2019.2",
"bottom_period":"1984.1"
"content": [
  { "avg_cra":6.36, "completion_period":"1981.1", "amount_graduates":4},
  { "avg_cra":6.83, "completion_period":"1982.1", "amount_graduates":5},
  { "avg_cra":5.8, "completion_period":"1982.2"," amount_graduates":6},
  { "avg_cra":6.05, "completion_period":"1983.1", "amount_graduates":6},
  { "avg_cra":6.36, "completion_period":"1983.2", "amount_graduates":4},
  { "avg_cra":5.74, "completion_period":"1984.1", "amount_graduates":2},
  { "avg_cra":6.36, "completion_period":"1984.2", "amount_graduates":2},
  { "avg_cra":6.85, "completion_period":"1985.1", "amount_graduates":2},
  { "avg_cra":5.92, "completion_period":"1985.2", "amount_graduates":10},
  ...
]
```

##### Graduated Students CSV:

- Request: **[GET]** `api/statistics/students/graduated/csv`
- Request: **[GET]** `api/statistics/students/graduated/csv?from={initial_date}&to={final_date}`
- Response:

```javascript
[
  {
    "complementary_credits_paid-in": 69,
    "completion_period": "1981.1",
    "cra": 5.85,
    "curriculum": "1990",
    "enrollment": "177297679",
    "genre": "Masculino",
    "iea": 4.18,
    "institutional_enrollments": 0,
    "mandatory_credits_paid-in": 0,
    "marital_status": "Casado(a)",
    "mc": 6.7,
    "optional_credits_paid-in": 25,
    "overall_average_admission": 541.0,
    "paid-in_periods": 9,
    "quota": "Não registrada",
    "student_mobility": 0,
    "total_locks": 0
  },
  ...
]
```

##### Escaped Students:

- Request: **[GET]** `api/statistics/students/escaped`
- Response:

```javascript
"relationship_escaped_by_graduates": 1.05,
"relationship_escaped_by_begginers": 0.4,
"gross_total_dropouts": 1383,
"net_total_dropouts": 1089,
"slider_label": ["1987.1", "1987.2", "...", "2019.2"],
"content": [
  {
    "period": "1987.1",
    "tags": { "tag1": 0, "tag13": 0, "tag2" :0, "tag3": 0, "tag4":0, "tag5": 0, "tag6": 0, "tag7": 0, "tag8": 0,  "tag9": 0 }
  },
  {
    "period": "1987.2",
    "tags": { "tag1": 0, "tag13": 0, "tag2" :0, "tag3": 0, "tag4":0, "tag5": 0, "tag6": 0, "tag7": 0, "tag8": 0,  "tag9": 0 }
  },
  {
    "period": "1988.1",
    "tags": { "tag1": 0, "tag13": 0, "tag2" :0, "tag3": 0, "tag4":0, "tag5": 0, "tag6": 0, "tag7": 0, "tag8": 0,  "tag9": 0 }
  },
  {
    "period": "1988.2",
    "tags": { "tag1": 0, "tag13": 0, "tag2" :0, "tag3": 0, "tag4":0, "tag5": 0, "tag6": 0, "tag7": 0, "tag8": 0,  "tag9": 0 }
  },
  ...
]
```

Rota de evadidos com opções de seleção do intervalo de períodos, através dos filtros 'from' e 'to'.

- Request: **[GET]** `api/statistics/students/escaped?from={initial_date}&to={final_date}`
- Response:

```javascript
"relationship_escaped_by_graduates": 1.05,
"relationship_escaped_by_begginers": 0.4,
"gross_total_dropouts": 1383,
"net_total_dropouts": 1089,
"content": [
  {
    "period": "1987.1",
    "tags": { "tag1": 0, "tag13": 0, "tag2" :0, "tag3": 0, "tag4":0, "tag5": 0, "tag6": 0, "tag7": 0, "tag8": 0,  "tag9": 0 }
  },
  {
    "period": "1987.2",
    "tags": { "tag1": 0, "tag13": 0, "tag2" :0, "tag3": 0, "tag4":0, "tag5": 0, "tag6": 0, "tag7": 0, "tag8": 0,  "tag9": 0 }
  },
  {
    "period": "1988.1",
    "tags": { "tag1": 0, "tag13": 0, "tag2" :0, "tag3": 0, "tag4":0, "tag5": 0, "tag6": 0, "tag7": 0, "tag8": 0,  "tag9": 0 }
  },
  {
    "period": "1988.2",
    "tags": { "tag1": 0, "tag13": 0, "tag2" :0, "tag3": 0, "tag4":0, "tag5": 0, "tag6": 0, "tag7": 0, "tag8": 0,  "tag9": 0 }
  },
  ...
]
```

##### Escaped Students CSV:

- Request: **[GET]** `api/statistics/students/escaped/csv`
- Request: **[GET]** `api/statistics/students/escaped/csv?from={initial_date}&to={final_date}`
- Response:

```javascript
[
  {
    "complementary_credits_paid-in": 180,
    "cra": 5.03,
    "curriculum": "1990",
    "enrollment": "187171673",
    "evasion_period": "1996.1",
    "evasion_reason": "CANCELAMENTO POR ABANDONO",
    "genre": "Masculino",
    "iea": 1.44,
    "institutional_enrollments": 0,
    "mandatory_credits_paid-in": 0,
    "marital_status": "Solteiro(a)",
    "mc": 7.32,
    "optional_credits_paid-in": 25,
    "overall_average_admission": 633.0,
    "paid-in_periods": 18,
    "quota": "Não registrada",
    "student_mobility": 0,
    "total_locks": 0
  },
  ...
]
```


#### Subjects

##### Summary

- Request: **[GET]** `api/statistics/subjects/summary`
- Response: 

```javascript
{
  "content": [
    {
      "data": {
        "lim_inf": 13.38,
        "lim_sup": 92.69,
        "outliers": [
          10.38
        ],
        "q1": 52.49,
        "q2": 65.91,
        "q3": 78.56
      },
      "group": "Obrigatórias"
    },
    { 
      "data": {
        "lim_inf": 0,
        "lim_sup": 341.67,
        "outliers": [
          
        ],
        "q1": 1.71,
        "q2": 50.46,
        "q3": 188.24
      },
      "group": "Optativas gerais"
    },
    ...
  ]
  "slider_label": [
    "2002.1","2002.2","2003.1","2003.2","2004.1","2004.2","2005.1","2005.2","2006.1","2006.2","2007.1","2007.2","2008.1","2008.2","2009.1","2009.2","2010.1","2010.2","2011.1","2011.2","2012.1","2012.2","2013.1","2013.2","2014.1","2014.2","2015.1","2015.2","2016.1","2016.2","2017.1","2017.2",
  ]
}
```

- Request: **[GET]** `api/statistics/subjects/summary?from={initial_date}&to{final_date}`
- Response: 
```javascript
{
  "content": [
    {
      "data": {
        "lim_inf": 13.38,
        "lim_sup": 92.69,
        "outliers": [
          10.38
        ],
        "q1": 52.49,
        "q2": 65.91,
        "q3": 78.56
      },
      "group": "Obrigatórias"
    },
    ...
  ]
}
```

##### Metrics

###### Class Overview:
- Request: **[GET]** `api/statistics/subjects/metrics?subject={subject_value}&metric="class_overview"` 

ou 

- **[GET]** `api/statistics/subjects/metrics?subject={subject_value}&metric="class_overview"&from={initial_date}&to={final_date}`

- Response:

```javascript
{
  "subject_code": "1411167",
  "classes": [
    {
      "period": "2002.1",
      "students": [
        28,
        12
      ],
      "teachers": [
        "332903",
        "337008"
      ],
      "total": 40
    },
    {
      "period": "2002.2",
      "students": [
        25,
        6
      ],
      "teachers": [
        "332903",
        "337008"
      ],
      "total": 31
    },
    ...
  ]
}
```

###### Class Statistics:
- Request: **[GET]** `api/statistics/subjects/metrics?subject={subject_value}&metric="class_statistics"`

ou

- **[GET]** `api/statistics/subjects/metrics?subject={subject_value}&metric="class_statistics"&from={initial_date}&to={final_date}`

- Response:

```javascript
{
  "subject_code": "1411167",
  "classes": [
    {
      "average": 20.0,
      "maximum": 28,
      "minimum": 12,
      "period": "2002.1"
    },
    {
      "average": 15.5,
      "maximum": 25,
      "minimum": 6,
      "period": "2002.2"
    },
    ...
  ]
}
```

###### Success Overview:
- Request: **[GET]** `api/statistics/subjects/metrics?subject={subject_value}&metric="success_overview"&from={initial_date}&to={final_date}`

ou 

- **[GET]** `api/statistics/subjects/metrics?subject={subject_value}&metric="success_overview"`

- Response:

```javascript
{
  "subject_code": "1411167",
  "classes": [
    {
      "period": "2002.1",
      "rates_by_class": {
        "t1": 0.93,
        "t2": 0.75
      },
      "teachers": [
        "332903",
        "337008"
      ],
      "total": 1.68
    },
    {
      "period": "2002.2",
      "rates_by_class": {
        "t1": 0.8,
        "t2": 0.33
      },
      "teachers": [
        "332903",
        "337008"
      ],
      "total": 1.13
    },
    ...
  ]
}
```

##### Other metrics

#### Average speed (Velocidade média)

- Request: **[GET]** `api/statistics/average_speed`

- Response:

```javascript
{
  "actives_avg_speed": 19.7,
  "amount_actives": 709,
  "active_students": [
    {
      "avg_speed": 12.71,
      "enrollment": "112240557"
    },
    {
      "avg_speed": 13.14,
      "enrollment": "113104033"
    },
    {
      "avg_speed": 8.62,
      "enrollment": "113181931"
    },
    ...
  ]
```

#### Exequibility (Exequibilidade)

- Request: **[GET]** `api/statistics/exequibility`

- Response:

```javascript
[
  {
    "enrollment": "113181931",
    "exequibility": 3.0
  },
  {
    "enrollment": "113221987",
    "exequibility": 1.43
  },
  {
    "enrollment": "113296807",
    "exequibility": 0.29
  },
  ...
]
```

#### Success rate (Taxa de sucesso)

- Request: **[GET]** `api/statistics/success_rate`

- Response:

```javascript
[
  {
    "enrollment": "100100223",
    "success_rate": 0.69
  },
  {
    "enrollment": "100100334",
    "success_rate": 0.73
  },
  {
    "enrollment": "100100556",
    "success_rate": 0.67
  },
  ...
]
```
