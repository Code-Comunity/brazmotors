module.exports = {
    RenderAll(dados){
        return(dados.map(carro=>{
                return({
                    id:carro._id,
                    modelo: carro.modelo,
                    preco: carro.preco,
                    imagem: carro.imagem                   
                })
            })
        )
    }
}