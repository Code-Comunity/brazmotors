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
        type: String,
        required: true
    },
    preco:{
        type: Number,
        required: true
    },
    combustao:{
        type: String,
        required: true,       
    },
    versao:{
        type: String,
    },
    KM_rodados:{
        type: Number,
        required: true,
    },
    cambio:{
        type: String,
        required: true,
    },
    classificacao:{
        type: String,
        enum: ['Novo','Seminovo','Usado']
    },
    cor:{
        type: String,
        required: true
    },
    portas:{
        type: Number,
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
module.exports =  mongoose.model('Carros',CarroSchema)