import React from 'react'
import classes from './checkbox.module.css';

const CheckBox = (props) => {

   

    return (
        <div>
            <label>{props.label}</label>
            <input
                checked={props.checked}
                onChange={props.changeHandler}
                className={classes[props.classname]}
                type="checkbox" />
        </div>
    )
}


export default CheckBox