const EsteticaAutomotiva = require('../../models/Estetica_Automotiva/EsteticaAutomotivaModel')
module.exports = {

    async FindAll(Request,Response){
       const estetica = await EsteticaAutomotiva.find({})
    return Response.json(estetica)    
    },
    async FindById(Request,Response){
       const estetica = await EsteticaAutomotiva.find({_id: Request.params.id})
    return Response.json(estetica)    
    }
}
