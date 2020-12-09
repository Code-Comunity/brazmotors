const Carros = require('../../models/Carros/CarrosModule')
const Marcas = require('../../models/Marcas/MarcasModule')

module.exports = {

    Render(dados){
       
        return dados.map( carros=>{
          
            return ({
                id: carros._id,
                nome: carros.nome,
                modelo: carros.modelo,
                marca: carros.marca
            })
        })
    },

    RenderAll(){
    }
}