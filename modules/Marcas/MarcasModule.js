const mongoose = require('mongoose')

const MarcaSchema = mongoose.Schema({
    nome:{
        type: String,
        required: true
    }
    
})
const Marcas = mongoose.model('Marcas',MarcaSchema)
module.exports = Marcas;