import React from "react";
import { SelectPicker } from "rsuite";
import SearchScreen from "../../../components/SearchScreen";
import { admissionTerm, craOperation, status, gender, cotas, risco, custo } from "../util";

const StudentSearch = (props) => {
  return (
    <SearchScreen title={"Discentes"}>
      <div>
        <p>Nome</p>
        <input id='ipt-name' type='text' placeholder='Buscar por nome' value={props.name} onChange={props.handleName}/>
      </div>
      <div>
        <p>Período de ingresso</p>
        <SelectPicker
          defaultValue={"todos"}
          data={admissionTerm}
          searchable={true}
          cleanable={false}
          style={{ width: 224 }}
        />
      </div>
      <div>
        <p>CRA</p>
        <SelectPicker defaultValue={"todos"} data={craOperation} searchable={false} cleanable={false} />
      </div>
      <div>
        <p>Status</p>
        <SelectPicker
          defaultValue={"todos"}
          data={status}
          searchable={false}
          cleanable={false}
          style={{ width: 120 }}
        />
      </div>
      <div className='second-row'>
        <div>
          <p>Sexo</p>
          <SelectPicker
            defaultValue={"todos"}
            data={gender}
            searchable={false}
            cleanable={false}
            style={{ width: 100 }}
          />
        </div>
      </div>
      <div>
        <p>Período de conclusão</p>
        <SelectPicker
          defaultValue={"todos"}
          data={admissionTerm}
          searchable={false}
          cleanable={false}
          style={{ width: 224 }}
        />
      </div>
      <div>
        <input className='ipt-cra-value' type='text' placeholder='CRA' />
      </div>
      <div>
        <p>Cota</p>
        <SelectPicker defaultValue={"todas"} data={cotas} searchable={false} cleanable={false} style={{ width: 120 }} />
      </div>
      <div>
        <p>Risco</p>
        <SelectPicker defaultValue={"todos"} data={risco} searchable={false} cleanable={false} style={{ width: 120 }} />
      </div>
      <div>
        <p>Custo</p>
        <SelectPicker defaultValue={"todos"} data={custo} searchable={false} cleanable={false} style={{ width: 120 }} />
      </div>
    </SearchScreen>
  );
};

export default StudentSearch;
