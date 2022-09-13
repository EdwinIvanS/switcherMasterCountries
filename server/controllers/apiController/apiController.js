const fetch = require("node-fetch");
const apiMainController = {
    paises : ((req, res)=>{
         fetch('https://restcountries.com/v3.1/all')
        .then(consumo=> consumo.json())
        .then(resultado => {
            let detallePaises = [];
            for (let i = 0; i < 16; i++) {
                detallePaises.push({
                    name : resultado[i].name.common, 
                    population : resultado[i].population, 
                    region : resultado[i].region, 
                    capital : resultado[i].capital[0], 
                    image :  resultado[i].flags.png})
            }

            res.status(200).json({
                autor : {
                    name: "Edwin Ivan",
                    lastname: "Saboya Echeverry"
                },
                items : detallePaises
            })
        })
        .catch(error => console.log(error)
        );
    }),

    nombrePais: ((req, res)=>{
        let idName = req.params.id;
        fetch(`https://restcountries.com/v3.1/name/${idName}`)
        .then(consumo=>consumo.json())
        .then(resultado => {
            let detallePais = [];
            for (let i = 0; i < 1; i++) {
                detallePais.push({
                    name : resultado[i].name.common, 
                    population : resultado[i].population, 
                    region : resultado[i].region, 
                    Subregion : resultado[i].subregion, 
                    capital : resultado[i].capital[0], 
                    Top : resultado[i].tld[0], 
                    currencies : Object.values(resultado[i].currencies), 
                    languages:Object.values(resultado[i].languages) , 
                    image :  resultado[i].flags.png
                })
            }

            res.status(200).json({
                autor : {
                    name: "Edwin Ivan",
                    lastname: "Saboya Echeverry"
                },
                items : detallePais
            })            
        })
        .catch(error => console.log(error));
    }),

    filtroRegion: ((req, res) =>{
        let region = req.params.region;
        fetch(`https://restcountries.com/v3.1/region/${region}`)
        .then(consumo=>consumo.json())
        .then( resultado =>{
            let detalleRegion = [];
            for (let i = 0; i < 16; i++) {
                detalleRegion.push({
                    name : resultado[i].name.common, 
                    population : resultado[i].population, 
                    region : resultado[i].region, 
                    capital : resultado[i].capital[0], 
                    image :  resultado[i].flags.png})
            }
            res.status(200).json({
                autor : {
                    name: "Edwin Ivan",
                    lastname: "Saboya Echeverry"
                },
                items : detalleRegion
            })
        })
        .catch(error => console.log(error));
    })
}

module.exports = apiMainController;