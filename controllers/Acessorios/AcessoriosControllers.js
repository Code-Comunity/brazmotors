const Acessorios = require('../../models/Acessorios/AcessoriosModel')
module.exports = {

    async FindAll(Request,Response){
       const acessorios = await Acessorios.find({})
    return Response.json(acessorios)    
    }
    
}
