import React, {useState} from 'react';

export default function Napit(props) {

   
    const [counterValue, setCounterValue] = useState(1)
    const [counterValue2, setCounterValue2] = useState(1);
    

    const suti = ()=> {props.onAddClick(counterValue, "suti")
     setCounterValue(counterValue + 1)}

    const tomaatto = ()=> {props.onAddClick(counterValue2, "tomaatto")
     setCounterValue2(counterValue2 + 1)}

    

    return(

    <div>
        <button onClick={()=>  tomaatto()}> Tomaatto </button> 
        <button onClick={()=> suti()}> Suti </button> 
   
    </div>
    )
}