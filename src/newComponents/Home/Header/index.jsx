import React from 'react';

import './style.css'
import LogoHeader from '../../../assets/new_home_assets/logo_547.svg'
import { Link } from 'react-router-dom'

const HeaderHome = () => {

    return(
        <div className={"header-main"}>
            <div>
                <Link to='/'>
                    <img className="" src={LogoHeader} alt="LogoEureca"/>
                </Link>
            </div>
            <div>COORDENADOR</div>
        </div>
    )
}

export default HeaderHome;