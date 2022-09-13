import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./header";
import Back from "./back";

function ContenedorPais(){
    const { id } = useParams();    

    const[pais, setPais]= useState([]);

    useEffect(()=>{
        fetch(`http://localhost:3000/api/pais/${id}`)
        .then(result=> result.json())
        .then( datos =>{
            let containerCategory = [];
            datos.items?.forEach(element => {
                containerCategory.push(element);            
            }); 
            setPais(containerCategory);
        })
    })

    return(
        <React.Fragment>
            <Header/>
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