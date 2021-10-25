import React, { useState } from "react";
import { Table } from "rsuite";

const { Column, HeaderCell,Cell} = Table;

const ResultsTable = (props) => {
  const [optionSelected, setOptionSelected] = useState("");

  return (
    <div className='table-email'>
      <Table
        height={480}
        width={750}
        data={""}
        onRowClick={data => {
          console.log(data);
        }}
      >
        <Column width={250} align='center' fixed>
          <HeaderCell>Matrícula</HeaderCell>
          <Cell dataKey="id" />
        </Column>
        <Column width={250} align='center' fixed>
          <HeaderCell>Nome</HeaderCell>
          <Cell dataKey="id" />
        </Column>
        <Column width={250} align='center' fixed>
          <HeaderCell>E-mail</HeaderCell>
          <Cell dataKey="id" />
        </Column>
      </Table>
    </div>
  );
};
export default ResultsTable;
