const mongoose = require('mongoose')

const AcessoriosSchema = mongoose.Schema({
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
const Acessorios = mongoose.model('Acessorios',AcessoriosSchema)
module.exports = Acessorios;