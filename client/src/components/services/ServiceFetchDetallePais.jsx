export const ServiceFetchDetallePais = (id) =>{
    return fetch(`http://localhost:3000/api/pais/${id}`)
    .then(result=> result.json())
}