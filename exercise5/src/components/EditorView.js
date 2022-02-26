import ProductItem from "./ProductItem";
import React, {useState} from 'react'

export default function EditorView(props) {

const [name,setName] = useState("");
const [price,setPrice] = useState(0);

const addToList = (event) => {
    event.preventDefault();
    props.listAddition(name, price)
    }

const handleNameChange = (event) => {
    setName(event.target.value);
    }
    
const handlePriceChange = (event) => {
    setPrice(event.target.value);
    }
    
    return (
        <div>
            <h1>EditorView</h1>
            <form>
                <div>Tuotteen nimi <input type="text" value={name} onChange={handleNameChange}/></div>
                <div>Tuotteen hinta <input type="number" value={price} onChange={handlePriceChange}/></div>
         
                <button onClick={ addToList } >Lisää uusi</button>
                
            </form>

            <div>  

               { props.products.map(p => <div> {p.name} <button onClick={ ()=> props.itemDeleteItem(p) }> DEL </button></div> )}
          
            </div>
        </div>
    )
}