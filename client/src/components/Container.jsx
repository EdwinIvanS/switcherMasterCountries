import React  from "react";
import ContenedorPaises from "./ContenedorPaises";
import { UseFetchAllPaises } from "./hooks/UseFetchAllPaises";

function Container( {theme} ) {       
    const { pais , isFetching }  = UseFetchAllPaises();

    if(isFetching) console.log("Cargando ...");

    return(        
            <div className="App-color" id={ theme ? 'dark' : 'light'} >
                
                <div className="contenedor-header"  >
                    { 
                        pais.map((key,i) => {
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