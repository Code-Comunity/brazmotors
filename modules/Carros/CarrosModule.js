const mongoose = require('mongoose')

const CarroSchema = mongoose.Schema({
    nome:{
        type: String,
        required: true
    },
    descricao:{
        type: String,
        required: true
    },
    ano:{
        type: Number,
        required: true
    },
    preco:{
        type: Number,
        required: true
    },
    cor:{
        type: String,
        required: true
    },
    modelo:{
        type: String,
        required: true
    },
    marca:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Marcas'
    },
    imagem:{
        type: String,
        required: true
    }    

})
const Carros = mongoose.model('Carros',CarroSchema)
module.exports = Carros;