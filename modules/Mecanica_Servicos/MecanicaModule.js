const mongoose = require('mongoose')

const MecanicaSchema = mongoose.Schema({
    titulo:{
        type: String,
        required: true
    },
    descricao:{
        type: String,
        required: true
    },
    preco:{
        type: Number,
        required: true
    },
    imagem:{
        type: String,
        required: true
    }

})
const Mecanica = mongoose.model('Mecanica_Serviços',MecanicaSchema)
module.exports = Mecanica;