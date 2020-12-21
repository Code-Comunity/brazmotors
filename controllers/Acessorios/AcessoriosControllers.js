const Acessorios = require('../../models/Acessorios/AcessoriosModel')
module.exports = {

    async FindAll(Request,Response){
       const acessorios = await Acessorios.find({}).limit(10)
    return Response.json(acessorios)    
    }
    
}