module.exports = {
    RenderAll(dados){
        return(dados.map(marcas=>{
                return({
                    id:marcas._id,
                    marca: marcas.nome
                })
            })
        )
    }
}