import React, { useState, useEffect } from 'react';

import { useHistory } from 'react-router-dom';

import './style.css';

import LogoGroup from '../../assets/login_assets/group_546.svg';
import LogoAbout from '../../assets/login_assets/group_545.svg';

import { api_EB, api_EAS } from '../../services/api';

const Login = () => {

    const text = "Eureca é uma plataforma de apoio à gestão acadêmica que visa auxiliar as coordenações de cursos de graduação da UFCG em suas diversas atividades. A plataforma disponibiliza variadas informações sobre os discentes dos cursos, bem como oferece um leque de serviços de apoio às coordenações.";

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const history = useHistory();

    useEffect(() => {
        const listener = event => {
            if (event.code === "Enter" || event.code === "NumpadEnter") {
                console.log(login, password)
                handleLogin(event)
            }
        };
        document.addEventListener("keydown", listener);
        return () => {
            document.removeEventListener("keydown", listener);
        };
    }, [login, password]);

    const handleLogin = async (e) => {
        e.preventDefault();

        const queryKey = "api/publicKey";

        const { data } = await api_EB.get(queryKey);

        if (!!data) {
            const queryToken = 'as/tokens';
            const publicKey = data.publicKey;

            const body = {
                credentials: {
                    username: login,
                    password: password,
                },
                publicKey: publicKey,
            }

            try {
                const res_as = await api_EAS.post(queryToken, body);

                if (!!res_as.data.token) {
                    sessionStorage.setItem('eureca-token', res_as.data.token);
                    sessionStorage.setItem('username', login);
                    history.push('/');
                }
            } catch (error) {
                alert("Erro: Nome de usuário ou senha incorretos.");
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
                            <p>{text}</p>
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

                        <label className="login-label">LOGIN</label><br />
                        <input className="login-input" type="text" onChange={e => setLogin(e.target.value.trim())} /><br />

                        <label className="login-label">SENHA</label><br />
                        <input className="login-input" type="password" onChange={e => setPassword(e.target.value)} /><br />

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