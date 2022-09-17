import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ServiceFetchDetallePais } from "../services/ServiceFetchDetallePais";

export const UseFetchdetallePais = () =>{
    const {id} = useParams();
    const [pais, setPais]= useState([]);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(()=>{
        ServiceFetchDetallePais(id)
        .then( datos => {
            let containerCategory = [];
            datos.items?.forEach(element => {
                containerCategory.push(element);            
            }); 
            setPais(containerCategory);
        })
        .catch(error => console.log(error))
        .finally(()=> setIsFetching(false))
    },[id])

    return { pais , isFetching }
}