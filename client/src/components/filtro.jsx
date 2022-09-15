import React, { useState } from "react";
import Select from 'react-select'
//import FiltroSeleccion from "./filtroseleccion";
import ContenedorHeader from "./contenedorHeader";

function Filtro() {    

    const[category, setcategory] = useState([]);

    const options = [
        { value: 'Africa', label: 'Africa' },
        { value: 'America', label: 'America' },
        { value: 'Asia', label: 'Asia' },
        { value: 'Europe', label: 'Europe' },
        { value: 'Oceania', label: 'Oceania' }
    ]

    const handleSelectChange = (event) => {
        setcategory(event.value);
    }


    return(
        <React.Fragment>
        <form className="list">
            <Select options={options} 
                    defaultValue={{ label : "  Filter by Region", value:''}}
                    className="input-filter"
                    onChange={handleSelectChange}
            />
        </form> 
        {
            
            Object.values(category).map((e,i) => {
                return(
                    <ContenedorHeader key={i} category={category} />
                );
            })
        }    
        
        
        </React.Fragment>

    )
}

export default Filtro;