import React, {useState} from "react";
import naytto from './naytto.png';
import kyna from './kyna.png'
import kiintoLevy from './kiintoLevy.png'
import lehma from './lehma.png'
import viikset from './viikset.png'
import nappis from './nappis.png'
import Kasittele from "../components/ProductItem";


export default function Taulukko(props){

    const [amazonData] = useState([
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
                  {
            id: 5,
            name: "Apple kyna",
            image: "/static/media/kyna.38709bbbb67a3d7eecda.png",
            teksti: "Apple Pencil (2nd Generation)",
            price: 50
          },
          {
            id:6,
            name: "Kiintolevy",
            image: "/static/media/kiintoLevy.46efd7ba6ef5b30fed43.png",
            teksti: "Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PlayStation, & Xbox - 1-Year Rescue Service (STGX2000400)",
            price: 100
          },
          {
            id:7,
            name: "naytto",
            image: "/static/media/naytto.8c041c123cc4a7b37fc3.png",
            teksti: "HP 24mh FHD Monitor - Computer Monitor with 23.8-Inch IPS Display (1080p) - Built-In Speakers and VESA Mounting - Height/Tilt Adjustment for... ",
            price: 200
          },
          {
            id: 8,
            name: "Nappis",
            image: "/static/media/nappis.c0695e281f63f36cb58d.png",
            teksti: "Logitech MK270 Wireless Keyboard and Mouse Combo for Windows, 2.4 GHz Wireless, Compact Mouse, 8 Multimedia and Shortcut Keys, 2-Year Battery Life, for... ",
            price: 50
          },
          
          
      ]);

      const SearchBar = () => (
        <form action="/" method="get">
            <label htmlFor="header-search">
                <span>Etsi tuotteista</span>
            </label>
            <input
                type="text"
                id="header-search"
                placeholder="Tuotteen nimi"
                name="s" 
            />
            <button type="submit">Search</button>
        </form>
    );

const { search } = window.location;
const query = new URLSearchParams(search).get('s');

const filterProducts = (amazonData, query) => {
  if (!query) {
      return amazonData;
  }

  return amazonData.filter((description) => {
      const descriptionName = description.name.toLowerCase();
      return descriptionName.includes(query);
  });
};
const filteredProducts = filterProducts(amazonData, query);

  return (
  
    <div>
      <div className="hakuPalkki">

          <SearchBar/>

      </div>

      <div className='productContainer'>

       {filteredProducts.map(description =><Kasittele name={description.name} 
       image = {description.image} price={description.price} />)}
       
      </div>
     
    </div>    
      
  );
}