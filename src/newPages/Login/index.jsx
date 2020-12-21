import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';

import './style.css';

import LogoGroup from '../../assets/login_assets/group_546.svg';
import LogoAbout from '../../assets/login_assets/group_545.svg';


const Login = () => {

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const history = useHistory();

    const handleLogin = (e) => {
        e.preventDefault();

        history.push('/home');
    }

    return (
        <div className="container-login">
            <div className="login-1-2">
                <div className="login-part-1-upsize">
                    <div className="login-part-1-content">
                        <div className="login-about-1">
                            <img className="login-logo-about" src={LogoAbout} alt="Logo Eureca + Nome" />
                            <p className="title-about">SOBRE</p>
                        </div>
                        <div className="login-about-2">
                            <div className="login-about-text">
                                <p>O eureca é uma plataforma onde coordenadores e outros....</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="login-2-2">
                <div className="login-part-2-upsize">
                    <img src={LogoGroup} alt="Logo Eureca + Nome" />
                </div>
                <div className="login-part-2-downsize">
                    <div className="login-form">

                        <label className="login-label">LOGIN</label><br/>
                        <input className="login-input" type="text" name="" id="" /><br/>

                        <label className="login-label">SENHA</label><br/>
                        <input className="login-input" type="text" name="" id="" /><br/>

                        <div className="login-content-button">
                            <button className="login-button" type="submit">ENTRAR</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Login;