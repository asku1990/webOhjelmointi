import React from "react";
import ProductItem from "./ProductItem";

export default function EditorView(props) {


const tallenna = (event) => {
    event.preventDefault();
}

    return (
        <div>
            <h1>EditorView</h1>
            <form>
                <div>Nimi <input type="text" /></div>
                <div>Hinta <input type="text"/></div>
                <button onClick={ tallenna }>Tallenna</button>
            </form>

            <div>  
                {props.products.map(p => <div> {p.name} <button onClick={ ()=> props.onItemDelete(p)}> DEL </button></div> )}
            </div>
        </div>
    )
}