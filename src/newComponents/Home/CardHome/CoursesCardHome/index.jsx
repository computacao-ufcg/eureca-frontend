import React from 'react';

import '../style.css'

import TitleCardHome from '../TitleCardHome';
import SummaryCardHome from '../SummaryCardHome';

import Mask9 from '../../../../assets/new_home_assets/mask_9.svg';

const CoursesCardHome = () => {

    return(
        <React.Fragment>
            <div className={'card-home-area2'}>
                <div className={"card-home-nude"}>
                    <div className={"title-card-content"}>
                        <TitleCardHome title={"CURSOS"}/>
                    </div>
                    <div className={"summary-card-content"}>
                        <SummaryCardHome/>
                    </div>
                    <div className={"card-img-6"}>
                        <div className={"mask9"}>
                            <img src={Mask9} alt="mask9"/>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default CoursesCardHome;