import React, { useState } from 'react';
import { Switch } from 'pretty-checkbox-react'
import '@djthoms/pretty-checkbox';

const MySwitch = ({ tags, handleCheck }) => {
    const [all, setAll] = useState(true);

    return (
        <div className="optionsActives">
            {tags.map((data, index) => {
                return <label key={"label" + index}>
                    <Switch
                        shape="fill"
                        className={"switch" + index}
                        key={"check" + index}
                        name={"tag" + index}
                        id={index}
                        checked={data.select}
                        onChange={(e) => handleCheck(data, e)}
                    />{" " + data.valueTranslate}</label>
            })}

            <label>
                <Switch
                    shape="fill"
                    className={"switchAll"}
                    name={"all"}
                    checked={all}
                    onChange={(e) =>{setAll(!all); handleCheck([], e)}}
                />{" Todos"}
            </label>
        </div>

    );
}

export default MySwitch;