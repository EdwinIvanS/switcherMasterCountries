import React, { useEffect, useState } from "react";
import ContenedorPaisesFiltro from "./contenedorPaisesFiltro";

function FiltroSeleccion(props){
    const {category} = props;
    
    const[paisSeleccion, setPaisSeleccion] = useState([]);    

    useEffect(()=>{
        fetch(`http://localhost:3000/api/region/${category}`)
        .then(consulta =>  consulta.json())
        .then(resultado => {
            let array =[];
            resultado.items?.forEach(e => { array.push(e)});
            setPaisSeleccion(array);
        });
    },[category])

    return(
        <div className="contenedor-header">
            {
                paisSeleccion.map((key,i) => {
                    return(
                        <ContenedorPaisesFiltro key={i} name={key.name}  population={key.population} region={key.region} capital={key.capital} image={key.image} />
                    )
                })
            }
        </div>
    )
}

export default FiltroSeleccion;