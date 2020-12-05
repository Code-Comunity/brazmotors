const Marcas = require('../../modules/Marcas/MarcasModule')
module.exports = {
    async FindAll(Request,Response){
       const marcas = await Marcas.find({}).limit(10)
    return Response.json(marcas)    
    }
}