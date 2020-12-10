

module.exports = {
    Render(dados){
        return dados.map( carros=>{
            return ({
                id: carros._id,
                nome: carros.nome,
                modelo: carros.modelo,
                marca: carros.marca,
                imagem: carros.imagem,
                preco: carros.preco,
                descricao: carros.descricao
            })
        })
    },

    RenderAll(){
    }
}