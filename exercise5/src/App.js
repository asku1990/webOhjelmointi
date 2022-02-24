import './App.css';


import { useEffect, useState } from 'react';
import ProductListView from './components/ProductsListView';
import EditorView from './components/EditorView'
import SearchBar from './components/SearchBar';
import SearchListView from './components/SearchListView';

function App() {

    const[editorModeOn, setEditorModeOn] = useState(false);

    const [products, setProducts] = useState([
        {
            id: 1,
            name: "Apple kyna",
            image: "/static/media/kyna.38709bbbb67a3d7eecda.png",
            teksti: "Apple Pencil (2nd Generation)",
            price: 50
          },
          {
            id:2,
            name: "Kiintolevy",
            image: "/static/media/kiintoLevy.46efd7ba6ef5b30fed43.png",
            teksti: "Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PlayStation, & Xbox - 1-Year Rescue Service (STGX2000400)",
            price: 100
          },
          {
            id:3,
            name: "naytto",
            image: "/static/media/naytto.8c041c123cc4a7b37fc3.png",
            teksti: "HP 24mh FHD Monitor - Computer Monitor with 23.8-Inch IPS Display (1080p) - Built-In Speakers and VESA Mounting - Height/Tilt Adjustment for... ",
            price: 200
          },
          {
            id: 4,
            name: "Nappis",
            image: "/static/media/nappis.c0695e281f63f36cb58d.png",
            teksti: "Logitech MK270 Wireless Keyboard and Mouse Combo for Windows, 2.4 GHz Wireless, Compact Mouse, 8 Multimedia and Shortcut Keys, 2-Year Battery Life, for... ",
            price: 50
          },
      ]);

      //tästä alkaa ohjelmaa joka  vaihtaa editor moden ja normaalin välillä ja poistaa taulukon osia
      const onItemDelete = (item) => {
          let newProds = [...products];
          let deletedItemIndex = newProds.findIndex(p => p.id === item.id);
          newProds.splice(deletedItemIndex, 1);
          setProducts(newProds);
      }

      //tästä alkaa hakupalkin koodi ///////////////////////////////////
      const { search } = window.location;
      const query = new URLSearchParams(search).get('s');

      const filterProducts = (products, query) => {
        if (!query) {
            return products;
        }

        return products.filter((description) => {
            const descriptionName = description.name.toLowerCase();
            return descriptionName.includes(query);
        });
      };
      const filteredProducts = filterProducts(products, query);

      // Määritetään Output //////////////////////////////////////////
     let output;

     if ( editorModeOn == true ) {
         output = <EditorView products={products} onItemDelete={ onItemDelete}/>
         console.log("Editor Mode On")
     }
     else{
      output = < ProductListView products={filteredProducts} />
      console.log("Modet Of")
     }

return (

    <div >   
      <div className='hakuPalkki'>

        <div> <SearchBar /> </div>
        <button onClick={ ()=> setEditorModeOn(!editorModeOn) }> Muokkaa </button>
        
      </div>
      
      <div> {output} </div>
          
    </div>
)
}

export default App;


