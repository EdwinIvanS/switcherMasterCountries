import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"

function FiltroSeleccion(props){
    const {category} = props;
    
    const[paisSeleccion, setPaisSeleccion] = useState([]);   

    useEffect(()=>{
        fetch(`http://localhost:3000/api/region/${category}`)
        .then(consulta =>  consulta.json())
        .then(resultado => {
            console.log(resultado);
            let array =[];
            resultado.items?.forEach(e => { array.push(e)});
            console.log(resultado);
            setPaisSeleccion(array);
        });
    },[category])

    return(
        <div className="contenedor-header">
            {
                paisSeleccion.map((key,i) => {
                    return(                        
                        <div className="body-general" key={key+i}>
                            <div className="card">
                                <div className="card-img">
                                <Link to={"/search/"+ key.name}>
                                    <img src={key.image} alt=""/>
                                </Link>
                                </div>
                                <div className="card-description">
                                    <p className="title">{key.name}</p>
                                    <p>Population : {key.population}</p>
                                    <p>Region : {key.region}</p>
                                    <p>Capital : {key.capital}</p>
                                </div>
                            </div>
                        </div>
                        
                    )
                })
            }
        </div>
    )
}

export default FiltroSeleccion;