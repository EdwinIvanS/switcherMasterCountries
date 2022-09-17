import React from "react";
import Header from "./header";
import Search from "./search";
import ContenedorPaises from "./contenedorPaises";
import { UseFetchAllPaises } from "./hooks/UseFetchAllPaises";

function ContenedorHeader() {
    const { pais, isFetching}  = UseFetchAllPaises();
    if(isFetching) console.log("");

    return(        
        <React.Fragment>
            <Header/>
            <Search/>
            <div className="contenedor-header">
            {
                pais.map((key,i) => {
                    return(
                        <ContenedorPaises key={i} name={key.name}  population={key.population} region={key.region} capital={key.capital} image={key.image} />
                    )
                })
            }
            </div>
        </React.Fragment>
    )
}

export default ContenedorHeader;