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

    const [propStudents, setPropsStudents] = useState([])


    useEffect(() => {
        getSummary()
    },[]);

    const getSummary = async () => {
        let query = `api/statistics/students/students/summary`;

        const res = await api_EB.get(query, {headers:{"Authentication-Token": sessionStorage.getItem('eureca-token')}});
        
        if(res){
            console.log(res.data)
            setDataStudents(res.data);
            setPropsActives(res.data);
        } else{
            console.log(res.statusText);
        }
    }

    const setPropsActives = (data) => {
        if(data){
            setPropsStudents([data.activesSummary.activesCount, 
                data.activesSummary.riskClassCount.normal, 
                data.activesSummary.riskClassCount.late,
                data.activesSummary.riskClassCount.advanced,
                data.activesSummary.riskClassCount.critical,
                data.activesSummary.riskClassCount.notApplicable,
                data.activesSummary.riskClassCount.unfeasible])
        }
    }

    const setPropsAlumni = (data) => {
        console.log(data)
        if(data){
            setPropsStudents([data.alumniSummary.totalDegreeCount, 
                data.alumniSummary.averageDegreeCount.toFixed(2), 
                data.alumniSummary.averageGpa.toFixed(2),
                data.alumniSummary.minDegreeCount,
                data.alumniSummary.maxDegreeCount,
                data.alumniSummary.maxDegreeCountTerm,
                data.alumniSummary.minDegreeCountTerm])
        }
    }

    const setPropsDelayed = (data) => {
        if(data){
            setPropsStudents([0, 
                data.delayedSummary.averageAttemptedCredits.toFixed(2), 
                data.delayedSummary.averageCost.toFixed(2),
                data.delayedSummary.averageLoad.toFixed(2),
                data.delayedSummary.averagePace.toFixed(2),
                data.delayedSummary.averageRisk.toFixed(2),
                data.delayedSummary.averageSuccessRate.toFixed(2)])
        }
    }

    const setPropsDropout = (data) => {
        if(data){
            setPropsStudents([data.dropoutsSummary.reasons.totalDropouts, 
                data.dropoutsSummary.grossDropoutAlumnusRate.toFixed(2), 
                data.dropoutsSummary.grossDropoutCount,
                data.dropoutsSummary.grossDropoutEnrolledRate.toFixed(2),
                data.dropoutsSummary.netDropoutAlumnusRate.toFixed(2),
                data.dropoutsSummary.netDropoutCount,
                data.dropoutsSummary.netDropoutEnrolledRate.toFixed(2)])
        }
    }


    return(
        <React.Fragment>
            <div className="card-home-area1">
                <div className="card-home-content">
                    <div className="title-card-content">
                        <TitleCardHome title={"DISCENTES"}/>
                    </div>
                    <div className="summary-card-content">
                        <StudentsSummaryCardHome dataStudents={propStudents} data={labels} title={titleStudent}/>
                        <div className='type-students-grid'>
                            <div className='type-students'>
                                <div className={optionStudent === 'actives' ? 'type-student-selected' : 'type-student'}>
                                    <button className="type-button" type="button" onClick={() => {
                                        if(optionStudent !== "actives"){
                                            setOptionStudent("actives");
                                            setTitleStudent("Ativos");
                                            setLabels(labelActives)
                                            setPropsActives(dataStudents)
                                        }
                                    }}>ATIVOS</button>
                                </div>
                                <div className={optionStudent === 'delayed' ? 'type-student-selected' : 'type-student'}>
                                    <button className="type-button" type="button" onClick={() => {
                                        if(optionStudent !== "delayed"){
                                            setOptionStudent("delayed");
                                            setTitleStudent("Retidos");
                                            setLabels(labelDelayed)
                                            setPropsDelayed(dataStudents);
                                        }
                                    }}>RETIDOS</button>
                                </div>
                                <div className={optionStudent === 'dropout' ? 'type-student-selected' : 'type-student'}>
                                    <button className="type-button" type="button" onClick={() => {
                                        if(optionStudent !== "dropout"){
                                            setOptionStudent("dropout");
                                            setTitleStudent("Evadidos");
                                            setLabels(labelDropout);
                                            setPropsDropout(dataStudents);
                                        }
                                    }}>EVADIDOS</button>
                                </div>
                                <div className={optionStudent === 'alumni' ? 'type-student-selected' : 'type-student'}>
                                    <button className="type-button" type="button" onClick={() => {
                                        if(optionStudent !== "alumni"){
                                            setOptionStudent("alumni");
                                            setTitleStudent("Egressos");
                                            setLabels(labelAlumni);
                                            setPropsAlumni(dataStudents);
                                        }
                                    }}>EGRESSOS</button>
                                </div>
                            </div>
                            <div className="students-see-more">
                                <Link to={"/newDesign/statistics/students/" + optionStudent}>
                                    <button type="button">VER MAIS</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="card-img-1">
                            <div className="mask6">
                                <img src={Mask6} alt="mask6"/>
                            </div>
                            <div className="mask5">
                                <img src={Mask5} alt="mask5"/>
                            </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default StudentsCardHome;