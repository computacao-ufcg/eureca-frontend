import React from 'react';

import HeaderHome from '../../newComponents/Home/Header'
import TitleHome from '../../newComponents/Home/Title'
import CardHome from '../../newComponents/Home/CardHome'
import './style.css'

const Home = () => {

    return (
        <React.Fragment>
            <HeaderHome />
            <TitleHome />
            <div className="home-content">
                <div className="home-cards">
                    <CardHome>
                    </CardHome>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Home;