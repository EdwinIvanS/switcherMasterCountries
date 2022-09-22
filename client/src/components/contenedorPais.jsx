import React, { useContext } from "react";
import Header from "./header";
import Back from "./back";
import { UseFetchdetallePais } from "./hooks/UseFetchdetallePais";
import { ContextTheme } from "./ContextTheme";

function ContenedorPais(){

    const  { pais  } = UseFetchdetallePais();  
    const headerContext = useContext(ContextTheme);

    return(
        <React.Fragment>
            <Header theme={headerContext}/>
            <Back/>
            {
                pais.capital !== "" && pais.map((key , i) =>{
                    return(
                        <div key={i} className="contenedor-detalle-pais">
                            <div className="detalle-pais-img">
                                <img src={key.image} alt=""/>
                            </div>
                            <div className="detalle-pais-descripcion">
                                <h3 className="detalle-pais-title"> {key.name} </h3>
                                <div className="detalle-pais-info">
                                    <div className="section1">
                                        <p>Native Name: {key.name} </p>
                                        <p>Population: {key.population}</p>
                                        <p>Region: {key.region}</p>
                                        <p>Sub Region: {key.Subregion}</p>
                                        <p>Capital: {key.capital}</p>
                                    </div>
                                    <div className="section2">
                                        <p>Top Level Domain: {key.Top}</p>
                                        <p>Currencies:  {key.currencies[0].name} </p>
                                        <p>Languages: {key.languages + ""}</p>
                                    </div>                                   
                                    
                                </div>
                                <div className="detalle-pais-border">
                                    <p>Border Countries <span>{key.languages + ""}</span> </p>                                  
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            
        </React.Fragment>
    )
}
export default ContenedorPais;