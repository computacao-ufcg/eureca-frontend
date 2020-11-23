# Eureca route document

### Statistics

#### Students

##### Active Students:

- Request: **[GET]** `api/statistics/students/active?from={initial_date}&to={final_date}`
- Response:

```javascript
data = {
  "content": [
    {"enrollment":"112240557","admission_period":"2012.2","paid-in_periods":14,"percentage_completed":91.84},
    {"enrollment":"113104033","admission_period":"2013.1","paid-in_periods":14,"percentage_completed":91.84},
    {"enrollment":"113181931","admission_period":"2013.1","paid-in_periods":13,"percentage_completed":57.14},
    {"enrollment":"113221987","admission_period":"2013.2","paid-in_periods":13,"percentage_completed":81.63},
    {"enrollment":"113296807","admission_period":"2013.2","paid-in_periods":13,"percentage_completed":97.96},
    {"enrollment":"113237389","admission_period":"2013.2","paid-in_periods":11,"percentage_completed":39.8},
    {"enrollment":"114185981","admission_period":"2014.1","paid-in_periods":11,"percentage_completed":80.61},
    {"enrollment":"114199301","admission_period":"2014.1","paid-in_periods":12,"percentage_completed":82.65},
    {"enrollment":"114175891","admission_period":"2014.1","paid-in_periods":12,"percentage_completed":75.51},
    {"enrollment":"114130836","admission_period":"2014.1","paid-in_periods":11,"percentage_completed":66.33},
    {"enrollment":"114123281","admission_period":"2014.1","paid-in_periods":12,"percentage_completed":85.71},
    {"enrollment":"114124961","admission_period":"2014.1","paid-in_periods":12,"percentage_completed":88.78},
    {"enrollment":"114175281","admission_period":"2014.1","paid-in_periods":12,"percentage_completed":66.33},
    {"enrollment":"114230721","admission_period":"2014.2","paid-in_periods":10,"percentage_completed":60.2},
    {"enrollment":"114200351","admission_period":"2014.2","paid-in_periods":11,"percentage_completed":78.57},
  ]
}
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

##### Evaded Students:

- Request: **[GET]** `api/statistics/students/evaded?from={initial_date}&to={final_date}`
- Response:

```javascript
data = {
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
- Request: **[GET]** `api/statistics/subjects/summary?from={initial_date}&to{final_date}`
- Response: 
```javascript
data = {
    "group": "Obrigatórias",
    "content": {
        "lim_inf": 50,
        "q1": 54,
        "q2": 59,
        "q3": 63,
        "lim_sup": 80,
        "outliers": [85, 90, 91],
    }
}
```

- Request: **[GET]** `api/statistics/subjects/summary`
- Response: 
```javascript
data = {
    "group": "Obrigatórias",
    "content": {
        "lim_inf": 50,
        "q1": 54,
        "q2": 59,
        "q3": 63,
        "lim_sup": 80,
        "outliers": [85, 90, 91],
    }
    "periods": []
}
```

##### Metrics

###### Class Overview:
- Request: **[GET]** `api/statistics/subjects/metrics?from={initial_date}&to={final_date}&subject={subject_value}&metric="class_overview"`
- Response:

```javascript
data = {
    "teachers_of_subject": ["t1", "t2", "t3", "t4", "t5"],

    {subject}: [
    {
      "period": '2014.1', "t1": 35, "t2": 40, "t3": 48, "total": 123
    },
    {
      "period": '2014.2', "t1": 30, "t2": 45, "t3": 42, "total": 117
    },
    {
      "period": '2015.1', "t2": 38, "t3": 32, "t4": 35, "total": 105
    },
    {
      "period": '2015.2', "t2": 38, "t3": 36, "t4": 40, "total": 114
    },
    {
      "period": '2016.1', "t2": 34, "t3": 40, "t4": 42, "total": 116
    },
    {
      "period": '2016.2', "t3": 40, "t4": 40, "t5": 36, "total": 116
    },
    {
      "period": '2017.1', "t3": 32, "t4": 40, "t5": 38, "total": 110
    },
    {
      "period": '2017.2', "t3": 34, "t4": 38, "t5": 43, "total": 115
    },
  ]
}
```

###### Class Statistics:
- Request: **[GET]** `api/statistics/subjects/metrics?from={initial_date}&to={final_date}&subject={subject_value}&metric="class_statistics"`
- Response:

```javascript
data = {
    {subject}: [
    {
    "period": '2014.1', "min": 35, "avg": 40, "max": 48, 
    },
    {
    "period": '2014.2', "min": 30, "avg": 37, "max": 42, 
    },
    {
    "period": '2015.1', "min": 33, "avg": 38, "max": 45, 
    },
    {
    "period": '2015.2', "min": 30, "avg": 36, "max": 40, 
    },
    {
    "period": '2016.1', "min": 34, "avg": 40, "max": 42, 
    },
    {
    "period": '2016.2', "min": 30, "avg": 40, "max": 50, 
    },
    {
    "period": '2017.1', "min": 32, "avg": 39, "max": 38, 
    },
    {
    "period": '2017.2', "min": 34, "avg": 38, "max": 43, 
    },
  ]
}
```

###### Success Overview:
- Request: **[GET]** `api/statistics/subjects/metrics?from={initial_date}&to={final_date}&subject={subject_value}&metric="success_overview"`
- Response:

```javascript
data = {
    "teachers_of_subject": ["t1", "t2", "t3", "t4", "t5"],

    {subject}: [
    {
      "period": '2014.1', "t1": 75, "t2": 60, "t3": 48, 
    },
    {
      "period": '2014.2', "t1": 70, "t2": 45, "t3": 62, 
    },
    {
      "period": '2015.1', "t2": 78, "t3": 82, "t4": 65, 
    },
    {
      "period": '2015.2', "t2": 88, "t3": 86, "t4": 80, 
    },
    {
      "period": '2016.1', "t2": 94, "t3": 90, "t4": 82, 
    },
    {
      "period": '2016.2', "t3": 90, "t4": 90, "t5": 86, 
    },
    {
      "period": '2017.1', "t3": 92, "t4": 90, "t5": 88, 
    },
    {
      "period": '2017.2', "t3": 94, "t4": 88, "t5": 93, 
    },
  ]
}
```


