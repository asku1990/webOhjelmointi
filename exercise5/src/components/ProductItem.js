import React from "react";

// listan tulostus

export default function ProductItem(props){
  return (
      <div className={'productItem'}>
        <h1>{ props.name }</h1>
        <img src={ props.image }/>
        <div> { props.price } € </div>
      </div>
  );
}