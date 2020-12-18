const mongoose = require('mongoose')

const EsteticaSchema = mongoose.Schema({
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
module.exports = mongoose.model('Estetica_automotiva',EsteticaSchema)