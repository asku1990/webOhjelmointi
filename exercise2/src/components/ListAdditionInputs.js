import React, {useState} from 'react';

export default function ListAdditionInputs(props) {
    /*Täällä luodaan kontrolloitu komponenetti jolloin react määrää arvon joka käytännössä tarkoittaa
    ettei käyttäjä voi lisätä mitä sattuu input kenttään. */
    const [quantity, setQuantity] = useState(0);

 // numeroiden liäsys input kenttään
    const handleQuantityChange = (event) => {

        //console.log(event.target.value);
        setQuantity(event.target.value);
    }
// tekstin lisäys input kenttään
    const handleDescriptionChange = (event) => {
        props.onDescriptionChange(event.target.value);
    }


  return <div>
          <div> Paljonko laitetaa <input type="number" value={ quantity } onChange={ handleQuantityChange } /></div>    
          <div>Mitä laitetaa <input type="text"  value={ props.descriptionFieldValue } onChange={ handleDescriptionChange }/></div>  
          <button onClick={ () => props.onAddClick(quantity, props.descriptionFieldValue) }>Hyväksy</button> 
  </div>;
}
