const mongoose = require('mongoose')

const MensagemSchema = mongoose.Schema({

    nome:{
        type: String,
        required: true
    },
    email:{ 
        type: String, 
        required: true 
    },

    telefone: Number,

    celular: Number,

    mensagem:{ 
        type: String, 
        required: true 
    },
    assunto:{ 
        type: String,
        required: true
    },
    categoria:{
        type: String,
        required: true
    },
    data:{ 
        type: Date,
        default: Date.now 
    }

})
module.exports = mongoose.model('Mensagens',MensagemSchema)
