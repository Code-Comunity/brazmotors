const Marcas = require('../../models/Marcas/MarcasModule')
const Carros = require('../../models/Carros/CarrosModule')
const MarcasViews = require('../../views/Marcas/MarcasViews')
const MarcasModelosViews = require('../../views/Marcas/MarcasModelosViews')

module.exports = {
    async FindAll(Request,Response){
       const marcas = await Marcas.find({}).limit(10)
    return Response.json(MarcasViews.RenderAll(marcas))    
    },
  
    async FindById(Request,Response){
        const Modelos = await Carros.find({marca: Request.params.id}).limit(10)
    return Response.json(MarcasModelosViews.RenderAll(Modelos))
    }

}