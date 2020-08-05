import React from 'react';

import { Link , } from 'react-router-dom';

import './styles.css';

const CardHome = (props) => {   
    const toLink = props.to? props.to : "/";

    return (
        <Link className="card" to={toLink}>
            <img src={props.letter} alt="letra" />
            <div className="info">
                <img src={props.logo} alt="logo" />
                <h1>{props.children}</h1>
            </div>
        </Link>
    );
}

export default CardHome;