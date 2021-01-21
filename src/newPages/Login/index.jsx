import React, { useState } from 'react';

import axios from 'axios';

import { useHistory } from 'react-router-dom';

import './style.css';

import LogoGroup from '../../assets/login_assets/group_546.svg';
import LogoAbout from '../../assets/login_assets/group_545.svg';

import api, {EURECA_AS} from '../../services/api';


const Login = () => {

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const history = useHistory();

    const handleLogin = async (e) => {
        e.preventDefault();

        const queryKey = "api/publicKey";

        debugger

        const { data } = await api.get(queryKey);

        if(!!data){
            const queryToken = EURECA_AS + 'api/as/tokens';
            let publicKey = data.publicKey;

            const body = {
                credentials: {
                    username: login,
                    password: password,
                },
                publicKey: publicKey,
            }  

            const { token } = await axios.post(queryToken, body);

            if(!!token){
                localStorage.setItem('eureca-token', token);
                history.push('/home');
            }
        }
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
                        <input className="login-input" type="text" onChange={e => setLogin(e.target.value)} /><br/>

                        <label className="login-label">SENHA</label><br/>
                        <input className="login-input" type="text" onChange={e => setPassword(e.target.value)} /><br/>

                        <div className="login-content-button">
                            <button className="login-button" type="submit" onClick={handleLogin}>ENTRAR</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Login;