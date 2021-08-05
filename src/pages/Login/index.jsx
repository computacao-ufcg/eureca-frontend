import React, { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";

import "./style.css";

import LogoGroup from "../../assets/login_assets/group_546.svg";
import LogoAbout from "../../assets/login_assets/group_545.svg";

import { api_EB, api_EAS, api_AB } from "../../services/api";
import { Alert } from "rsuite";

const Login = () => {
  const text =
    "Eureca é uma plataforma de apoio à gestão acadêmica que visa auxiliar as coordenações de cursos de graduação da UFCG em suas diversas atividades. A plataforma disponibiliza variadas informações sobre os discentes dos cursos, bem como oferece um leque de serviços de apoio às coordenações.";

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  useEffect(() => {
    const listener = event => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        handleLogin(event);
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [login, password]);

  const getCredentialsBody = (username, password, publicKey) => {
    return {
      credentials: {
        username,
        password,
      },
      publicKey,
    };
  };

  const handleLogin = async e => {
    e.preventDefault();

    const queryKey = "/publicKey";

    const res_EB = await api_EB.get(queryKey);
    const res_AS = await api_AB.get(queryKey);

    if (!!res_EB && !!res_AS) {
      const queryToken = "/tokens";
      const EBpublicKey = res_EB.data.publicKey;
      const ALpublicKey = res_AS.data.publicKey;

      const EBbody = getCredentialsBody(login, password, EBpublicKey);
      const ASbody = getCredentialsBody(login, password, ALpublicKey);

      try {
        const res_as_EB = await api_EAS.post(queryToken, EBbody);
        const res_as_AL = await api_EAS.post(queryToken, ASbody);

        if (!!res_as_EB.data.token && !!res_as_AL.data.token) {
          sessionStorage.setItem("eureca-token", res_as_EB.data.token);
          sessionStorage.setItem("alumni-token", res_as_AL.data.token);
          sessionStorage.setItem("username", login);
          history.push("/home");
        }
      } catch (error) {
        Alert.error("Erro: Nome de usuário ou senha incorretos.");
      }
    }
  };

  return (
    <div className='container-login'>
      <div className='login-1-2'>
        <div className='login-part-1-upsize'>
          <div className='login-part-1-content'>
            <div className='login-about-1'>
              <img className='login-logo-about' src={LogoAbout} alt='Logo Eureca + Nome' />
              <p className='title-about'>SOBRE</p>
            </div>
            <div className='login-about-2'>
              <p>{text}</p>
            </div>
          </div>
        </div>
      </div>
      <div className='login-2-2'>
        <div className='login-part-2-upsize'>
          <img src={LogoGroup} alt='Logo Eureca + Nome' />
        </div>
        <div className='login-part-2-downsize'>
          <div className='login-form'>
            <label className='login-label'>LOGIN</label>
            <br />
            <input className='login-input' type='text' onChange={e => setLogin(e.target.value.trim())} />
            <br />

            <label className='login-label'>SENHA</label>
            <br />
            <input className='login-input' type='password' onChange={e => setPassword(e.target.value)} />
            <br />

            <div className='login-content-button'>
              <button className='login-button' type='submit' onClick={handleLogin}>
                ENTRAR
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
