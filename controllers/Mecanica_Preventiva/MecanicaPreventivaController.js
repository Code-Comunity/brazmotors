const MecanicaPreventiva = require('../../models/Mecanica_Preventiva/MecanicaPreventivaModel')
module.exports = {
    async FindAll(Request,Response){
       const mecanica = await MecanicaPreventiva.find({})
    return Response.json(mecanica)    
    },
    async FindById(Request,Response){
        const mecanica = await MecanicaPreventiva.find({_id: Request.params.id})
    return Response.json(mecanica)    
    }
}
