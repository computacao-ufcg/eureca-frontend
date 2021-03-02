import React from 'react';

import { FaRegFrown } from 'react-icons/fa';

import './styles.css';

const NoDataFound = (props) => {

    return(
        <div className="no-data-found">
            <p>{props.msg || "No Data Found"}</p>
            <FaRegFrown></FaRegFrown>
        </div>
    );
}

export default NoDataFound;