import React from 'react';

import { CSVLink } from "react-csv";

import './style.css'

const ExportStatistics = (props) => {
    let dataExport = props.data.periodos ? props.data.periodos : props.data
    return (
        <div className={'mainExport'}>
            <CSVLink data={props.data ? dataExport : []} filename={"data.csv"}>
                <div className={'exportButton'}>
                    Export CSV
                </div>
            </CSVLink>
        </div>
    )
}

export default ExportStatistics;