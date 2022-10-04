import {useEffect, useState} from "react";
import { ServiceFetchRegion } from "../services/ServiceFetchRegion";

export const UseFetchRegion = (idRegion) => {

    const[region, setRegion] = useState("");

    useEffect(()=>{
        ServiceFetchRegion(region)
        .then( respuesta  => { 
            console.log(respuesta); 
            setRegion(respuesta);                       
        })
        .catch(error => console.log(error))
    },[])

    return { region }; 
}