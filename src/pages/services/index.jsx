import React from "react";
import { useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import Header from "../../components/Header";
import { SelectPicker } from "rsuite";
import "./style.css";

const ServicesPage = () => {
  const history = useHistory();
  return (
    <React.Fragment>
      <Header />
      <div className='services-main'>
        <div className='services-content'>
          <div className='backdot'>
            <span onClick={() => history.goBack()}>
              <FiArrowLeft size={25} />
            </span>
          </div>
          <div className='all-selects'>
            <div className='service-title'>
              <h1>Pré-matrícula Individual</h1>
            </div>
            <div className='individual-enrollment'>
              <div>
                <p>Período</p>
                <input id='ipt-term' type='text' placeholder='' />
              </div>
              <div>
                <p>Matrícula</p>
                <input id='ipt-registration' type='text' placeholder='' />
              </div>
              <div>
                <p>Número de Créditos</p>
                <input id='ipt-credits' type='text' placeholder='' />
              </div>
              <div>
                <p>Prioridade em Disciplinas Obrigatórias</p>
                <input id='ipt-mandatory-priority' type='text' />
              </div>
              <div>
                <p>Prioridade em Disciplinas Optativas</p>
                <input id='ipt-optional-priority' type='text' />
              </div>
              <div>
                <p>Prioridade em Disciplinas Eletivas</p>
                <input id='ipt-elective-priority' type='text' />
              </div>
            </div>
            <div className='service-title'>
              <h1>Pré-matrícula em Lotes</h1>
            </div>
            <div className='lot-enrollment'>
              <div>
                <p>Período</p>
               <input id='ipt-term' type='text' />
              </div>
              <div>
              <p>Configuração</p>
                <input type='file'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ServicesPage;
