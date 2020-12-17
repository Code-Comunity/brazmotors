const MecanicaEspecializada = require('../../models/Mecanica_Especializada/MecanicaEspecializadaModele')
module.exports = {
    async FindAll(Request,Response){
       const mecanica = await MecanicaEspecializada.find({}).limit(10)
    return Response.json(mecanica)    
    }
}