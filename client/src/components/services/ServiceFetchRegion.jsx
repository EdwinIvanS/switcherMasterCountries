export const ServiceFetchRegion = (region) => {
    return fetch(`http://localhost:3000/api/region/${region}`)
    .then(result=> result.json())
}