import './App.css';
import { useEffect, useState } from 'react';
import ProductListView from './components/ProductsListView';
import EditorView from './components/EditorView'
import SearchBar from './components/SearchBar';
import axios from 'axios';

function App() {

    const[editorModeOn, setEditorModeOn] = useState(false);

    const [products, setProducts] = useState([]);

      // haetaan taulukko tietokannasta
    useEffect(() => {
    const getData = async () => {
    const results = await axios.get('http://localhost:3000/products')

    setProducts(results.data);
    }
    getData();
  }, []);

      //tästä alkaa hakupalkin koodi muokataan näytettävää sisältöä ///////////////////////////////////
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

      //tässä lisätään tuotteet listaan mutta sivu täytyy päivittää napin painalluksen jälkeen
      const listAddition = async (name, price) => {         
        await axios.post('http://localhost:3000/products/', {
          "name": name,
          "price": price,
        })
        window.location.reload(false)
      }
      //tuotteen poistaminen toimii mutta sivu on päivitettävä
      const itemDeleteItem = async (productId) =>{
        await axios.delete("http://localhost:3000/products/"+productId.id)
        console.log(productId);
        window.location.reload(false)
      }

      // Määritetään Output //////////////////////////////////////////
     let output;

     if ( editorModeOn === true ) {
        output = <EditorView products={products} 
        itemDeleteItem={itemDeleteItem}
        listAddition={listAddition}
        />
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

        <button onClick={ ()=> setEditorModeOn(!editorModeOn)}> Muokkaa </button>
        
      </div>
      
      <div> {output} </div>
          
    </div>
)
}
export default App;


