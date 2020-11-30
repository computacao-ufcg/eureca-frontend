# Eureca route document

### Statistics

#### Students

##### Actives Students:

- Request: **[GET]** `api/statistics/students/actives?from={initial_date}&to={final_date}`
- Response:

```javascript
const data = {
    "sliderLabel": ["2013.2", "2014.1", "...", "2019.2"],
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
        }
    ],
    "textData": {
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
}
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

Na rota abaixo não será necessário a informação dos periodos.

- Request: **[GET]** `api/statistics/students/actives?from={initial_date}&to={final_date}`
- Response:

```javascript
const data = {
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
        }
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
}
```

##### Actives Students CSV:

- Request: **[GET]** `api/statistics/students/actives/csv`
- Request: **[GET]** `api/statistics/students/actives/csv?from={initial_date}&to={final_date}`
- Response:

```JavaScript
const data = [
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
]

```

##### Graduated Students:

- Request: **[GET]** `api/statistics/students/graduated?from={initial_date}&to={final_date}`
- Response:

```javascript
data = {
  "avg_cra":6.36,
  "max_graduates":50,
  "avg_graduates":17.16,
  "min_graduates":2,
  "top_period":"2019.2",
  "bottom_period":"1984.1"
  "content": [
    {"avg_cra":6.36,"completion_period":"1981.1","amount_graduates":4},
    {"avg_cra":6.83,"completion_period":"1982.1","amount_graduates":5},
    {"avg_cra":5.8,"completion_period":"1982.2","amount_graduates":6},
    {"avg_cra":6.05,"completion_period":"1983.1","amount_graduates":6},
    {"avg_cra":6.36,"completion_period":"1983.2","amount_graduates":4},
    {"avg_cra":5.74,"completion_period":"1984.1","amount_graduates":2},
    {"avg_cra":6.36,"completion_period":"1984.2","amount_graduates":2},
    {"avg_cra":6.85,"completion_period":"1985.1","amount_graduates":2},
    {"avg_cra":5.92,"completion_period":"1985.2","amount_graduates":10}
  ]
}
```

##### Escaped Students:

- Request: **[GET]** `api/statistics/students/escaped?from={initial_date}&to={final_date}`
- Response:

```javascript
data = {
  "relationship_escaped_by_graduates": 1.05,
  "relationship_escaped_by_begginers": 0.4,
  "total_escaped": 1383,
  "total_escaped_without_reentry": 1089,
  "content": [
    {"period":"1987.1","tags":{"tag1":0,"tag13":0,"tag2":0,"tag3":0,"tag4":0,"tag5":0,"tag6":0,"tag7":0,"tag8":0,"tag9":0}},
    {"period":"1987.2","tags":{"tag1":0,"tag13":0,"tag2":0,"tag3":0,"tag4":0,"tag5":0,"tag6":0,"tag7":0,"tag8":0,"tag9":0}},
    {"period":"1988.1","tags":{"tag1":0,"tag13":0,"tag2":0,"tag3":0,"tag4":0,"tag5":0,"tag6":0,"tag7":0,"tag8":0,"tag9":0}},
    {"period":"1988.2","tags":{"tag1":0,"tag13":0,"tag2":0,"tag3":0,"tag4":0,"tag5":0,"tag6":0,"tag7":0,"tag8":0,"tag9":0}},
    {"period":"1989.1","tags":{"tag1":0,"tag13":0,"tag2":0,"tag3":0,"tag4":0,"tag5":0,"tag6":0,"tag7":0,"tag8":0,"tag9":0}},
    {"period":"1989.2","tags":{"tag1":0,"tag13":0,"tag2":0,"tag3":0,"tag4":0,"tag5":0,"tag6":0,"tag7":0,"tag8":0,"tag9":0}},
    {"period":"1990.1","tags":{"tag1":0,"tag13":0,"tag2":0,"tag3":0,"tag4":0,"tag5":0,"tag6":0,"tag7":0,"tag8":0,"tag9":0}},
    {"period":"1990.2","tags":{"tag1":0,"tag13":0,"tag2":0,"tag3":0,"tag4":0,"tag5":0,"tag6":0,"tag7":0,"tag8":0,"tag9":0}},
    {"period":"1991.1","tags":{"tag1":0,"tag13":0,"tag2":0,"tag3":0,"tag4":0,"tag5":0,"tag6":0,"tag7":0,"tag8":0,"tag9":0}},
    {"period":"1991.2","tags":{"tag1":0,"tag13":0,"tag2":0,"tag3":0,"tag4":0,"tag5":0,"tag6":0,"tag7":0,"tag8":0,"tag9":0}},
    {"period":"1992.1","tags":{"tag1":0,"tag13":0,"tag2":0,"tag3":0,"tag4":0,"tag5":0,"tag6":0,"tag7":0,"tag8":0,"tag9":0}},
    {"period":"1992.2","tags":{"tag1":0,"tag13":0,"tag2":0,"tag3":0,"tag4":0,"tag5":0,"tag6":0,"tag7":0,"tag8":0,"tag9":0}},
  ]
}
```

#### Subjects

##### Summary

- Request: **[GET]** `api/statistics/subjects/summary`
- Response: 

```javascript
data = {
  "content": [
    {
      "group": "Obrigatórias",
        "content": {
            "lim_inf": 50,
            "q1": 54,
            "q2": 59,
            "q3": 63,
            "lim_sup": 80,
            "outliers": [85, 90, 91],
        },
    },
  ],
  "sliderLabel": ["2002.1","2002.2","2003.1","2003.2","2004.1","2004.2","2005.1","2005.2","2006.1","2006.2","2007.1","2007.2","2008.1","2008.2","2009.1","2009.2","2010.1","2010.2","2011.1","2011.2","2012.1","2012.2","2013.1","2013.2","2014.1","2014.2","2015.1","2015.2","2016.1","2016.2","2017.1","2017.2",]
}
```

- Request: **[GET]** `api/statistics/subjects/summary?from={initial_date}&to{final_date}`
- Response: 
```javascript
data = { 
  "content":[
    {
      "group": "Obrigatórias",
      "content": {
          "lim_inf": 50,
          "q1": 54,
          "q2": 59,
          "q3": 63,
          "lim_sup": 80,
          "outliers": [85, 90, 91],
      }
    },
  ]
}

```

##### Metrics

###### Class Overview:
- Request: **[GET]** `api/statistics/subjects/metrics?from={initial_date}&to={final_date}&subject={subject_value}&metric="class_overview"`
- Response:

```javascript
data = {
    "subject_code": "1411167"
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
      {...},
      {...}
    ]
}
```

###### Class Statistics:
- Request: **[GET]** `api/statistics/subjects/metrics?from={initial_date}&to={final_date}&subject={subject_value}&metric="class_statistics"`
- Response:

```javascript
data = {
    "subject_code": "1411167",
    "classes": [
      {
        "period": "2002.1",
        "minimum": 12,
        "maximum": 28,
        "average": 20
      },
      {
        "period": "2002.2",
        "minimum": 6,
        "maximum": 25,
        "average": 15.5
      },
      {
        "period": "2003.1",
        "minimum": 46,
        "maximum": 46,
        "average": 46
      },
      {
        "period": "2003.2",
        "minimum": 37,
        "maximum": 37,
        "average": 37
      },
      {...},
      {...}
    ]
}
```

###### Success Overview:
- Request: **[GET]** `api/statistics/subjects/metrics?from={initial_date}&to={final_date}&subject={subject_value}&metric="success_overview"`
- Response:

```javascript
data = {
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
      {...},
      {...}
    ]
}
```


