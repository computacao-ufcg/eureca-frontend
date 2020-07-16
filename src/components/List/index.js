import React, { useState } from 'react';

import './styles.css';

import TablePanel from '../TablePanel';

const List = () => {

  const [name, setName] = useState('');

  function getName(event) {
    setName(event.target.id);
  }

  return (
    <div className="container-body">
      <div className="container-list">
        <h2 className="title-list">Tabelas</h2>
        <ul className="list">
          <li>
            <button id="Aluno" onClick={getName}>Aluno</button>
          </li>
          <li>
            <button id="AlunoDeficiencia" onClick={getName}>AlunoDeficiencia</button>
          </li>
          <li>
            <button id="AlunoVinculo" onClick={getName}>AlunoVinculo</button>
          </li>
          <li>
            <button id="Cota" onClick={getName}>Cota</button>
          </li>
          <li>
            <button id="Curso" onClick={getName}>Curso</button>
          </li>
          <li>
            <button id="Deficiencia" onClick={getName}>Deficiencia</button>
          </li>
          <li>
            <button id="Escola" onClick={getName}>Escola</button>
          </li>
          <li>
            <button id="EstadoCivil" onClick={getName}>EstadoCivil</button>
          </li>
          <li>
            <button id="Genero" onClick={getName}>Genero</button>
          </li>
          <li>
            <button id="Ingresso" onClick={getName}>Ingresso</button>
          </li>
          <li>
            <button id="Municipio" onClick={getName}>Municipio</button>
          </li>
          <li>
            <button id="Nacionalidade" onClick={getName}>Nacionalidade</button>
          </li>
          <li>
            <button id="PaisOrigem" onClick={getName}>PaisOrigem</button>
          </li>
          <li>
            <button id="Raca" onClick={getName}>Raca</button>
          </li>
          <li>
            <button id="SituacaoAluno" onClick={getName}>SituacaoAluno</button>
          </li>
          <li>
            <button id="SituacaoVinculo" onClick={getName}>SituacaoVinculo</button>
          </li>
        </ul>
      </div>
      <div className="container-panel">
        <TablePanel tableName={ name } />
      </div>
    </div>
  )
}

export default List;