import React, { useEffect, useState } from 'react';

import '../style.css'

import { Link } from 'react-router-dom';

import TitleCardHome from '../TitleCardHome'
import StudentsSummaryCardHome from './StudentsSummaryCardHome'

import Mask6 from '../../../../assets/new_home_assets/mask_6.svg';
import Mask5 from '../../../../assets/new_home_assets/mask_5.svg';

import { labelActives, labelDropout, labelDelayed, labelAlumni } from './util'

import { api_EB } from '../../../../services/api'

const StudentsCardHome = () => {

    const [dataStudents, setDataStudents] = useState();
    const [optionStudent, setOptionStudent] = useState("actives")
    const [titleStudent, setTitleStudent] = useState("Ativos")
    const [labels, setLabels] = useState(labelActives)
    const [cards, setCards] = useState({ card1: true, card2: true, card3: true, card4: true, card5: true, card6: true, card7: true })

    const [propStudents, setPropsStudents] = useState([])


    useEffect(() => {
        getSummary()
    }, []);

    const getSummary = async () => {
        let query = `api/statistics/students/summary`;

        const res = await api_EB.get(query, { headers: { "Authentication-Token": sessionStorage.getItem('eureca-token') } });

        if (res) {
            console.log(res.data)
            setDataStudents(res.data);
            setPropsActives(res.data);
        } else {
            console.log(res.statusText);
        }
    }

    const setPropsActives = (data) => {
        var risk = ''
        var cost = ''
        var pace = ''
        var successRate = data.activesSummary.average.metrics.successRate * 100

        if (data) {
            if (data.activesSummary.average.metrics.risk.toFixed(2) >= -1.0 && data.activesSummary.average.metrics.risk.toFixed(2) <= -0.6) {
                risk = 'Muito Baixo'
            } else if (data.activesSummary.average.metrics.risk.toFixed(2) > -0.6 && data.activesSummary.average.metrics.risk.toFixed(2) <= -0.2) {
                risk = 'Baixo'
            } else if (data.activesSummary.average.metrics.risk.toFixed(2) > -0.2 && data.activesSummary.average.metrics.risk.toFixed(2) <= 0.2) {
                risk = 'Médio'
            } else if (data.activesSummary.average.metrics.risk.toFixed(2) > 0.2 && data.activesSummary.average.metrics.risk.toFixed(2) <= 0.6) {
                risk = 'Alto'
            } else {
                risk = 'Muito Alto'
            }

            if (data.activesSummary.average.metrics.cost.toFixed(2) > 0 && data.activesSummary.average.metrics.cost.toFixed(2) <= 1) {
                cost = 'Inexato'
            } else if (data.activesSummary.average.metrics.cost.toFixed(2) > 1 && data.activesSummary.average.metrics.cost.toFixed(2) <= 1.36) {
                cost = 'Adequado'
            } else if (data.activesSummary.average.metrics.cost.toFixed(2) > 1.36 && data.activesSummary.average.metrics.cost.toFixed(2) <= 1.81) {
                cost = 'Regular'
            } else if (data.activesSummary.average.metrics.cost.toFixed(2) > 1.81 && data.activesSummary.average.metrics.cost.toFixed(2) <= 2.26) {
                cost = 'Alto'
            } else if (data.activesSummary.average.metrics.cost.toFixed(2) > 2.26 && data.activesSummary.average.metrics.cost.toFixed(2) <= 2.72) {
                cost = 'Muito Alto'
            } else {
                cost = 'Inaceitável'
            }

            setPropsStudents([data.activesSummary.activesCount,
            risk + ' ('+ data.activesSummary.average.metrics.risk.toFixed(2) + ')',
            data.activesSummary.average.metrics.averageLoad.toFixed(1) + ' créditos',
            successRate.toFixed(1) + '%',
            data.activesSummary.average.metrics.courseDurationPrediction.toFixed(1) + ' períodos',
            cost + ' (' + data.activesSummary.average.metrics.cost.toFixed(1) + ')',
            data.activesSummary.average.termsCount.toFixed(1) + ' períodos'

            ])
            setCards({ ...cards, card4: true, card5: true, card6: true, card7: true })
        }
    }

    const setPropsAlumni = (data) => {
        console.log(data)
        if (data) {
            var cost = ''

            if (data.alumniSummary.averageCost.toFixed(2) > 0 && data.alumniSummary.averageCost.toFixed(2) <= 1) {
                cost = 'Inexato'
            } else if (data.alumniSummary.averageCost.toFixed(2) > 1 && data.alumniSummary.averageCost.toFixed(2) <= 1.36) {
                cost = 'Adequado'
            } else if (data.alumniSummary.averageCost.toFixed(2) > 1.36 && data.alumniSummary.averageCost.toFixed(2) <= 1.81) {
                cost = 'Regular'
            } else if (data.alumniSummary.averageCost.toFixed(2) > 1.81 && data.alumniSummary.averageCost.toFixed(2) <= 2.26) {
                cost = 'Alto'
            } else if (data.alumniSummary.averageCost.toFixed(2) > 2.26 && data.alumniSummary.averageCost.toFixed(2) <= 2.72) {
                cost = 'Muito Alto'
            } else {
                cost = 'Inaceitável'
            }

            setPropsStudents([data.alumniSummary.alumniCount,
            data.alumniSummary.minDegreeCount + ' (' + data.alumniSummary.minDegreeCountTerm + ')',
            data.alumniSummary.maxDegreeCount + ' (' + data.alumniSummary.maxDegreeCountTerm + ')',
            data.alumniSummary.averageDegreeCount.toFixed(1),
            data.alumniSummary.averageGpa.toFixed(2),
            cost + ' (' + data.alumniSummary.averageCost.toFixed(2) + ')',
            data.alumniSummary.averageTermsCount.toFixed(1) + ' períodos'
        
        ])
            setCards({ ...cards, card4: true, card5: true, card6: true, card7: false })
        }
    }

    const setPropsDelayed = (data) => {
        var risk = ''
        var cost = ''
        var pace = ''
        var successRate = data.delayedSummary.average.metrics.successRate * 100
        

        if (data) {

            if (data.delayedSummary.average.metrics.risk.toFixed(2) >= -1.0 && data.delayedSummary.average.metrics.risk.toFixed(2) <= -0.6) {
                risk = 'Muito Baixo'
            } else if (data.delayedSummary.average.metrics.risk.toFixed(2) > -0.6 && data.delayedSummary.average.metrics.risk.toFixed(2) <= -0.2) {
                risk = 'Baixo'
            } else if (data.delayedSummary.average.metrics.risk.toFixed(2) > -0.2 && data.delayedSummary.average.metrics.risk.toFixed(2) <= 0.2) {
                risk = 'Médio'
            } else if (data.delayedSummary.average.metrics.risk.toFixed(2) > 0.2 && data.delayedSummary.average.metrics.risk.toFixed(2) <= 0.6) {
                risk = 'Alto'
            } else {
                risk = 'Muito Alto'
            }

            if (data.delayedSummary.average.metrics.cost.toFixed(2) > 0 && data.delayedSummary.average.metrics.cost.toFixed(2) <= 1) {
                cost = 'Inexato'
            } else if (data.delayedSummary.average.metrics.cost.toFixed(2) > 1 && data.delayedSummary.average.metrics.cost.toFixed(2) <= 1.36) {
                cost = 'Adequado'
            } else if (data.delayedSummary.average.metrics.cost.toFixed(2) > 1.36 && data.delayedSummary.average.metrics.cost.toFixed(2) <= 1.81) {
                cost = 'Regular'
            } else if (data.delayedSummary.average.metrics.cost.toFixed(2) > 1.81 && data.delayedSummary.average.metrics.cost.toFixed(2) <= 2.26) {
                cost = 'Alto'
            } else if (data.delayedSummary.average.metrics.cost.toFixed(2) > 2.26 && data.delayedSummary.average.metrics.cost.toFixed(2) <= 2.72) {
                cost = 'Muito Alto'
            } else {
                cost = 'Inaceitável'
            }

            if (data.delayedSummary.average.metrics.pace.toFixed(2) > 0 && data.delayedSummary.average.metrics.pace.toFixed(2) <= 14) {
                pace = 'Inaceitável'
            } else if (data.delayedSummary.average.metrics.pace.toFixed(2) > 14 && data.delayedSummary.average.metrics.pace.toFixed(2) < 15) {
                pace = 'Muito Lento'
            } else if (data.delayedSummary.average.metrics.pace.toFixed(2) >= 15 && data.delayedSummary.average.metrics.pace.toFixed(2) < 17.8) {
                pace = 'Lento'
            } else if (data.delayedSummary.average.metrics.pace.toFixed(2) >= 17.8 && data.delayedSummary.average.metrics.pace.toFixed(2) < 24) {
                pace = 'Adequado'
            } else {
                pace = 'Inexato'
            }

            setPropsStudents([data.delayedSummary.delayedCount,
            risk + ' (' + data.delayedSummary.average.metrics.risk.toFixed(2) + ')',
            data.delayedSummary.average.metrics.averageLoad.toFixed(1) + 'créditos',
            successRate.toFixed(1) + '%',
            data.delayedSummary.average.metrics.courseDurationPrediction.toFixed(1) + ' períodos',
            cost + ' (' + data.delayedSummary.average.metrics.cost.toFixed(2) + ')',
            data.delayedSummary.average.termsCount.toFixed(1) + ' períodos',

            ])
            setCards({ ...cards, card4: true, card5: true, card6: true, card7: false })
        }
    }

    const setPropsDropout = (data) => {
        console.log(data)
        if (data) {

            var cancelamento = data.dropoutsSummary.dropouts.failed3Times + data.dropoutsSummary.dropouts.failedAll + data.dropoutsSummary.dropouts.cancelled + data.dropoutsSummary.dropouts.cancelledByDecree
            var abandono = data.dropoutsSummary.dropouts.leftWithoutNotice + data.dropoutsSummary.dropouts.missedGraduation + data.dropoutsSummary.dropouts.cancelledUponRequest
            var transferencia = data.dropoutsSummary.dropouts.reenterOtherCourse + data.dropoutsSummary.dropouts.cancelledCourseChange + data.dropoutsSummary.dropouts.transferred
            var cost = ''

            if (data.dropoutsSummary.averageCost.toFixed(2) > 0 && data.dropoutsSummary.averageCost.toFixed(2) <= 1) {
                cost = 'Inexato'
            } else if (data.dropoutsSummary.averageCost.toFixed(2) > 1 && data.dropoutsSummary.averageCost.toFixed(2) <= 1.36) {
                cost = 'Adequado'
            } else if (data.dropoutsSummary.averageCost.toFixed(2) > 1.36 && data.dropoutsSummary.averageCost.toFixed(2) <= 1.81) {
                cost = 'Regular'
            } else if (data.dropoutsSummary.averageCost.toFixed(2) > 1.81 && data.dropoutsSummary.averageCost.toFixed(2) <= 2.26) {
                cost = 'Alto'
            } else if (data.dropoutsSummary.averageCost.toFixed(2) > 2.26 && data.dropoutsSummary.averageCost.toFixed(2) <= 2.72) {
                cost = 'Muito Alto'
            } else {
                cost = 'Inaceitável'
            }

            setPropsStudents([data.dropoutsSummary.dropoutCount,
                data.dropoutsSummary.dropouts.reenterSameCourse,
                cancelamento,
                abandono,
                transferencia,
                cost + ' (' + data.dropoutsSummary.averageCost.toFixed(2) + ')',
                data.dropoutsSummary.averageTermsCount.toFixed(1) + ' períodos',
          
            ])

            setCards({ ...cards, card4: true, card5: true, card6: true, card7: false })
        }
    }


    return (
        <React.Fragment>
            <div className="card-home-area1">
                <div className="card-home-content">
                    <div className="title-card-content">
                        <TitleCardHome title={"DISCENTES"} />
                    </div>
                    <div className="summary-card-content">
                        <StudentsSummaryCardHome cards={cards} option={optionStudent} dataStudents={propStudents} data={labels} title={titleStudent} />
                        <div className='type-students-grid'>
                            <div className='type-students'>
                                <div className={optionStudent === 'actives' ? 'type-student-selected' : 'type-student'}>
                                    <button className="type-button" type="button" onClick={() => {
                                        if (optionStudent !== "actives") {
                                            setOptionStudent("actives");
                                            setTitleStudent("Ativos");
                                            setLabels(labelActives)
                                            setPropsActives(dataStudents)
                                        }
                                    }}>ATIVOS</button>
                                </div>
                                <div className={optionStudent === 'delayed' ? 'type-student-selected' : 'type-student'}>
                                    <button className="type-button" type="button" onClick={() => {
                                        if (optionStudent !== "delayed") {
                                            setOptionStudent("delayed");
                                            setTitleStudent("Retidos");
                                            setLabels(labelDelayed)
                                            setPropsDelayed(dataStudents);
                                        }
                                    }}>RETIDOS</button>
                                </div>
                                <div className={optionStudent === 'dropout' ? 'type-student-selected' : 'type-student'}>
                                    <button className="type-button" type="button" onClick={() => {
                                        if (optionStudent !== "dropout") {
                                            setOptionStudent("dropout");
                                            setTitleStudent("Evadidos");
                                            setLabels(labelDropout);
                                            setPropsDropout(dataStudents);
                                        }
                                    }}>EVADIDOS</button>
                                </div>
                                <div className={optionStudent === 'alumni' ? 'type-student-selected' : 'type-student'}>
                                    <button className="type-button" type="button" onClick={() => {
                                        if (optionStudent !== "alumni") {
                                            setOptionStudent("alumni");
                                            setTitleStudent("Egressos");
                                            setLabels(labelAlumni);
                                            setPropsAlumni(dataStudents);
                                        }
                                    }}>EGRESSOS</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-home-content-footer">
                        <Link to={"/newDesign/statistics/students/" + optionStudent}>
                            <button type="button">VER MAIS</button>
                        </Link>
                        <div className="mask6">
                            <img src={Mask6} alt="mask6" />
                        </div>
                        <div className="mask5">
                            <img src={Mask5} alt="mask5" />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default StudentsCardHome;