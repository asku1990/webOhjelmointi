import React from "react";
import ProductItem from "./ProductItem";

export default function Hyvaksy(props) {


return (
    <div>
        <ul>
            {
                <li>{item.name}</li>
            }
        </ul>
        <div>{props.descriptionFieldValue}</div>
    </div>
);
}

