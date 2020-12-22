import React from 'react';

import '../style.css'

import TitleCardHome from '../TitleCardHome';
import SummaryCardHome from '../SummaryCardHome';

import Mask8 from '../../../../assets/new_home_assets/mask_8.svg';

const PostItsCardHome = () => {

    return(
        <React.Fragment>
            <div className={'card-home-area2'}>
                <div className={"card-home-content"}>
                    <div className={"card-img-4"}>
                        <div className={"mask8"}>
                            <img src={Mask8} alt="mask8"/>
                        </div>
                        <div className={"title-card-content"}>
                            <TitleCardHome title={"POST-IT"}/>
                        </div>
                        <div className={"summary-card-content2"}>
                            <SummaryCardHome/>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default PostItsCardHome;