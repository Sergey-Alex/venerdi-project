import React, {useState} from 'react';
import SuperInputText from "./c1-SuperInputText/SuperInputText";
import SuperButton from "./c2-SuperButton/SuperButton";
import SuperCheckbox from "./c3-SuperCheckbox/SuperCheckbox";
import SuperEditableSpan from "./c4-SuperEditableSpan/SuperEditableSpan";
import SuperSelect from "./c5-SuperSelect/SuperSelect";
import SuperRadio from "./c6-SuperRadio/SuperRadio";
import SuperDoubleRange from "./c8-SuperDoubleRange/SuperDoubleRange";
import SuperRange from "./c7-SuperRange/SuperRange";

const SuperTestComponent = () => {
    return (
        <div style={{display: 'block'}}>
            <hr/>
            <SuperInputText/>
            <hr/>
            <SuperButton name={'btn'} onClick={() => (alert('заглушка'))}>button</SuperButton>
            <hr/>
            <SuperCheckbox checked={true}
                           onChangeChecked={() => console.log('заглушка')}/>
            <hr/>
            <SuperEditableSpan value={'sdfdsf'} onChange={(c) => ('заглушка')}/>
            <hr/>
            <SuperSelect options={['x', 'y', 'z']}/>
            <hr/>
            <SuperRadio name={'radio'} options={['x', 'y', 'z']}/>
            <hr/>
            <div><SuperDoubleRange value1={10} setValue1={() => 100}/></div>
            <hr/>
            <div><SuperRange value={3} onChangeRange={(q) => console.log(q)}/></div>
        </div>
    );
};

export default SuperTestComponent;