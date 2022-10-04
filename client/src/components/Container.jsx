import React  from "react";
import ContenedorPaises from "./ContenedorPaises";
import { UseFetchAllPaises } from "./hooks/UseFetchAllPaises";
import { UseFetchRegion } from "./hooks/UseFetchRegion" 

function Container( {theme , selectionContinent} ) {    

    const { pais , isFetching }  = UseFetchAllPaises();
    const { region } =  UseFetchRegion();
    
    const searchCountries = () =>{
        const selectionRegion = selectionContinent;
        if(selectionRegion !== ""){ 
            UseFetchRegion(selectionRegion);
            try{ 
                UseFetchRegion(selectionRegion);
            } 
            catch (error){ 
                console.log(error);
            }
        }else{
            UseFetchAllPaises();
        }        
    }

    if(isFetching) console.log("Cargando ...");

    return(        
            <div className="App-color" id={ theme ? 'dark' : 'light'} >
                
                <div className="contenedor-header"  >
                    { 
                        region!== "" && pais.map((key,i) => {
                            return(
                                <ContenedorPaises key={i} name={key.name}  population={key.population} region={key.region} capital={key.capital} image={key.image} />
                            )
                        })
                    }
                    { 
                        region!== "" && region.map((key,i) => {
                            return(
                                <ContenedorPaises key={i} name={key.name}  population={key.population} region={key.region} capital={key.capital} image={key.image} />
                            )
                        })
                    }
                </div>
            </div>
    )
}

export default Container;