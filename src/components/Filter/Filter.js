import React from "react";
import f from './Filter.module.css';

function Filter({value,changeFilter }) {
    return (
        <label className={ f.filter}>
            Find contact
            <input type='text' value={value} onChange={ changeFilter}/>
      </label>
  )  
};

export default Filter;