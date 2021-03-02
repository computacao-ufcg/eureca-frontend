import React from 'react';

import './style.css'

import { MiniCardHome1 } from '../../MiniCardHome';

const StudentsSummaryCardHome = () => {

    return (
        <div className="students-summary-card-main">
            <div className="students-summary-card-title">
                <div className="students-summary-card-info">
                    <div className="students-summary-card-type">ATIVOS</div>
                    <div className="students-summary-card-age">2012.2 a 2020.1</div>
                    <div className="students-summary-card-size">709</div>
                    <div className="students-summary-card-legend">DISCENTES</div>
                </div>
            </div>
            <div className={"students-summary-card-cards"}>
                <MiniCardHome1 number={"42"} legend={"IDEAL"} />
                <MiniCardHome1 number={"81"} legend={"ESPERADO"} />
                <MiniCardHome1 number={"1"} legend={"ACIMA"} />
                <MiniCardHome1 number={"385"} legend={"ABAIXO"} />
            </div>
        </div>
    )
}

export default StudentsSummaryCardHome;