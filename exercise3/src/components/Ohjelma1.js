import axios from 'axios';
import {useEffect, useState} from 'react';
import ProductItem from './ProductItem'

export default function Ohjelma1(props){

    const [products, setProducts] = useState([]);

    useEffect(() => {
    const getData = async () => {
    const results = await axios.get('https://dummyjson.com/products')

    setProducts(results.data.products);
    console.log(results.data.products);

    }
    getData();
  }, []);

  return (
    <div className='productContainer'>

        { products.map(p => <ProductItem name={p.title} image={p.thumbnail} price={p.price} />)}

    </div>
  );
}
