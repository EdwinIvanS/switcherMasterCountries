import React, { useEffect, useState } from "react";
import Header from "./header";
import Search from "./search";
import ContenedorPaises from "./contenedorPaises";

function ContenedorHeader(props) {
    const { category } = props;

    const[pais, setPais] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:3000/api/paises`)
        .then(consulta =>  consulta.json())
        .then(resultado => {
            let array =[];
            resultado.items?.forEach(e => { array.push(e)});
            setPais(array);
        });
    },[])

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