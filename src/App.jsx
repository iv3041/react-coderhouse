import './index.css';
import NavBar from './components/NavBar';
import ContainerCardItems from './components/items/ContainerCardItems';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailsItem from './components/items/DetailsItem';
import ProviderContextoListCart from './components/items/providerContextoListCart';


function App() {

  return (
    <ProviderContextoListCart>
      <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path='/' element={ <ContainerCardItems />} />
            <Route path='/item/:idItem' element={ <DetailsItem />} />
            <Route path='/category/:idCategory' element={ <ContainerCardItems />} />
          </Routes>
      </BrowserRouter>
    </ProviderContextoListCart>
    
    
  );
}

export default App;