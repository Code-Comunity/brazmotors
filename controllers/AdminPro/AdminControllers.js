const AdminBro = require("admin-bro");
const AdminBroExpress = require("@admin-bro/express");
const AdminBroMongoose = require("@admin-bro/mongoose");
const Acessorios = require('../../models/Acessorios/AcessoriosModule')
const Carros = require('../../models/Carros/CarrosModule')
const Marcas = require('../../models/Marcas/MarcasModule')
const Mensagens = require('../../models/Mensagens/MensagensModule');
const MecanicaEspecializada = require("../../models/Mecanica_Especializada/MecanicaEspecializadaModel");
const MecanicaPreventiva = require("../../models/Mecanica_Preventiva/MecanicaPreventivaModel");
const EsteticaAutomotiva = require("../../models/Estetica_Automotiva/EsteticaAutomotivaModel")
const Administrador = require("../../models/Administrador/AdministradorModel");
const bcrypt = require("bcrypt")


AdminBro.registerAdapter(AdminBroMongoose);


const adminBroOptions = new AdminBro({
  resources: [
    {
      resource: Mensagens,
        options: {
          properties: {

            data: {
              isVisible: { edit: false , list: true , show: true , filter: false}
            },
            mensagem:{
              type: 'richtext'
            },
          },
        }           
    },
  {
    resource: 
    Administrador, 
        options:{
          properties:{
              
            encryptedPassword:{
              isVisible: false,
            },
            
            password:{
              type: 'string',
              isVisible:{
                list: false, edit: true, filter: false, show: false,
              },
            },
          },
          actions:{
            new:{
              before: async(request)=>{
                if(request.payload.password){
                  console.log(request.payload.password);
                  request.payload = {
                    ...request.payload,
                    encryptedPassword: await bcrypt.hash(request.payload.password,10),
                    password: undefined,
                  }
                }
                return request
              },
            }
          }
      }},Marcas,Acessorios,EsteticaAutomotiva,MecanicaEspecializada,MecanicaPreventiva,Carros],
  rootPath: "/admin"
});

const router = AdminBroExpress.buildAuthenticatedRouter(adminBroOptions,{
  authenticate: async (email, password) => {
    const Admin  = await Administrador.findOne({ email })

    if(Admin){
      
      const batem = await bcrypt.compare(password, Admin.encryptedPassword)

      if(batem){
        console.log(password, Admin);
        return Admin
      }
    }
    return false
  },
  cookiePassword: 'c0n7r0l3-@7',
})

module.exports ={
  router:router,
  adminBroOptions:adminBroOptions
}