import { useEffect, useState } from "react";
import { ServiceFetchAllPaises } from "../services/ServiceFetchAllPaises";

export const UseFetchAllPaises = () =>{
    const[pais, setPais] = useState([]);
    const[isFetching, setIsFetching] = useState(true);

    useEffect(()=>{
        ServiceFetchAllPaises()
        .then(resultado => {
            let array =[];
            resultado.items?.forEach(e => { array.push(e)});
            setPais(array);
        })
        .catch( error => { console.log(error)})
        .finally( () => { setIsFetching(false)})
    },[])
    return { pais, isFetching } 
    }
    