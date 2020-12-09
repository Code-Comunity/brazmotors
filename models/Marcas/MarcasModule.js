const mongoose = require('mongoose')

const MarcaSchema = mongoose.Schema({
    nome:{
        type: String,
        required: true
    }
})
module.exports = mongoose.model('Marcas',MarcaSchema)