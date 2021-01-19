const mongoose = require('mongoose')

const AdministradorSchema = mongoose.Schema({

    email: { 
        type: String, 
        required: true 
    },
    
    encryptedPassword: { 
        type: String, 
        required: true 
    },
})
module.exports =  mongoose.model('Administrador',AdministradorSchema)