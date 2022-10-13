const fetch = require("node-fetch");
const apiMainController = {
    paises : ((req, res)=>{
        try {
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
            .catch(error => console.log(error));
        } catch (error) {
            return res.status(500).json({
                message: 'Somethin goes wrong'
            })
        }
        
    }),

    nombrePais: ((req, res)=>{
        try {
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
        } catch (error) {
            return res.status(500).json({
                message: 'Somethin goes wrong'
            })
        }
    }),

    filtroRegion: ((req, res) =>{
        try {
            let region = req.params.region;
            fetch(`https://restcountries.com/v3.1/region/${region}`)
            .then(consumo=>consumo.json())
            .then( resultado =>{
                let detalleRegion = [];                
                resultado= resultado.map((result, i) => {
                    if(i<16){
                        detalleRegion.push({
                            name : result.name.common, 
                            population : result.population, 
                            region : result.region, 
                            capital : result.capital, 
                            image :  result.flags.png})
                    }
                })
                res.status(200).json({
                    autor : {
                        name: "Edwin Ivan",
                        lastname: "Saboya Echeverry"
                    },
                    items : detalleRegion
                })
            })
            .catch(error => console.log(error));
        } catch (error) {
            return res.status(500).json({
                message: 'Somethin goes wrong'
            })
        }
    })
}

module.exports = apiMainController;