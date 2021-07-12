const Acessorios = require('../../models/Acessorios/AcessoriosModel')
module.exports = {

    async FindAll(Request,Response){
       const acessorios = await Acessorios.find({})
    return Response.json(acessorios)    
    },
    async FindById(Request,Response){
        const acessorios = await Acessorios.find({_id: Request.params.id})
    return Response.json(acessorios)    
}
    
}
