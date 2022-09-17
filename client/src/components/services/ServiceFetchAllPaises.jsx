export const ServiceFetchAllPaises = () => {
    return fetch(`http://localhost:3000/api/paises`)
    .then(consulta =>  consulta.json())
}