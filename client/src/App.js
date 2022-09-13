import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import ContenedorHeader from './components/contenedorHeader';
import ContenedorPais from './components/contenedorPais';

function App() {
  return (
    <div className="App">
       <BrowserRouter>                    
          <Routes>
            <Route path="/" exact={true} element={<ContenedorHeader/>} ></Route>
            <Route path="/search/:id" exact={true} element={<ContenedorPais/>} ></Route>
          </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
