import React from 'react';

import { CSVLink } from "react-csv";

import { headersCSV } from '../../../pages/Statistics/Discentes/DiscentesAtivos/utilAtivos';

import './style.css'

const Export = (props) => {

    return (
        <>
            <div className="mainExport">
                <CSVLink data={props.data} headers={ props.name === 'ativos' ? headersCSV : null } filename={props.name + '.csv'}>
                    <div className="exportButton" >
                        Export CSV
                    </div>
                </CSVLink>
                
            </div> 
        </>
    )
}

export default Export;