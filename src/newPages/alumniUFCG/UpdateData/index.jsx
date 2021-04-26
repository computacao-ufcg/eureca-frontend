import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import {FiArrowLeft} from 'react-icons/fi';
import { Nav } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';

import Header from '../../../newComponents/Header';

import Employers from './Employers';
import Profiles from './Profiles';

import './styles.css';

const UpdateData = () => {

    const [dataTab, setDataTab] = useState(<Profiles />);
    const [activeNav, setActiveNav] = useState('profiles');

    const history = useHistory();

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
            <div className="backdot"><span onClick={() => history.goBack()} ><FiArrowLeft size={25} /></span></div>
                <h1>Atualizar Dados</h1>
                <main>
                    <div className="alternator-tabs">
                        <Nav onSelect={handleNav} activeKey={activeNav} appearance={'tabs'}>
                            <Nav.Item eventKey={'profiles'}>Perfis</Nav.Item>
                            <Nav.Item eventKey={'employers'}>Empregadores</Nav.Item>
                        </Nav>
                    </div>
                    {dataTab}
                </main>
            </div>
        </div>
    );
}

export default UpdateData;