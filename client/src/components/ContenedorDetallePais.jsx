import React, { useContext } from "react";
import Back from "./back";
import { UseFetchdetallePais } from "./hooks/UseFetchdetallePais";
import { ContextTheme } from "./ContextTheme";

function ContenedorDetallePais( { theme } ){

    const  { pais  } = UseFetchdetallePais();  
    const headerContext = useContext(ContextTheme);

    return(
        <React.Fragment>
            <Back theme={theme}/>
            {
                pais.capital !== "" && pais.map((key , i) =>{
                    return(
                        <div key={i} className="contenedor-detalle-pais"  id={ theme ? 'dark' : 'light'}>
                            <div className="detalle-pais-img">
                                <img src={key.image} alt=""/>
                            </div>
                            <div className="detalle-pais-descripcion">
                                <h3 className="detalle-pais-title" id={ theme ? 'dark' : 'light'}> {key.name} </h3>
                                <div className="detalle-pais-info" id={ theme ? 'dark' : 'light'}>
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
                                <div className="detalle-pais-border" id={ theme ? 'dark' : 'light'}>
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
export default ContenedorDetallePais;