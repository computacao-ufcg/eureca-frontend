import React from "react";
import { SelectPicker } from "rsuite";
import SearchScreen from "../../../../components/SearchScreen";

const SubjectSearch = () => {
  return (
    <SearchScreen>
      <input id='ipt-name' type='text' placeholder='Buscar por nome' />
      <SelectPicker searchable={true} cleanable={false} style={{width:224}} />
      <SelectPicker searchable={false} cleanable={false} />
      <SelectPicker searchable={false} cleanable={false} />
    </SearchScreen>
  );
};

export default SubjectSearch;
