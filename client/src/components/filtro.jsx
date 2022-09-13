import React from "react";
import Select from 'react-select'

function Filtro() {

const options = [
  { value: 'Africa', label: 'Africa' },
  { value: 'America', label: 'America' },
  { value: 'Asia', label: 'Asia' },
  { value: 'Europe', label: 'Europe' },
  { value: 'Oceania', label: 'Oceania' }
]

    return(
        <form className="list">
            <Select options={options} placeholder="  Filter by Region" className="input-filter"/>
        </form>
    )
}

export default Filtro;