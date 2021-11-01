import React, { useState } from "react";
import { Table } from "rsuite";

const { Column, HeaderCell,Cell} = Table;

const ResultsTable = (props) => {
  console.log(props)
  const data = props.listData;

  function handleData(data){
    const keys = Object.keys(data);
    const result = [];

    keys.forEach(element => {
      const student = {registration:element,name:data[element].name,email:data[element].email}
      result.push(student)
    });

    return result;
    
  }
  const students = handleData(data);

  return (
    <div className='table-email'>
      <Table
        height={480}
        width={750}
        data={students}
        onRowClick={data => {
          console.log(data);
        }}
      >
        <Column width={250} align='center' fixed>
          <HeaderCell>Matrícula</HeaderCell>
          <Cell dataKey="registration" />
        </Column>
        <Column width={250} align='center' fixed>
          <HeaderCell>Nome</HeaderCell>
          <Cell dataKey='name' />
        </Column>
        <Column width={250} align='center' fixed>
          <HeaderCell>E-mail</HeaderCell>
          <Cell dataKey='email' />
        </Column>
      </Table>
    </div>
  );
};
export default ResultsTable;
