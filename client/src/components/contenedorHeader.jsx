import React, { useState } from "react";
import Header from "./header";
import Search from "./search";
import ContenedorPaises from "./contenedorPaises";
import { UseFetchAllPaises } from "./hooks/UseFetchAllPaises";
import { ContextTheme, color } from "./ContextTheme";

function ContenedorHeader() {       
    const { pais , isFetching }  = UseFetchAllPaises();
    const [ theme , setTheme ] = useState(color); 

    const toglleTheme = (theme) => {
        setTheme(theme);
    }

    if(isFetching) console.log("");

    return(        
        <ContextTheme.Provider value={{ theme , toglleTheme}}>
            <div className="App-color" id={ theme }>
                <Header />
                <Search theme={theme}/>
                <div className="contenedor-header" id={theme === 'dark' ? 'dark' : 'light'}>
                {
                    pais.map((key,i) => {
                        return(
                            <ContenedorPaises key={i} theme={theme} name={key.name}  population={key.population} region={key.region} capital={key.capital} image={key.image} />
                        )
                    })
                }
                </div>
            </div>
        </ContextTheme.Provider>
    )
}

export default ContenedorHeader;