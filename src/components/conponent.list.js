import React from 'react';

const ListElem =  (props)=><li style={{fontSize:props.fontSize}}className={props.className}><strong>{props.data.name}</strong></li>

export default ListElem;