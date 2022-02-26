import React from "react";
import ProductItem from "./ProductItem";

// listnäkymän tulostus
export default function ProductListView(props) {
    return (
        <div className="productContainer">  
         { props.products.map(p => <ProductItem name={p.name} price={p.price}/>) }  
      </div>
    )
}