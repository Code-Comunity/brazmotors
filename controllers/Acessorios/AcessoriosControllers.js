const Acessorios = require('../../modules/Acessorios/AcessoriosModule')
module.exports = {
    async FindAll(Request,Response){
       const acessorios = await Acessorios.find({}).limit(10)
    return Response.json(acessorios)    
    }
}