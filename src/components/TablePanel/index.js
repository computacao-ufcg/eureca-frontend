import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import './styles.css';

const TablePanel = (props) => {
  const tableName = props.tableName;
  const [data, setData] = useState([]);
  const [keysTable, setKeysTable] = useState([]);

  useEffect(() => {
    api.get('/alunos', {
      headers: {
        table_name: tableName
      }
    }).then(response => {
      setData(response.data);
    })
    if(data[0]) {
      setKeysTable(Object.keys(data[0]));
    }
  }, [data, tableName]);

  function checkFields(object, index) {
    if (tableName === 'Aluno') {
      return (
        <>
          <td key={index+1}>{ object.cpf }</td>
          <td key={index+2}>{ object.nome }</td>
          <td key={index+3}>{ object.id_situacao }</td>
          <td key={index+4}>{ object.semestre_situacao }</td>
          <td key={index+5}>{ object.id_ingresso }</td>
          <td key={index+6}>{ object.semestre_ingresso }</td>
          <td key={index+7}>{ object.ano_nascimento }</td>
          <td key={index+8}>{ object.id_cota }</td>
          <td key={index+9}>{ object.id_tipo_escola }</td>
          <td key={index+10}>{ object.ano_conclusao_ensino_medio }</td>
          <td key={index+11}>{ object.email }</td>
          <td key={index+12}>{ object.id_genero }</td>
          <td key={index+13}>{ object.id_estado_civil }</td>
          <td key={index+14}>{ object.id_nacionalidade }</td>
          <td key={index+15}>{ object.id_pais_origem }</td>
          <td key={index+16}>{ object.id_naturalidade }</td>
          <td key={index+17}>{ object.id_raca }</td>
        </>
      )
    } 
    else if (tableName === 'AlunoDeficiencia') {
      return (
        <>
          <td key={index+1}>{ object.cpf_aluno }</td>
          <td key={index+2}>{ object.codigo_deficiencia }</td>
        </>
      )
    }
    else if (tableName === 'AlunoVinculo') {
      return (
        <>
          <td key={index+1}>{ object.cpf }</td>
          <td key={index+2}>{ object.matricula_vinculo }</td>
          <td key={index+3}>{ object.id_curso }</td>
          <td key={index+4}>{ object.id_situacao_vinculo }</td>
          <td key={index+5}>{ object.periodo_evasao }</td>
        </>
      )
    }
    else if (tableName === 'Cota') {
      return (
        <>
          <td key={index+1}>{ object.id }</td>
          <td key={index+2}>{ object.descricao_cota }</td>
        </>
      )
    }
    else if (tableName === 'Curso') {
      return (
        <>
          <td key={index+1}>{ object.id }</td>
          <td key={index+2}>{ object.nome_curso }</td>
        </>
      )
    } 
    else if (tableName === 'Deficiencia') {
      return (
        <>
          <td key={index+1}>{ object.codigo_deficiencia }</td>
          <td key={index+2}>{ object.descricao_deficiencia }</td>
        </>
      )
    }
    else if (tableName === 'Escola') {
      return (
        <>
          <td key={index+1}>{ object.id }</td>
          <td key={index+2}>{ object.tipo_escola }</td>
        </>
      )
    }
    else if (tableName === 'EstadoCivil') {
      return (
        <>
          <td key={index+1}>{ object.id }</td>
          <td key={index+2}>{ object.estado_civil }</td>
        </>
      )
    }
    else if (tableName === 'Genero') {
      return (
        <>
          <td key={index+1}>{ object.id }</td>
          <td key={index+2}>{ object.genero }</td>
        </>
      )
    }
    else if (tableName === 'Ingresso') {
      return (
        <>
          <td key={index+1}>{ object.id }</td>
          <td key={index+2}>{ object.descricao_ingresso }</td>
        </>
      )
    }
    else if (tableName === 'Municipio') {
      return (
        <>
          <td key={index+1}>{ object.id }</td>
          <td key={index+2}>{ object.municipio }</td>
          <td key={index+1}>{ object.estado }</td>
        </>
      )
    }
    else if (tableName === 'Nacionalidade') {
      return (
        <>
          <td key={index+1}>{ object.id }</td>
          <td key={index+2}>{ object.nacionalidade }</td>
        </>
      )
    }
    else if (tableName === 'PaisOrigem') {
      return (
        <>
          <td key={index+1}>{ object.id }</td>
          <td key={index+2}>{ object.país_origem }</td>
        </>
      )
    }
    else if (tableName === 'Raca') {
      return (
        <>
          <td key={index+1}>{ object.id }</td>
          <td key={index+2}>{ object.raça }</td>
        </>
      )
    }
    else if (tableName === 'SituacaoAluno') {
      return (
        <>
          <td key={index+1}>{ object.id }</td>
          <td key={index+2}>{ object.descricao_situacao }</td>
        </>
      )
    }
    else if (tableName === 'SituacaoVinculo') {
      return (
        <>
          <td key={index+1}>{ object.id }</td>
          <td key={index+2}>{ object.descricao_situacao }</td>
        </>
      )
    }
  }

  return (
    <div className="container-tablepanel">
      <h2 className="title-panel">{ tableName }</h2>
      <table>
        <thead>
          <tr>
            { keysTable.map((key, index) => (
              <th key={index}>{ key }</th>
            )) }
          </tr>
        </thead>
        <tbody>
          { data.map((object, index) => ( 
            <tr>
              {
                checkFields(object, index)
              }
            </tr>
          )) }
        </tbody>
      </table>
    </div>
  )
}

export default TablePanel;