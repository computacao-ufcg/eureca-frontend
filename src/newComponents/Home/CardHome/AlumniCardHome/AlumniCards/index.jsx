import React, { useState } from 'react';

import { MiniCardHome1 } from '../../MiniCardHome'
import './style.css'

const AlumniCards = (props) => {
    console.log(props.data)
    const data = props.data

    return (
        <React.Fragment>{data?
            <div className="alumni-summary-card-main">
                <div className="alumni-summary-card-title">
                    <div className="alumni-summary-card-info">
                        <div className="alumni-summary-card-size">{data.numberAlumniCourse}</div>
                        <div className="alumni-summary-card-legend">EGRESSOS</div>
                    </div>
                </div>
                <div className="alumni-summary-card-cards">
                    <MiniCardHome1 number={data.numberAcademyEmployedCourse} legend={"NA ACADEMIA"} />
                    <MiniCardHome1 number={data.numberGovernmentEmployedCourse} legend={"NO GOVERNO"} />
                    <MiniCardHome1 number={data.numberIndustryEmployedLevel} legend={"NA INDÚSTRIA"} />
                    <MiniCardHome1 number={data.numberPrivateCompanyEmployedCourse} legend={"EM EMP. PRIVADA"} />
                    <MiniCardHome1 number={data.numberPublicCompanyEmployedCourse} legend={"EM EMP. PÚBLICA"} />
                    <MiniCardHome1 number={data.numberMixedCompanyEmployedCourse} legend={"EM EMP. MISTA"} />
                    <MiniCardHome1 number={data.numberOngEmployedCourse} legend={"EM ONGS"} />
                    <MiniCardHome1 number={data.numberMappedAlumniCourse} legend={"CADASTRADOS"} />
                </div>
            </div>
            :null}
        </React.Fragment>

    )
}

export default AlumniCards;