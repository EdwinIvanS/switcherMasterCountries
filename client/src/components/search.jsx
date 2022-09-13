import React, { useState }  from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Filtro from "./filtro";

function Search(){
    const [busqueda, setBusqueda] = useState("")
    const searchPais =(e) =>{
        setBusqueda(e.target.value);
    }

    return(
        <div className="formulario-search">
            <div className="formulario-search-contenedor1">
                <form className="fomulario">
                    <input type="search" placeholder="  Search for a country..." onChange={searchPais}></input>
                    <Link to={"/search/"+ busqueda}>
                        <button className="bto_search">
                            <FontAwesomeIcon icon={faSearch} />
                        </button>   
                    </Link>
                </form>
            </div>
            <div className="formulario-search-contenedor2">
                <Filtro></Filtro>
            </div>

        </div>
    )
}
export default Search;