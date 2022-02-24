import React from "react";
import ProductItem from "./ProductItem";

export default function SearchListView(props) {
    return (
        <div className="productContainer">  
            {props.listItems.map(p => <ProductItem name={p.name} price={p.price} />)}
        </div>
    )
}