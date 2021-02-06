import React from 'react';

import Header from '../../../newComponents/Header';

import './styles.css';

const SeeMore = () => {

    return (
        <React.Fragment>
            <div className ={'main-seemore'}>
                <div className={'header-container'}>
                    <Header />
                </div>
                <div className={'main-content'}>
                    <div className = {'main-container-seemore'}>
    
                        <div className={'container-title-seemore'}>
                            <h1>VER MAIS</h1>
                        </div>
                    </div>
                    
                    
                </div>
                
            </div>
        </React.Fragment>
    );
}

export default SeeMore;