import React from 'react';

import { MiniCardHome1 } from '../../MiniCardHome'
import './style.css'

const AlumniCards = (props) => {
    const data = props.data
    return (
        <React.Fragment>{data?
            <div className="alumni-summary-card-main">
                <div className="alumni-summary-card-title">
                    <div className="alumni-summary-card-info">
                        <div className="alumni-summary-card-size">{data.numberAlumniCourse || 0}</div>
                        <div className="alumni-summary-card-legend">EGRESSOS</div>
                    </div>
                </div>
                <div className="alumni-summary-card-cards">
                    <MiniCardHome1 number={data.numberAcademyEmployedCourse || 0} legend={"NA ACADEMIA"} />
                    <MiniCardHome1 number={data.numberGovernmentEmployedCourse || 0} legend={"NO GOVERNO"} />
                    <MiniCardHome1 number={data.numberIndustryEmployedLevel || 0} legend={"NA INDÚSTRIA"} />
                    <MiniCardHome1 number={data.numberPrivateCompanyEmployedCourse || 0} legend={"EM EMP. PRIVADA"} />
                    <MiniCardHome1 number={data.numberPublicCompanyEmployedCourse || 0} legend={"EM EMP. PÚBLICA"} />
                    <MiniCardHome1 number={data.numberMixedCompanyEmployedCourse || 0} legend={"EM EMP. MISTA"} />
                    <MiniCardHome1 number={data.numberOngEmployedCourse || 0} legend={"EM ONGS"} />
                    <MiniCardHome1 number={data.numberMatchedAlumniCourse || 0} legend={"CADASTRADOS"} />
                </div>
            </div>
            :null}
        </React.Fragment>
    )
}

export default AlumniCards;