import React from 'react';

import eureca_logo from '../../assets/header/eureca.svg';
import default_avatar from '../../assets/header/default-avatar.png';

import './styles.css';

const Header = () => {

    return(
        <div className="header-container">
            <div className="header-1">
                <div><img src={eureca_logo} alt="eureca logo"/></div>
                <div className="header-1-user">
                    <div>
                       
                    </div>
                    <p>{sessionStorage.getItem('username')}</p>
                </div>
            </div>
            <div className="header-2">
                <p>ciência da computação</p>
            </div>
        </div>
    );
}

export default Header;