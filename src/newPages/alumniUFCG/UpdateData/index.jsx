import React, { useState } from 'react';

import { Nav } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';

import Header from '../../../newComponents/Header';

import Employers from './Employers';
import Profiles from './Profiles';

import './styles.css';

const UpdateData = () => {

    const [dataTab, setDataTab] = useState(<Profiles />);
    const [activeNav, setActiveNav] = useState('profiles');

    const handleNav = (eventKey) => {
        if (eventKey === 'profiles') {
            setDataTab(<Profiles />);
        } else if (eventKey === 'employers') {
            setDataTab(<Employers />);
        }
        setActiveNav(eventKey);
    }

    return (
        <div className="main-container">
            <Header />
            <div className="main-container-body">
                <h1>Atualizar Dados</h1>
                <main>
                    <div className="alternator-tabs">
                        <Nav onSelect={handleNav} activeKey={activeNav} appearance={'tabs'}>
                            <Nav.Item eventKey={'profiles'}>Perfis</Nav.Item>
                            <Nav.Item eventKey={'employers'}>Empregadores</Nav.Item>
                        </Nav>
                    </div>
                    {dataTab}

                    {/* <div className="alternator-tabs">
                        <button>Perfis</button>
                        <button>Empregadores</button>
                    </div>

                    <section className="alternator-content">
                        <Profiles />
                        {/* <Employers /> */}
                    {/* </section>  */}
                </main>
            </div>
        </div>
    );
}

export default UpdateData;