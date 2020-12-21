const Marcas = require('../../models/Marcas/MarcasModel')

module.exports = {
    async Render(dados){
        const marca = await Marcas.findById(dados[0].marca)
        return dados.map( carros=>{
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
    },

    RenderAll(){
    }
}