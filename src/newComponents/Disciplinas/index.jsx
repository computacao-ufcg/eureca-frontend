import React from 'react';

import './styles.css';

const Disciplina = (props) => {

    return(

        <div className="box">
            <p>{props.nome}</p>
            <div className="numero">
                <p>50</p>
            </div>
        </div>


    );
}

export default Disciplina;