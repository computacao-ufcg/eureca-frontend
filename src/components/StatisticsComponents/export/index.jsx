import React from 'react';

import { CSVLink } from "react-csv";

import './style.css'

const ExportStatistics = (props) => {
    return (
        <div className={'mainExport'}>
            <CSVLink data={props.data} filename={"data.csv"}>
                <div className={'exportButton'}>
                    Export CSV
                </div>
            </CSVLink>
        </div>
    )
}

export default ExportStatistics;