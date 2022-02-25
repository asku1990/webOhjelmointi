import './App.css';
import { useEffect, useState } from 'react';
import ProductListView from './components/ProductsListView';
import EditorView from './components/EditorView'
import SearchBar from './components/SearchBar';
import SearchListView from './components/SearchListView';
import axios from 'axios';

function App() {

    const[editorModeOn, setEditorModeOn] = useState(false);

    const [products, setProducts] = useState([]);

    useEffect(() => {
    const getData = async () => {
    const results = await axios.get('http://localhost:3000/products')

    setProducts(results.data);
    }
    getData();
  }, []);

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

      //tässä lisätään tuotteet listaan///////////////////////////////
      const listAddition = (name, price) => {         
        axios.post('http://localhost:3000/products/', {
          "name": name,
          "price": price,
        })
      }

      // Määritetään Output //////////////////////////////////////////
     let output;

     if ( editorModeOn === true ) {
        output = <EditorView products={products} onItemDelete={ onItemDelete}
        listAddition={listAddition}/>
       //  console.log("Editor Mode On")
     }
     else{
      output = < ProductListView products={filteredProducts} />
    // console.log("Modet Of")
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


