import React from 'react';

import './styles.css';

const Legenda = (props) =>{

    return(
        <div className="legenda">
            <h5>Legenda</h5>
            <ul>
                <li>
                    <svg viewBox="0 0 32 32" version="1.1">
                        <path fill="purple" transform="translate(16, 16)" d="M16,0A16,16,0,1,1,-16,0A16,16,0,1,1,16,0"></path>
                    </svg>
                    <span>Acima do esperado</span>
                </li>
                <li>
                    <svg viewBox="0 0 32 32" version="1.1">
                        <path fill="blue" transform="translate(16, 16)" d="M16,0A16,16,0,1,1,-16,0A16,16,0,1,1,16,0"></path>
                    </svg>
                    <span>Ideal</span>
                </li>
                <li>
                    <svg viewBox="0 0 32 32" version="1.1">
                        <path fill="green" transform="translate(16, 16)" d="M16,0A16,16,0,1,1,-16,0A16,16,0,1,1,16,0"></path>
                    </svg>
                    <span>Dentro do esperado</span>
                </li>
                <li>
                    <svg viewBox="0 0 32 32" version="1.1">
                        <path fill="Red" transform="translate(16, 16)" d="M16,0A16,16,0,1,1,-16,0A16,16,0,1,1,16,0"></path>
                    </svg>
                    <span>Abaixo do esperado</span>
                </li>
            </ul>
        </div>
    );
}

export default Legenda;