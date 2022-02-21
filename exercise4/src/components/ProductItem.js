import React from "react";
//import naytto from './naytto.jpg'


export default function ProductItem(props){
  return (
      <div className={'productItem'}>
        <h1>{ props.name }</h1>
        <img src={ props.image }/>
        <div> { props.price } € </div>
      </div>
  );


  function Kasittele(props){
    return (
        <div className='productItem'>
        
          <img src={ props.image }/>
          <div> {props.teksti} </div>
          <div> { props.price } € </div>
        </div>
    );
   function Consoli(){
   // console.log(naytto);
   // console.log("hahaa");
   }
  }

  
}