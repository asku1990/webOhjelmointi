import React, {useState} from 'react';

// tässä kesken uuden rakennus joka lisäisi numeroita samaan

export default function LisaaUusi(props) {


    const [ shoppingListItems, setShoppingListItems  ] = useState([ 
        {
          id:1,
          name: "Pensseli",
          qty :4,
          isChecked :false
        }
         ]);
    
         const addMaitoa = (item) => {

            console.log(item);
            let newShoppingListItems = [...shoppingListItems];
            const Maitoa = (element) => element == item;
            let itemClickedIndex = newShoppingListItems.findIndex(M => M.name === item); ;
            
            console.log(itemClickedIndex);
        
            if(itemClickedIndex != -1) {
              console.log("tasa2")
              let newElement = {...shoppingListItems[itemClickedIndex]}
              newElement.qty = newElement.qty+1;
              newShoppingListItems[itemClickedIndex] = newElement;
              setShoppingListItems(newShoppingListItems);
            }
            else if (itemClickedIndex == -1) {
              let newShoppingListItems = [...shoppingListItems, { 
          
                id: shoppingListItems.length + 1, 
                name: item,
                qty : 1,
                isChecked : false
                
            
               }];
            }
            }  
            

    return(
        <div>
            <button onClick={()=> addMaitoa("Pensseli")}> Pensseli</button>
        </div>
    )
}