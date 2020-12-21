const Marcas = require('../../models/Marcas/MarcasModel')

module.exports = {
    async Render(dados){
        
        const resultados = dados.map(async carros=>{
            
            const marca = await Marcas.findById(carros.marca)
      
            return ({
                id: carros._id,
                nome: carros.nome,
                modelo: carros.modelo,
                marca: marca.nome,
                imagem: carros.imagem,
                preco: carros.preco,
                descricao: carros.descricao
            })
        })
        return await Promise.all(resultados)
    },

    RenderAll(){
    }
}