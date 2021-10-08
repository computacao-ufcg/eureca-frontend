import React from "react";
import { SelectPicker } from "rsuite";
import SearchScreen from "../../../../components/SearchScreen";

const SubjectSearch = () => {
  return (
    <SearchScreen>
      <div>
        <p>Nome</p>
        <input id='ipt-name' type='text' placeholder='Buscar por nome' />
      </div>
      <div>
        <p>Tipo</p>
        <SelectPicker searchable={true} cleanable={false} style={{width:180}} />
      </div>
      <div>
        <p>Uni. acadêmica</p>
        <SelectPicker searchable={false} cleanable={false} />
      </div>
      <div>
        <p>Período</p>
        <SelectPicker searchable={false} cleanable={false} />
      </div>
    </SearchScreen>
  );
};

export default SubjectSearch;
