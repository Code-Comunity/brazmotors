const MecanicaPreventiva = require('../../models/Mecanica_Preventiva/MecanicaPreventivaModule')
module.exports = {
    async FindAll(Request,Response){
       const mecanica = await MecanicaPreventiva.find({}).limit(10)
    return Response.json(mecanica)    
    }
}