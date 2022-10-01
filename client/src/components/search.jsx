import React, { useState }  from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Select from 'react-select'
import { options } from "./list/OptionsCountries";
import Container from "./Container";

function Search({theme}){

    const [busqueda, setBusqueda] = useState("")

    const searchPais =(e) =>{
        setBusqueda(e.target.value);
    }
   
    /*
    const handleSelectChange = (event) => {
        console.log(valueFilterContiment(event.value));
    }
*/
    
    return(
        <>
        <div className="formulario-search" id={ theme ? 'dark' : 'light'}>
            <div className="formulario-search-contenedor1">
                <form className="fomulario" id={ theme ? 'dark' : 'light'}>
                    <input type="search" id={ theme ? 'dark' : 'light'} placeholder="  Search for a country..." onChange={searchPais}></input>
                    <Link to={"/search/"+ busqueda}>
                        <button className="bto_search">
                            <FontAwesomeIcon icon={faSearch} />
                        </button>   
                    </Link>
                </form>
            </div>
            <div className="formulario-search-contenedor2">
                <form className="list" id={ theme ? 'dark' : 'light'}>
                    <Select options={options} 
                            defaultValue={{ label : "  Filter by Region", value:''}}
                            className="input-filter"
                    />
                </form> 
            </div>
        </div>
        <Container theme={theme} />
        </>
    )
}
export default Search;