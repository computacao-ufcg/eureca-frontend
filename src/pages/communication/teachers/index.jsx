import React from "react";
import { SelectPicker } from "rsuite";
import SearchScreen from "../../../components/SearchScreen";
import { periodos, academic_units} from "../util";

const TeacherSearch = () => {
  return (
    <SearchScreen title={"Docentes"}>
      <div>
        <p>Nome</p>
        <input id='ipt-name' type='text' placeholder='Buscar por nome' />
      </div>
      <div>
        <p>SIAPE</p>
        <input id='ipt-siape' type='text' placeholder='Buscar por SIAPE' />
      </div>
      <div>
        <p>Uni. acadêmica</p>
        <SelectPicker defaultValue={"todas"} data={academic_units} searchable={false} cleanable={false} />
      </div>
      <div>
        <p>Período</p>
        <SelectPicker defaultValue={"todos"} data={periodos} searchable={false} cleanable={false} />
      </div>
    </SearchScreen>
  );
};

export default TeacherSearch;
