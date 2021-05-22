import React, { useEffect, useState } from 'react';

import "../style.css";
import TitleCardHome from '../TitleCardHome';
import TeachersSummaryCardHome from './TeachersSummaryCardHome'
import Mask6 from '../../../../assets/new_home_assets/mask_6.svg';
import Mask5 from '../../../../assets/new_home_assets/mask_5.svg';

import { Link } from 'react-router-dom';

import { api_EB } from '../../../../services/api'
import { labelTeachers } from './util'

const TeachersCardHome = () => {

    const [dataTeachers, setDataTeachers] = useState();
    const [optionTeachers, setOptionTeachers] = useState("UASC")
    const [titleTeachers, setTitleTeachers] = useState("UASC")
    const [labels, setLabels] = useState(labelTeachers)
    const [cards, setCards] = useState({ card1: true, card2: true, card3: true, card4: true, card5: true, card6: true, card7: true })

    const [propsTeachers, setPropsTeachers] = useState([])

    useEffect(() => {
        getSummary()
    }, []);

    const getSummary = async () => {
        let query = `api/statistics/teachers/summary`;

        const res = await api_EB.get(query, { headers: { "Authentication-Token": sessionStorage.getItem('eureca-token') } });

        if (res) {
            console.log(res.data)
            setDataTeachers(res.data);
            setPropsTeachersUASC(res.data);

        } else {
            console.log(res.statusText);
        }
    }

    const setPropsTeachersUASC = (data) => {

        setPropsTeachers([data.total + ' docentes',
        data.failedDueToGrade.min.toFixed(1) + '% ' + data.failedDueToGrade.average.toFixed(1) + "% " + data.failedDueToGrade.max.toFixed(1) + "%",
        data.failedDueToAbsences.min.toFixed(1) + '% ' + data.failedDueToAbsences.average.toFixed(1) + "% " + data.failedDueToAbsences.max.toFixed(1) + "%",
        data.failedDueToCanceling.min.toFixed(1) + '% ' + data.failedDueToCanceling.average.toFixed(1) + "% " + data.failedDueToCanceling.max.toFixed(1) + "%",
        data.success.min.toFixed(1) + '% ' + data.success.average.toFixed(1) + "% " + data.success.max.toFixed(1) + "%",
        data.min.count + ' docentes' + '(' + data.min.term + ')',
        data.max.count + ' docentes' + '(' + data.max.term + ')'
        ])
        setCards({ ...cards, card4: true, card5: true, card6: true, card7: true })

    }

    const setPropsTeachersUAMat = (data) => {

        setPropsTeachers([data.total + ' docentes',
        data.failedDueToGrade.min.toFixed(1) + '% ' + data.failedDueToGrade.average.toFixed(1) + "% " + data.failedDueToGrade.max.toFixed(1) + "%",
        data.failedDueToAbsences.min.toFixed(1) + '% ' + data.failedDueToAbsences.average.toFixed(1) + "% " + data.failedDueToAbsences.max.toFixed(1) + "%",
        data.failedDueToCanceling.min.toFixed(1) + '% ' + data.failedDueToCanceling.average.toFixed(1) + "% " + data.failedDueToCanceling.max.toFixed(1) + "%",
        data.success.min.toFixed(1) + '% ' + data.success.average.toFixed(1) + "% " + data.success.max.toFixed(1) + "%",
        data.min.count + ' docentes' + '(' + data.min.term + ')',
        data.max.count + ' docentes' + '(' + data.max.term + ')'
        ])
        setCards({ ...cards, card4: true, card5: true, card6: true, card7: true })

    }

    const setPropsTeachersUAEst = (data) => {

        setPropsTeachers([data.total + ' docentes',
        data.failedDueToGrade.min.toFixed(1) + '% ' + data.failedDueToGrade.average.toFixed(1) + "% " + data.failedDueToGrade.max.toFixed(1) + "%",
        data.failedDueToAbsences.min.toFixed(1) + '% ' + data.failedDueToAbsences.average.toFixed(1) + "% " + data.failedDueToAbsences.max.toFixed(1) + "%",
        data.failedDueToCanceling.min.toFixed(1) + '% ' + data.failedDueToCanceling.average.toFixed(1) + "% " + data.failedDueToCanceling.max.toFixed(1) + "%",
        data.success.min.toFixed(1) + '% ' + data.success.average.toFixed(1) + "% " + data.success.max.toFixed(1) + "%",
        data.min.count + ' docentes' + '(' + data.min.term + ')',
        data.max.count + ' docentes' + '(' + data.max.term + ')'
        ])
        setCards({ ...cards, card4: true, card5: true, card6: true, card7: true })


    }
    const setPropsTeachersUAL = (data) => {

        setPropsTeachers([data.total + ' docentes',
        data.failedDueToGrade.min.toFixed(1) + '% ' + data.failedDueToGrade.average.toFixed(1) + "% " + data.failedDueToGrade.max.toFixed(1) + "%",
        data.failedDueToAbsences.min.toFixed(1) + '% ' + data.failedDueToAbsences.average.toFixed(1) + "% " + data.failedDueToAbsences.max.toFixed(1) + "%",
        data.failedDueToCanceling.min.toFixed(1) + '% ' + data.failedDueToCanceling.average.toFixed(1) + "% " + data.failedDueToCanceling.max.toFixed(1) + "%",
        data.success.min.toFixed(1) + '% ' + data.success.average.toFixed(1) + "% " + data.success.max.toFixed(1) + "%",
        data.min.count + ' docentes' + '(' + data.min.term + ')',
        data.max.count + ' docentes' + '(' + data.max.term + ')'
        ])
        setCards({ ...cards, card4: true, card5: true, card6: true, card7: true })

    }

    return (
        <React.Fragment>
            <div className='card-home-area1'>
                <div className="card-home-content">
                    <div className="title-card-content">
                        <TitleCardHome title={"DOCENTES"} />
                    </div>
                    <div className="summary-card-content">
                        <TeachersSummaryCardHome cards={cards} option={optionTeachers} dataTeachers={propsTeachers} data={labels} title={titleTeachers} />
                        <div className='type-teachers-grid'>
                            <div className='type-teachers'>
                                <div className={optionTeachers === 'UASC' ? 'type-teacher-selected' : 'type-teacher'}>
                                    <button className="type-button" type="button" onClick={() => {
                                        if (optionTeachers !== "UASC") {
                                            setOptionTeachers("UASC");
                                            setTitleTeachers("UASC");
                                            setLabels(labelTeachers)
                                            setPropsTeachersUASC(dataTeachers)
                                        }
                                    }}>UASC</button>
                                </div>
                                <div className={optionTeachers === 'UAMat' ? 'type-teacher-selected' : 'type-teacher'}>
                                    <button className="type-button" type="button" onClick={() => {
                                        if (optionTeachers !== "UAMat") {
                                            setOptionTeachers("UAMat");
                                            setTitleTeachers("UAMat");
                                            setLabels(labelTeachers)
                                            setPropsTeachersUAMat(dataTeachers);
                                        }
                                    }}>UAMat</button>
                                </div>
                                <div className={optionTeachers === 'UAEst' ? 'type-teacher-selected' : 'type-teacher'}>
                                    <button className="type-button" type="button" onClick={() => {
                                        if (optionTeachers !== "UAEst") {
                                            setOptionTeachers("UAEst");
                                            setTitleTeachers("UAEst");
                                            setLabels(labelTeachers);
                                            setPropsTeachersUAEst(dataTeachers);
                                        }
                                    }}>UAEst</button>
                                </div>
                                <div className={optionTeachers === 'UAL' ? 'type-teacher-selected' : 'type-teacher'}>
                                    <button className="type-button" type="button" onClick={() => {
                                        if (optionTeachers !== "UAL") {
                                            setOptionTeachers("UAL");
                                            setTitleTeachers("UAL");
                                            setLabels(labelTeachers);
                                            setPropsTeachersUAL(dataTeachers);
                                        }
                                    }}>UAL</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card-home-content-footer">
                        <Link to={"/"}>
                            <button type="button">VER MAIS</button>
                        </Link>
                        <Link to={"/newDesign/statistics/teachers/glossary"}>
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
    );
};

export default TeachersCardHome;
