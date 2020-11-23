# Eureca route document

### Statistics

#### Students

##### Active Students:

- Request: **[GET]** `/active?from={initial_date}&to={final_date}`
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
}
```

##### Graduated Students:

- Request: **[GET]** `/graduated?from={initial_date}&to={final_date}`
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
}
```

##### Evaded Students:

- Request: **[GET]** `/evaded?from={initial_date}&to={final_date}`
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
}
```

#### Subjects

##### Summary

##### Metrics


