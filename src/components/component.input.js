import React from 'react';

const Input = (props)=> <input type={props.type} onBlur={()=>{props.onblur?props.onblur():''}} onChange={(e)=>{props.onchange(e)}} name={props.name} placeholder={props.placeholder} className={props.className} value={props.value}/>

export default Input;