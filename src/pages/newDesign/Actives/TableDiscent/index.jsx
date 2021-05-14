import React, { useEffect, useState } from "react";

import { msgModal } from "../activeUtil";

import "./styles.css";

const TableActives = ({ enrollment, dataActives }) => {
  const [discent, setDiscent] = useState(msgModal);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    console.log(enrollment);
    console.log(dataActives);

    dataActives.forEach(e => {
      if (e.matricula === enrollment) {
        setDiscent(e);
      }
    });

    setLoading(false);
  }, []);

  return loading ? (
    <div>carregando</div>
  ) : discent === msgModal ? (
    discent
  ) : (
    <table>
      <thead>
        <tr>
          <th>nome</th>
          <th>matrícula</th>
          <th>período de ingresso</th>
          <th>períodos integralizados</th>
          <th>porcentagem concluída</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className='capitalize'>joão</td>
          <td>{discent.matricula}</td>
          <td>{discent.periodo_ingresso}</td>
          <td>{discent.periodos_integralizados}</td>
          <td>{discent.porcentagem_concluida}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableActives;
