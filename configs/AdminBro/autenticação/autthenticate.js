const bcrypt = require("bcrypt")
const Administrador = require('../../../models/Administrador/AdministradorModel')
module.exports = {
    async auth (email, password){
        const Admin  = await Administrador.findOne({ email })
    
        if(Admin){
               
          const batem = await bcrypt.compare(password, Admin.encryptedPassword)
    
          if(batem){
            
            return Admin
          }
        }
        return false
    }
}
