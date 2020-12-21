import React from 'react';

import './style.css'
import LogoHeader from '../../../assets/new_home_assets/logo_547.svg'

const HeaderHome = () => {

    return(
        <div className={"header-main"}>
            <div>
                <img className="" src={LogoHeader} alt="LogoEureca"/>
            </div>
            <div>COORDENADOR</div>
        </div>
    )
}

export default HeaderHome;