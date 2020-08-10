import React from 'react';

import { CSVLink } from "react-csv";

import './style.css'

const ExportStatistics = (props) => {
    const headers = [
        { label: "Período", key: "periodo" },
        { label: "CRA", key: "cra" },
        { label: "Egressos", key: "egressos" }
    ];
    return (
        <div className={'mainExport'}>
            <CSVLink data={props.data} headers={headers} filename={"data.csv"}>
                <div className={'exportButton'}>
                    Export CSV
                </div>
            </CSVLink>
        </div>
    )
}

export default ExportStatistics;