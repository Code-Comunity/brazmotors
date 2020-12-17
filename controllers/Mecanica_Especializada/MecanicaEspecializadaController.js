const MecanicaEspecializada = require('../../models/Mecanica_Especializada/MecanicaEspecializadaModel')
module.exports = {
    async FindAll(Request,Response){
       const mecanica = await MecanicaEspecializada.find({}).limit(10)
    return Response.json(mecanica)    
    },
    async FindById(Request,Response){
            const mecanica = await MecanicaEspecializada.find({_id: Request.params.id}).limit(10)
    return Response.json(mecanica)    
    }
}