import React from "react";
import { SelectPicker } from "rsuite";
import SearchScreen from "../../../components/SearchScreen";

import {academic_units, subject_type, admissionTerm } from "../util";

const SubjectSearch = () => {
  return (
    <SearchScreen title={"Disciplinas"}>
      <div>
        <p>Nome</p>
        <input id='ipt-name' type='text' placeholder='Buscar por nome' />
      </div>
      <div>
        <p>Tipo</p>
        <SelectPicker
          defaultValue={"todos"}
          data={subject_type}
          searchable={true}
          cleanable={false}
          style={{ width: 180 }}
        />
      </div>
      <div>
        <p>Uni. acadêmica</p>
        <SelectPicker defaultValue={"todas"} data={academic_units} searchable={false} cleanable={false} />
      </div>
      <div>
        <p>Período</p>
        <SelectPicker defaultValue={"todos"} data={admissionTerm} searchable={false} cleanable={false} />
      </div>
    </SearchScreen>
  );
};

export default SubjectSearch;
