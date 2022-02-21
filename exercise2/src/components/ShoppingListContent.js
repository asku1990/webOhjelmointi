import React from 'react';

export default function ShoppinList(props) {
function onListItemClick(element) {
 props.itemClickedEvent(element);
}
  return (
  
  <div>
        <ul>  
            {
                props.listItems.map((item, index) => {
            
                  return <li onClick={() => onListItemClick(item)} key ={index} className={item.isChecked ? "isChecked" : null }>
                        { item.qty } { item.name }</li>            
                 })
            }
        </ul>
        <div>{ props.descriptionFieldValue }</div>
  </div>)
  
  ;
}
