const Mecanica = require('../../modules/Mecanica_Servicos/MecanicaModule')
module.exports = {
    async FindAll(Request,Response){
       const mecanica = await Mecanica.find({}).limit(10)
    return Response.json(mecanica)    
    }
}