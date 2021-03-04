import React from 'react';

import { CSVLink } from "react-csv";

import './style.css'

const Export = (props) => {

    return (
        <>
            <div className="mainExport">
                <CSVLink data={props.data} filename={props.name + '.csv'}>
                    <div className="exportButton" >
                        Export CSV
                    </div>
                </CSVLink>
                
            </div> 
        </>
    )
}

export default Export;