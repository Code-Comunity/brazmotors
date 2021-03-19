const MecanicaEspecializada = require('../../models/Mecanica_Especializada/MecanicaEspecializadaModel')
module.exports = {
    async FindAll(Request,Response){
       const mecanica = await MecanicaEspecializada.find({})
    return Response.json(mecanica)    
    },
    async FindById(Request,Response){
            const mecanica = await MecanicaEspecializada.find({_id: Request.params.id})
    return Response.json(mecanica)    
    }
}
