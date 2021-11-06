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
            <div className='selects-individual-enrollment'>
              <div>
                <p>Período</p>
                <input id='ipt-name' type='text' placeholder='' />
              </div>
              <div>
                <p>Matrícula</p>
                <SelectPicker data={0} searchable={true} cleanable={false} style={{ width: 224 }} />
              </div>
              <div>
                <p>Número de Créditos</p>
                <SelectPicker data={0} searchable={false} cleanable={false} style={{ width: 120 }} />
              </div>
              <div>
                <p>Prioridade em Disciplinas Obrigatórias</p>
                <SelectPicker data={0} searchable={false} cleanable={false} style={{ width: 150 }} />
              </div>
              <div>
                <p>Prioridade em Disciplinas Optativas</p>
                <SelectPicker data={0} searchable={false} cleanable={false} style={{ width: 150 }} />
              </div>
              <div>
                <p>Prioridade em Disciplinas Eletivas</p>
                <SelectPicker data={0} searchable={false} cleanable={false} style={{ width: 150 }} />
              </div>
            </div>
            <div className='service-title'>
              <h1>Pré-matrícula em Lotes</h1>
            </div>
            <div className='selects-lot-enrollment'>
              <div>
                <p>Períodos</p>
                <SelectPicker data={0} searchable={false} cleanable={false} style={{ width: 150 }} />
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
