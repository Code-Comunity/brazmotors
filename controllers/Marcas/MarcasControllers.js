const Marcas = require('../../models/Marcas/MarcasModel')
const Carros = require('../../models/Carros/CarrosModel')
const MarcasViews = require('../../views/Marcas/MarcasViews')
const MarcasModelosViews = require('../../views/Marcas/MarcasModelosViews')

module.exports = {
    async FindAll(Request,Response){
       const marcas = await Marcas.find({}) // Procurar
    return Response.json(MarcasViews.RenderAll(marcas))    
    },
  
    async FindById(Request,Response){
        const Modelos = await Carros.find({marca: Request.params.id})
    return Response.json(await MarcasModelosViews.RenderAll(Modelos)
          
    
    )
    }

}
