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
    const [cards, setCards] = useState({card1:true,card2:true,card3:true,card4:true,card5:true,card6:true})

    const [propStudents, setPropsStudents] = useState([])


    useEffect(() => {
        getSummary()
    }, []);

    const getSummary = async () => {
        let query = `api/statistics/students/students/summary`;

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
        if (data) {
            setPropsStudents([data.activesSummary.activesCount,
            data.activesSummary.riskClassCount.normal,
            data.activesSummary.riskClassCount.late,
            data.activesSummary.riskClassCount.advanced,
            data.activesSummary.riskClassCount.critical,
            data.activesSummary.riskClassCount.notApplicable,
            data.activesSummary.riskClassCount.unfeasible])
            setCards({...cards,card4:true, card5:true,card6:true})
        }
    }

    const setPropsAlumni = (data) => {
        console.log(data)
        if (data) {
            setPropsStudents([data.alumniSummary.totalDegreeCount,
            data.alumniSummary.averageDegreeCount.toFixed(2),
            data.alumniSummary.averageGpa.toFixed(2),])
            setCards({...cards,card4:false,card5:false,card6:false})
        }
    }

    const setPropsDelayed = (data) => {
        var risk = ''
        var cost = ''
        var pace = ''

        if (data) {

            if (data.delayedSummary.averageRisk.toFixed(2) >= -1.0 && data.delayedSummary.averageRisk.toFixed(2) <= -0.6) {
                risk = 'Muito Baixo'
            } else if (data.delayedSummary.averageRisk.toFixed(2) > -0.6 && data.delayedSummary.averageRisk.toFixed(2) <= -0.2) {
                risk = 'Baixo'
            } else if (data.delayedSummary.averageRisk.toFixed(2) > -0.2 && data.delayedSummary.averageRisk.toFixed(2) <= 0.2) {
                risk = 'Média'
            } else if (data.delayedSummary.averageRisk.toFixed(2) > 0.2 && data.delayedSummary.averageRisk.toFixed(2) <= 0.6) {
                risk = 'Alto'
            } else {
                risk = 'Muito Alto'
            }

            if (data.delayedSummary.averageCost.toFixed(2) > 0 && data.delayedSummary.averageCost.toFixed(2) <= 1) {
                cost = 'Inexato'
            } else if (data.delayedSummary.averageCost.toFixed(2) > 1 && data.delayedSummary.averageCost.toFixed(2) <= 1.36) {
                cost = 'Adequado'
            } else if (data.delayedSummary.averageCost.toFixed(2) > 1.36 && data.delayedSummary.averageCost.toFixed(2) <= 1.81) {
                cost = 'Regular'
            } else if (data.delayedSummary.averageCost.toFixed(2) > 1.81 && data.delayedSummary.averageCost.toFixed(2) <= 2.26) {
                cost = 'Alto'
            } else if (data.delayedSummary.averageCost.toFixed(2) > 2.26 && data.delayedSummary.averageCost.toFixed(2) <= 2.72) {
                cost = 'Muito Alto'
            } else {
                cost = 'Inaceitável'
            }

            if (data.delayedSummary.averagePace.toFixed(2) > 0 && data.delayedSummary.averagePace.toFixed(2) <= 14) {
                pace = 'Inaceitável'
            } else if (data.delayedSummary.averagePace.toFixed(2) > 14 && data.delayedSummary.averagePace.toFixed(2) < 15) {
                pace = 'Muito Lento'
            } else if (data.delayedSummary.averagePace.toFixed(2) >= 15 && data.delayedSummary.averagePace.toFixed(2) < 17.8) {
                pace = 'Lento'
            } else if (data.delayedSummary.averagePace.toFixed(2) >= 17.8 && data.delayedSummary.averagePace.toFixed(2) < 24) {
                pace = 'Adequado'
            } else {
                pace = 'Inexato'
            }


            setPropsStudents([data.delayedSummary.delayedCount,
            data.delayedSummary.averageAttemptedCredits.toFixed(2),
            cost + ' ('+ data.delayedSummary.averageCost.toFixed(2) + ')',
            data.delayedSummary.averageLoad.toFixed(2),
            pace + ' (' + data.delayedSummary.averagePace.toFixed(2) + ')',
            risk + ' (' + data.delayedSummary.averageRisk.toFixed(2) + ')',
            data.delayedSummary.averageSuccessRate.toFixed(2)])
            setCards({...cards,card4:true, card5:true,card6:true})
        }
    }

const setPropsDropout = (data) => {
    console.log(data)
    if (data) {
        setPropsStudents([data.dropoutsSummary.reasons.totalDropouts,
        data.dropoutsSummary.netDropoutAlumnusRate.toFixed(2),
        data.dropoutsSummary.netDropoutCount,
        data.dropoutsSummary.netDropoutEnrolledRate.toFixed(2),
        data.dropoutsSummary.reasons.totalDropouts - data.dropoutsSummary.netDropoutCount,
        data.dropoutsSummary.grossDropoutAlumnusRate.toFixed(2),
        data.dropoutsSummary.grossDropoutCount,
       ])

        setCards({...cards,card4:true, card5:false,card6:false})
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