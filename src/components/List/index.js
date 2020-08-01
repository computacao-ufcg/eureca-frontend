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
            <button id="Cor" onClick={getName}>Cor</button>
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
            <button id="Discente" onClick={getName}>Discente</button>
          </li>
          <li>
            <button id="DiscenteDeficiencia" onClick={getName}>DiscenteDeficiencia</button>
          </li>
          <li>
            <button id="DiscenteDisciplina" onClick={getName}>DiscenteDisciplina</button>
          </li>
          <li>
            <button id="DiscenteVinculo" onClick={getName}>DiscenteVinculo</button>
          </li>
          <li>
            <button id="Disciplina" onClick={getName}>Disciplina</button>
          </li>
          <li>
            <button id="Escola" onClick={getName}>Escola</button>
          </li>
          <li>
            <button id="EstadoCivil" onClick={getName}>EstadoCivil</button>
          </li>
          <li>
            <button id="Falta" onClick={getName}>Falta</button>
          </li>
          <li>
            <button id="Genero" onClick={getName}>Genero</button>
          </li>
          <li>
            <button id="Horario" onClick={getName}>Horario</button>
          </li>
          <li>
            <button id="Ingresso" onClick={getName}>Ingresso</button>
          </li>
          <li>
            <button id="Nacionalidade" onClick={getName}>Nacionalidade</button>
          </li>
          <li>
            <button id="Naturalidade" onClick={getName}>Naturalidade</button>
          </li>
          <li>
            <button id="Pais" onClick={getName}>Pais</button>
          </li>
          <li>
            <button id="Professor" onClick={getName}>Professor</button>
          </li>
          <li>
            <button id="Sala" onClick={getName}>Sala</button>
          </li>
          <li>
            <button id="SituacaoDiscente" onClick={getName}>SituacaoDiscente</button>
          </li>
          <li>
            <button id="SituacaoDisciplina" onClick={getName}>SituacaoDisciplina</button>
          </li>
          <li>
            <button id="SituacaoVinculo" onClick={getName}>SituacaoVinculo</button>
          </li>
          <li>
            <button id="Turma" onClick={getName}>Turma</button>
          </li>
          <li>
            <button id="TurmaProfessor" onClick={getName}>TurmaProfessor</button>
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