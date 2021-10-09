import React from "react";
import { SelectPicker } from "rsuite";
import SearchScreen from "../../../../components/SearchScreen";

const StudentSearch = () => {
  return (
    <SearchScreen>
      <div>
        <p>Nome</p>
        <input id='ipt-name' type='text' placeholder='Buscar por nome' />
      </div>
      <div>
        <p>Período de ingresso</p>
        <SelectPicker searchable={true} cleanable={false} style={{width:224}} />
      </div>
      <div>
        <p>CRA</p>
        <SelectPicker searchable={false} cleanable={false} />
      </div>
      <div>
        <p>Status</p>
        <SelectPicker searchable={false} cleanable={false} style={{width:120}}/>
      </div>
      <div className="second-row">
        <div>
          <p>Matrícula</p>
          <SelectPicker searchable={false} cleanable={false} style={{width:150}}/>
        </div>
        <div>
          <p>Sexo</p>
          <SelectPicker searchable={false} cleanable={false} style={{width:100}}/>
        </div>
      </div>
      <div>
        <p>Período de conclusão</p>
        <SelectPicker searchable={false} cleanable={false} style={{width:224}}/>
      </div>
      <div>
        <p>IEA</p>
        <SelectPicker searchable={false} cleanable={false} />
      </div>
      <div>
        <p>Cota</p>
        <SelectPicker searchable={false} cleanable={false} style={{width:120}}/>
      </div>
    </SearchScreen>
  );
};

export default StudentSearch;
