import React from 'react';

import Header from '../../../newComponents/Header';

import Employers from './Employers';
import Profiles from './Profiles';

import './styles.css';

const UpdateData = () => {

    return (
        <div className="main-container">
            <Header />
            <div className="main-container-body">
                <h1>Atualizar Dados</h1>
                <main>
                    <div className="alternator-tabs">
                        <button>Perfis</button>
                        <button>Empregadores</button>
                    </div>
                    
                    <section className="alternator-content">
                        <Profiles />
                    </section>
                </main>
            </div>
        </div>
    );
}

export default UpdateData;