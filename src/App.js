
import './App.css';
import { DataProvider } from './Components/DataContext';
import Header from './Components/Header';
import BodyPage from './Components/BodyPage';
import Footer from './Components/Footer';
import { Suplemento } from './Components/Suplemento';
import ScrollHooks from './Components/scroll';
import { useState } from 'react';



function App() {
  const [first, setFirst] = useState("men")


  function changeBody(e) {
    if (first === "men") {
      setFirst("move")
    } else if (first === "move") {
      setFirst("men")
    }
  }




  return (
    <DataProvider>
      <div className={`App_${first}`} id="applic"  >

        <div className='item1'>
          <Header changeBody={changeBody} />
        </div>
        <div className='item2'>
          <BodyPage />
        </div>
        <div className='item3'>
          <Suplemento />
        </div>
        <div className='item4'>         <Footer />
        </div>
        < ScrollHooks />
      </div>
    </DataProvider>
  );
}

export default App;
