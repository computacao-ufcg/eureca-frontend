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
        var successRate = data.activesSummary.average.metrics.successRate * 100

        if (data) {
            if (data.activesSummary.average.riskClass === "INACCURATE") {
                risk = 'Inexato'
            }else if (data.activesSummary.average.riskClass === "SAFE"){
                risk = "Seguro"
            }else if (data.activesSummary.average.riskClass === "LOW"){
                risk = "Baixo"
            }else if (data.activesSummary.average.riskClass === "AVERAGE"){
                risk = "Médio"
            }else if (data.activesSummary.average.riskClass === "HIGH"){
                risk = "Alto"
            }else if (data.activesSummary.average.riskClass === "UNFEASIBLE"){
                risk = "Inviável"
            } else {
                risk = "Não Aplicável"
            }

            if (data.activesSummary.average.costClass === "INACCURATE"){
                cost = "Inexato"
            }else if(data.activesSummary.average.costClass === "ADEQUATE"){
                cost = "Adequado"
            }else if(data.activesSummary.average.costClass === "REGULAR"){
                cost = "Regular"
            }else if(data.activesSummary.average.costClass === "HIGH"){
                cost = "Alto"
            }else if(data.activesSummary.average.costClass === "VERY_HIGH"){
                cost = "Muito Alto"
            }else if(data.activesSummary.average.costClass === "UNACCEPTABLE"){
                cost = "Inaceitável"
            }else{
                cost ="Não Aplicável"
            }


            setPropsStudents([data.activesSummary.activesCount,
            risk + ' (' + data.activesSummary.average.metrics.risk.toFixed(2) + ')',
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

            if (data.alumniSummary.costClass === "INACCURATE"){
                cost = "Inexato"
            }else if(data.alumniSummary.costClass === "ADEQUATE"){
                cost = "Adequado"
            }else if(data.alumniSummary.costClass === "REGULAR"){
                cost = "Regular"
            }else if(data.alumniSummary.costClass === "HIGH"){
                cost = "Alto"
            }else if(data.alumniSummary.costClass === "VERY_HIGH"){
                cost = "Muito Alto"
            }else if(data.alumniSummary.costClass === "UNACCEPTABLE"){
                cost = "Inaceitável"
            }else{
                cost ="Não Aplicável"
            }

            setPropsStudents([data.alumniSummary.alumniCount,
            data.alumniSummary.minDegreeCount + ' (' + data.alumniSummary.minDegreeCountTerm + ')',
            data.alumniSummary.maxDegreeCount + ' (' + data.alumniSummary.maxDegreeCountTerm + ')',
            data.alumniSummary.averageDegreeCount.toFixed(1),
            data.alumniSummary.averageGpa.toFixed(2),
            cost + ' (' + data.alumniSummary.averageCost.toFixed(1) + ')',
            data.alumniSummary.averageTermsCount.toFixed(1) + ' períodos'

            ])
            setCards({ ...cards, card4: true, card5: true, card6: true, card7: false })
        }
    }

    const setPropsDelayed = (data) => {
        var risk = ''
        var cost = ''
        var successRate = data.delayedSummary.average.metrics.successRate * 100


        if (data) {

            if (data.delayedSummary.average.riskClass === "INACCURATE") {
                risk = 'Inexato'
            }else if (data.delayedSummary.average.riskClass === "SAFE"){
                risk = "Seguro"
            }else if (data.delayedSummary.average.riskClass === "LOW"){
                risk = "Baixo"
            }else if (data.delayedSummary.average.riskClass === "AVERAGE"){
                risk = "Médio"
            }else if (data.delayedSummary.average.riskClass === "HIGH"){
                risk = "Alto"
            }else if (data.delayedSummary.average.riskClass === "UNFEASIBLE"){
                risk = "Inaviável"
            } else {
                risk = "Não Aplicável"
            }
        

            if (data.delayedSummary.average.costClass === "INACCURATE"){
                cost = "Inexato"
            }else if(data.delayedSummary.average.costClass === "ADEQUATE"){
                cost = "Adequado"
            }else if(data.delayedSummary.average.costClass === "REGULAR"){
                cost = "Regular"
            }else if(data.delayedSummary.average.costClass === "HIGH"){
                cost = "Alto"
            }else if(data.delayedSummary.average.costClass === "VERY_HIGH"){
                cost = "Muito Alto"
            }else if(data.delayedSummary.average.costClass === "UNACCEPTABLE"){
                cost = "Inaceitável"
            }else{
                cost ="Não Aplicável"
            }
        }



        setPropsStudents([data.delayedSummary.delayedCount,
        risk + ' (' + data.delayedSummary.average.metrics.risk.toFixed(2) + ')',
        data.delayedSummary.average.metrics.averageLoad.toFixed(1) + ' créditos',
        successRate.toFixed(1) + '%',
        data.delayedSummary.average.metrics.courseDurationPrediction.toFixed(1) + ' períodos',
        cost + '\n (' + data.delayedSummary.average.metrics.cost.toFixed(1) + ')',
        data.delayedSummary.average.termsCount.toFixed(1) + ' períodos',

        ])
        setCards({ ...cards, card4: true, card5: true, card6: true, card7: false })

    }


    const setPropsDropout = (data) => {
        console.log(data)
        if (data) {

            var cancelamento = data.dropoutsSummary.dropouts.failed3Times + data.dropoutsSummary.dropouts.failedAll + data.dropoutsSummary.dropouts.cancelled + data.dropoutsSummary.dropouts.cancelledByDecree
            var abandono = data.dropoutsSummary.dropouts.leftWithoutNotice + data.dropoutsSummary.dropouts.missedGraduation + data.dropoutsSummary.dropouts.cancelledUponRequest
            var transferencia = data.dropoutsSummary.dropouts.reenterOtherCourse + data.dropoutsSummary.dropouts.cancelledCourseChange + data.dropoutsSummary.dropouts.transferred
            var cost = ''

            if (data.dropoutsSummary.costClass === "INACCURATE"){
                cost = "Inexato"
            }else if(data.dropoutsSummary.costClass === "ADEQUATE"){
                cost = "Adequado"
            }else if(data.dropoutsSummary.costClass === "REGULAR"){
                cost = "Regular"
            }else if(data.dropoutsSummary.costClass === "HIGH"){
                cost = "Alto"
            }else if(data.dropoutsSummary.costClass === "VERY_HIGH"){
                cost = "Muito Alto"
            }else if(data.dropoutsSummary.costClass === "UNACCEPTABLE"){
                cost = "Inaceitável"
            }else{
                cost ="Não Aplicável"
            }

            setPropsStudents([data.dropoutsSummary.dropoutCount,
            data.dropoutsSummary.dropouts.reenterSameCourse,
                cancelamento,
                abandono,
                transferencia,
            cost + ' (' + data.dropoutsSummary.averageCost.toFixed(1) + ')',
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
                        <Link to={"/newDesign/statistics/students/glossary"}>
                            <button type="button">GLOSSÁRIO</button>
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