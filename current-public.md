# Eureca Routes Documentation

## Statistics

### Students

#### **Actives**

- Request: **[GET]**:  `api/statistics/students/actives`
- Request: **[GET]**: `/api/statistics/students/actives?from="initial_period"&to="final_period"`

- Response example:

```javascript
{
  "sliderLabel": [
    "2012.2", "2013.1", "2013.2", "2014.1", ...
  ],
  "actives": [
    {
      "registration": "112240557",
      "admissionTerm": "2012.2",
      "completedTerms": 14,
      "progress": 1.0408163265306123,
      "riskClass": "NOT_APPLICABLE"
    },
    {
      "registration": "113104033",
      "admissionTerm": "2013.1",
      "completedTerms": 14,
      "progress": 1.0918367346938775,
      "riskClass": "NOT_APPLICABLE"
    },
    ...
  ],
  "summary": {
    "activesCount": 788,
    "riskClassCount": {
      "unfeasible": 5,
      "critical": 126,
      "late": 218,
      "normal": 272,
      "advanced": 84,
      "notApplicable": 83
    },
    "riskClassPercentage": {
      "unfeasible": 0.006345177664974619,
      "critical": 0.1598984771573604,
      "late": 0.2766497461928934,
      "normal": 0.34517766497461927,
      "advanced": 0.1065989847715736,
      "notApplicable": 0.10532994923857868
    }
  }
}
```

#### **Alumni**

- Request: **[GET]**:  `api/statistics/students/alumni`
- Request: **[GET]**: `/api/statistics/students/alumni?from="initial_period"&to="final_period"`

- Response example:

```javascript
{
  "sliderLabel": [
    "1981.1", "1981.2", "1982.1", "1982.2", ...
  ],
  "summary": {
    "averageGpa": 7.330174110522331,
    "maxDegreeCount": 50,
    "averageDegreeCount": 17.155844155844157,
    "minDegreeCount": 2,
    "maxDegreeCountTerm": "2019.2",
    "minDegreeCountTerm": "1996.1",
    "totalDegreeCount": 1321
  },
  "terms": [
    {
      "averageGpa": 6.355,
      "graduationTerm": "1981.1",
      "alumniCount": 4
    },
    {
      "averageGpa": 6.828,
      "graduationTerm": "1982.1",
      "alumniCount": 5
    },
    ...
  ]
}
```

#### **Dropouts**

- Request: **[GET]**:  `api/statistics/students/dropouts`
- Request: **[GET]**: `/api/statistics/students/dropouts?from="initial_period"&to="final_period"`

- Response example:

```javascript
{
  "sliderLabel": [
    "1996.1", "2006.1", "2006.2", ...
  ],
  "terms": [
    {
      "term": "1996.1",
      "reasons": {
        "failed3Times": 0,
        "reenterSameCourse": 0,
        "reenterOtherCourse": 0,
        "failedAll": 0,
        "cancelled": 0,
        "cancelledByDecree": 0,
        "cancelledCourseChange": 0,
        "cancelledUponRequest": 0,
        "leftWithoutNotice": 1,
        "missedGraduation": 0,
        "transferred": 0,
        "totalDropouts": 1
      }
    },
    {
      "term": "2006.1",
      "reasons": {
        "failed3Times": 0,
        "reenterSameCourse": 4,
        "reenterOtherCourse": 2,
        "failedAll": 0,
        "cancelled": 4,
        "cancelledByDecree": 0,
        "cancelledCourseChange": 0,
        "cancelledUponRequest": 0,
        "leftWithoutNotice": 8,
        "missedGraduation": 0,
        "transferred": 0,
        "totalDropouts": 18
      }
    },
    ...
  ],
  "summary": {
    "grossDropoutAlumnusRate": 0.817562452687358,
    "grossDropoutEnrolledRate": 0.33866415804327377,
    "grossDropoutCount": 1080,
    "netDropoutCount": 786
  }
}
```

#### **Actives, Alumni or Dropouts CSV**

students_type = ["actives", "alumni", "dropouts"]

- Request: **[GET]**:  `api/statistics/students/{students_type}/csv`
- Request: **[GET]**: `/api/statistics/students/{students_type}/csv?from="initial_period"&to="final_period"`

- Response example:

```javascript
[
  {
    "registration": "112240557",
    "gender": "Feminino",
    "maritalStatus": "Solteiro(a)",
    "curriculum": "2017",
    "affirmativePolicy": "",
    "admissionType": "REOPCAO",
    "admissionTerm": "2012.2",
    "statusStr": "Ativo",
    "statusTerm": "Current",
    "entryGrade": -1,
    "gpa": 5.68,
    "iea": 1.69,
    "mc": 7,
    "mandatoryCredits": 120,
    "complementaryCredits": 26,
    "electiveCredits": 58,
    "completedTerms": 14,
    "attemptedCredits": 369,
    "institutionalEnrollments": 0,
    "mobilityTerms": 0,
    "suspendedTerms": 1,
    "feasibility": -1,
    "successRate": 0.5040650406504065,
    "averageLoad": 26.357142857142858,
    "cost": 1.6391875746714457,
    "pace": 13.285714285714286,
    "courseDurationPrediction": 15,
    "risk": 0.07692307692307693,
    "completedCredits": 186
  },
  ...
]
```

**Obs:** A chave **statusStr** de cada objeto representa o tipo de aluno, que pode ser "Ativo", "GRADUADO" ou então o motivo de evasão do aluno, caso o mesmo seja um evadido.