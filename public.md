# Eureca route document

### Statistics

#### Students

##### Actives Students:

- Request: **[GET]** `api/statistics/students/actives?from={initial_date}&to={final_date}`
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
    "name": {subject_name}
    "content": [
    {
      "period": '2014.1', 
      "classes:{
          "teachers":["t1", "t2", "t3"],
          "amount":[52, 60, 48],
          "total": 160
      }
    },
    {
      "period": '2014.2', 
      "classes:{
          "teachers":["t2", "t3", "t4"],
          "amount":[52, 60, 58],
          "total": 170
      }
    },
    {
      "period": '2015.1', 
      "classes:{
          "teachers":["t2", "t3", "t4"],
          "amount":[52, 60, 38],
          "total": 150
      }
    },
    {
      "period": '2015.2', 
      "classes:{
          "teachers":["t3", "t4", "t5"],
          "amount":[52, 50, 48],
          "total": 150
      }
    },
    {
      "period": '2016.1', 
      "classes:{
          "teachers":["t3", "t4", "t5"],
          "amount":[62, 60, 48],
          "total": 180
      }
    }
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
    "name": {subject_name}
    "content": [
      {
        "period": '2014.1', 
        "classes:{
            "teachers":["t1", "t2", "t3"],
            "amount":[52, 60, 48]
          }
      },
      {
        "period": '2014.2', 
        "classes:{
            "teachers":["t1", "t2", "t3"],
            "amount":[75, 62, 58]
          }
      },
      {
        "period": '2015.1', 
        "classes:{
            "teachers":["t2", "t3", "t4"],
            "amount":[45, 50, 48]
          }
      },
      {
        "period": '2015.2', 
        "classes:{
            "teachers":["t3", "t4", "t5"],
            "amount":[77, 62, 41]
          }
      },
    ]
}
```


