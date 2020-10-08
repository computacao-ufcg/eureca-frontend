import React from 'react';

import './styles.css';

//images
import letterM from '../../assets/home_images/letter_m.png';
import letterS from '../../assets/home_images/letter_s.png';
import letterE from '../../assets/home_images/letter_e.png';
import letterC from '../../assets/home_images/letter_c.png';

import LogoThermometer from '../../assets/home_images/thermometer.png';
import LogoBoxplot from '../../assets/home_images/plot.png';
import LogoComunication from '../../assets/home_images/comunication.png';
import LogoServices from '../../assets/home_images/services.png';

//component
import Header from '../../components/General/Header';
import CardHome from '../../components/homeComponents/CardHome';

const Home = () => {
    return (
        <>
            <Header />
            <div className="home-container">
                <main> 
                    <CardHome letter={letterM} logo={LogoThermometer} >Monitoramento</CardHome>
                    <CardHome letter={letterE} logo={LogoBoxplot} to="/statistics" >Estatística</CardHome>
                    <CardHome letter={letterS} logo={LogoServices} to="/services" >Serviços</CardHome>
                    <CardHome letter={letterC} logo={LogoComunication} >Comunicação</CardHome>
                </main>
            </div>
        </>
    );
}

export default Home;