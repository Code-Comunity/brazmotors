const Marcas = require('../../models/Marcas/MarcasModel')

module.exports = {
    async RenderAll(dados){
        
        const resultados =  dados.map(async carro=>{
            
            const marca = await Marcas.findById(carro.marca)

                return({
                    id:carro._id,
                    nome: carro.nome,
                    modelo: carro.modelo,
                    preco: carro.preco,
                    imagem: carro.imagem,
                    marca: marca.nome,
                    preco: carro.preco,                   
                })
            })
        return await Promise.all(resultados)
        }
        
    }