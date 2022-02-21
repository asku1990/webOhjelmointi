import Title from './components/Title'
import ShoppingListContent from './components/ShoppingListContent'
import Header from './components/Header'
import ListAdditionInputs from './components/ListAdditionInputs'
import './App.css'
import { useState } from 'react'
import Napit from './components/Napit'
import LisaaUusi from './components/LisaaUusi'


//App on juuri komponentti eli hierarkisesti korkein komponenetti
function App() {


//Alla olevaa functiota kutsutaa usestate hookiksi. Se lukee ja päivittää laskurin arvoa.
//tätä voidaan käyttää propsien sisällä ja aliluokissa. 
const[ counterValue, setCounterValue ] = useState(0);
const [ shoppingListItems, setShoppingListItems  ] = useState([
 // propsissa käytettävä taulukko, sisältö tallennettu olioihin jotta voidaan lisätä ja yliviivata tuotteita listasta

  {
    id:1,
    name: "Maitoa",
    qty :4,
    isChecked :false
  }, 
  {
    id:2,
    name: "Leipää",
    qty :5,
    isChecked :false
  }, 
  {
    id:3, 
    name: "Juustoa",
    qty :2,
    isChecked :true
  }
]);


const [description, setDescription] = useState("");

// Tällä funktiolla pystytään muokkaamaan taulukon dataa. sitä käytetään itemClickedEvent propsilla. 
//Tätä kutsutaan myös event käsittelijäksi. 
const handleItemCheckedToggle = (item) => {
//console.log("Toggling item status");
//console.log(item);

let newShoppinListItems = [...shoppingListItems]; //Luodaan uusi taulukko jonne on tallennettu shoppingListItems taulukko vielä sen vanhoilla arvoilla. 

let itemClickedIndex = newShoppinListItems.findIndex(i => item.id === i.id); // i => item.id === i.id on ehto lause joka palauttaa true tai false riippuen lyötyykö item.id listasta vai ei
if(itemClickedIndex != -1){
  //itemClicked.isChecked = !itemClicked.isChecked; //En tajunnut kokonaan mitä vittua tässä tapahtuu.
  let newElement = {...newShoppinListItems[itemClickedIndex]}
  newElement.isChecked = !newElement.isChecked;
  newShoppinListItems[itemClickedIndex] = newElement;
  setShoppingListItems(newShoppinListItems);
}
}

const onListAddition = (quantity, description) => {
  //console.log('onListAddition');
  //console.log(quantity, description);

  let newShoppinListItems = [...shoppingListItems, { 

    id: shoppingListItems.length, 
    name: description,
    qty : quantity,
    isChecked : false

   }];
 
  setShoppingListItems(newShoppinListItems);
  }

  

  return (
    <div className="App">
      <Header />
      <Title />
     
       <div>Täsä laskuri: { counterValue }</div> 
       <button onClick={()=> setCounterValue(counterValue + 1)}>Laskuri</button> 
  
      <ListAdditionInputs onAddClick={ onListAddition} 
       descriptionFieldValue={ description }
       onDescriptionChange={ (descriptionValue) => setDescription(descriptionValue) }
       />  

  {   <ShoppingListContent listItems={ shoppingListItems } 
      itemClickedEvent={ handleItemCheckedToggle }
      descriptionFieldValue={ description }
/> }

      <Napit onAddClick={ onListAddition}
      />

      
   { // <LisaaUusi/> tässä on tulossa uusi toiminto joka lisää määriä olemassaolevaan
}


    </div>
    
  ); //Aaltosulkujen sisälle props tomintojen muuttujat
}

export default App;
