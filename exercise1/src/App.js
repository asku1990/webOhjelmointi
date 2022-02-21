import './App.css';
import Title from './components/Title';
import Juttu from './components/Juttu';
import Luetut from './components/Luetut';
import Header from './components/Header';
import ShoppingList from './components/ShoppingList';


function App() {

  return (
    <div className="App">
      
      <Header />
      
      <div className='paaAsettelu'>
      
      <div className="testia">
        <Title />

      </div>
        
      <article className="flex border-divider-1 testia">
      
        <Juttu/>    
        <Luetut/>
    
      </article>      
    </div>
    </div>
  );
}
export default App;
