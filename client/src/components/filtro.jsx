import React from "react";
import Select from 'react-select'
//import FiltroSeleccion from "./filtroseleccion";

function Filtro(props) {    
    const {theme} = props;
    //const[category, setcategory] = useState([]);

    const options = [
        { value: 'Africa', label: 'Africa' },
        { value: 'America', label: 'America' },
        { value: 'Asia', label: 'Asia' },
        { value: 'Europe', label: 'Europe' },
        { value: 'Oceania', label: 'Oceania' }
    ]

    const handleSelectChange = (event) => {
        //setcategory(event.value);
        console.log(event.value)
    }


    return(
        <React.Fragment>
        <form className="list" id={theme === 'dark' ? 'dark' : 'light'}>
            <Select options={options} 
                    defaultValue={{ label : "  Filter by Region", value:''}}
                    className="input-filter"
                    onChange={handleSelectChange}
            />
        </form> 
        {/*            
            Object.values(category).map((e,i) => {
                return(
                    <FiltroSeleccion key={i} category={category} />
                );
            })
        */}    
        
        
        </React.Fragment>

    )
}

export default Filtro;