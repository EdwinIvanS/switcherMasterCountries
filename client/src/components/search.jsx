import React, { useState, useEffect }  from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Select from 'react-select'
import { options } from "./list/OptionsCountries";
import ContenedorPaises from "./ContenedorPaises"; 

function Search({theme}){

    const [busqueda, setBusqueda] = useState("");
    const [countries, setCountries] = useState([]);

    const searchPais =(e) =>{ setBusqueda(e.target.value)}

    useEffect(()=>{
        try {  ServiceFetchAllPaises()} 
        catch (error) { console.log(error)}
    },[])

    const ServiceFetchAllPaises = () => {
        fetch(`http://localhost:3000/api/paises`)
        .then(consulta =>  consulta.json())
        .then(resultado => {
            let array =[];
            resultado.items?.forEach(e => { array.push(e)});
            setCountries(array);
        })
    }

    const searchCountries = (e) =>{        
        const SelectRegion = e.value;        
        if(SelectRegion !== ""){ 
            const fetchSelectOption = async () => {
                fetch(`http://localhost:3000/api/region/${SelectRegion}`)
                .then(consulta =>  consulta.json())
                .then( resultado => {
                    let array =[];
                    resultado.items?.forEach(e => { array.push(e)}); 
                    setCountries(array);
                })
            }
            try { fetchSelectOption() } 
            catch (error) { console.log(error) }
        }else{
            ServiceFetchAllPaises();
        }
    }
    

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
                    <form className="list" id={ theme ? 'dark' : 'light'} >
                        <Select options={options} 
                                defaultValue={{ label : "  Filter by Region", value:''}}
                                className="input-filter"
                                onChange={searchCountries}
                        />
                    </form> 
                </div>
            </div>

            <div className="App-color" id={ theme ? 'dark' : 'light'} >
                
                <div className="contenedor-header"  >
                    { 
                        countries.map((key,i) => {
                            return(
                                <ContenedorPaises key={i} name={key.name}  population={key.population} region={key.region} capital={key.capital} image={key.image} />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
export default Search;