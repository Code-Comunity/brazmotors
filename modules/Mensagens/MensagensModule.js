const mongoose = require('mongoose')

const MensagemSchema = mongoose.Schema({

    nome:{ type: String, required: true },
    email:{ type: String, required: true },
    telefone:Number,
    celular:Number,
    Mensagem:{ type: String, required: true },
    data:{ type: Date, default: Date.now }

})
const Mensagens = mongoose.model('Mensagens',MensagemSchema)
module.exports = Mensagens;