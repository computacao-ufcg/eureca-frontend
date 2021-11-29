import React from "react";
import { Table } from "rsuite";

const { Column, HeaderCell,Cell} = Table;

const EnrollmentTable = (props) => {
  const data = props.listData;
  console.log(data)

  function handleData(data){
    const keys = Object.keys(data);
    const result = [];

    keys.forEach(element => {
      const student = {subjectId:element,name:data[element].subjectName,
        schedule:data[element].schedule.schedule[0].weekDay + " (" + data[element].schedule.schedule[0].startHour +"-"+data[element].schedule.schedule[0].endHour+") - \n" +
        data[element].schedule.schedule[1].weekDay + " (" + data[element].schedule.schedule[1].startHour +"-"+data[element].schedule.schedule[1].endHour+")"}
      result.push(student)
    });

    return result;
    
  }
  const students = handleData(data);

  return (
    <div className='table-email'>
      <Table
        height={450}
        width={900}
        data={students}
        onRowClick={data => {
          console.log(data);
        }}
      >
        <Column width={250} align='center' fixed>
          <HeaderCell>Cód. Disciplina</HeaderCell>
          <Cell dataKey="subjectId" />
        </Column>
        <Column width={250} align='center' fixed>
          <HeaderCell>Disciplina</HeaderCell>
          <Cell dataKey='name' />
        </Column>
        <Column width={400} align='center' fixed>
          <HeaderCell>Horários</HeaderCell>
          <Cell dataKey='schedule' />
        </Column>
      </Table>
    </div>
  );
};
export default EnrollmentTable;
