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
module.exports = mongoose.model('Mecanica_Preventiva',MecanicaSchema)