import React from 'react';

import { FaHandPointLeft } from 'react-icons/fa';

import './styles.css';

const Informer = (props)=>{

    return(
        <div className="informer-container">
            <FaHandPointLeft />
            <p>{props.msg || "Please, select a option."}</p>
        </div>
    );
}

export default Informer;