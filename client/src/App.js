import React,{useState} from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Search from './components/search';
import ContenedorDetallePais from './components/ContenedorDetallePais';
import Header from './components/Header';
//import { ContextTheme, color } from "./ContextTheme";

function App() {
  const [ darkMode , setdarkMode ] = useState(true);

  if(darkMode) document.querySelector("body").style.backgroundColor = "#202c37";
  else document.querySelector("body").style.backgroundColor = "#fafafaf5";

  const switchMode = () => { 
    setdarkMode((prevState)=> !prevState)
  }

  return (
    <div className="App">
    {/*<ContextTheme.Provider value={{ theme , toglleTheme}}> */}
    <Header onClick={switchMode} theme={darkMode}/>
    <BrowserRouter>                    
          <Routes>
            <Route path="/" exact={true} element={<Search theme={darkMode}/>} ></Route>
            <Route path="/search/:id" exact={true} element={<ContenedorDetallePais theme={darkMode}/>} ></Route>
          </Routes>
    </BrowserRouter> 
    {/*</ContextTheme.Provider>*/}
    </div>
  );
}

export default App;
