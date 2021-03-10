import React from 'react';

import '../style.css';

import TitleCardHome from '../TitleCardHome';
import SummaryCardHome from '../SummaryCardHome';

import Mask4 from '../../../../assets/new_home_assets/mask_4.svg';

const EnrollmentsCardHome = () => {

    return(
        <React.Fragment>
            <div className={'card-home-area1'}>
                <div className={"card-home-content"}>
                    <div className={"title-card-content"}>
                        <TitleCardHome title={"MATRÍCULAS"}/>
                    </div>
                    <div className={"summary-card-content"}>
                        <SummaryCardHome/>
                    </div>
                    <div className={"card-img-3"}>
                        <div className={"mask4"}>
                            <img src={Mask4} alt="mask4"/>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default EnrollmentsCardHome;