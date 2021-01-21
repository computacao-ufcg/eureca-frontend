import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';

import './styles.css';

import LogoGroup from '../../assets/login_assets/group_546.svg';
import api from '../../services/api';

const Login = () => {

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const history = useHistory();

    const handleLogin = async (e) => {
        e.preventDefault();

        const query = "api/publicKey";

        const res = await api.get(query);

        debugger


        history.push('/home');
    }

    return (
        <div className="container-login">
            <div className="login-1-2">
                <div>
                    <p className="title-about">sobre</p>
                    <p>O eureca é uma plataforma onde coordenadores e outros....</p>
                </div>
            </div>
            <div className="login-2-2">
                <div className="logo-group">
                    <img src={LogoGroup} alt="Logo Eureca + Nome" />
                </div>
                <div className="login-form">
                    <form onSubmit={handleLogin}>

                        <label>Login</label>
                        <input type="text" name="" id="" />

                        <label>Senha</label>
                        <input type="text" name="" id="" />

                        <button type="submit">entrar</button>
                    </form>
                </div>

            </div>
        </div>
    );
}

export default Login;