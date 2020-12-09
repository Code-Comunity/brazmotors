const Carros = require('../../models/Carros/CarrosModule')
module.exports = {

    async FindAll(Request,Response){
       const carros = await Carros.find({}).limit(10)
    return Response.json(carros)    
    },
    async Find_Ano(Request,Response){

    },
    async Find_Cor(Request,Response){

    },
    async Find_Marca(Request,Response){

    }
}