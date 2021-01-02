const AdminBro = require("admin-bro");
const AdminBroExpress = require("@admin-bro/express");
const AdminBroMongoose = require("@admin-bro/mongoose");
const AcessoriosAutomotivos = require('../../models/Acessorios/AcessoriosModel')
const Veículos = require('../../models/Carros/CarrosModel')
const Marcas = require('../../models/Marcas/MarcasModel')
const Mensagens = require('../../models/Mensagens/MensagensModel');
const MecanicaEspecializada = require("../../models/Mecanica_Especializada/MecanicaEspecializadaModel");
const MecanicaPreventiva = require("../../models/Mecanica_Preventiva/MecanicaPreventivaModel");
const EsteticaAutomotiva = require("../../models/Estetica_Automotiva/EsteticaAutomotivaModel")
const Administrador = require("../../models/Administrador/AdministradorModel");
const bcrypt = require("bcrypt")


AdminBro.registerAdapter(AdminBroMongoose)

const sidebarGroups = {
  user: {
    name: 'Administradores',
    icon: 'User',
  },
  company: {
    name: 'Gestão de Serviços',
    icon: 'Product'
  },
  email: {
    name: 'Caixa de Email',
    icon: 'Email'
  },
  carro: {
    name: 'Concessionária ',
    icon: 'Car'
  }
};

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
              type: 'richtext',
              
            },
          } ,     
          actions:{
            show: false
          },
          parent: sidebarGroups.email
        },
       
      },
  {
    resource: Administrador, 

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
                request.payload = {
                  ...request.payload,
                  encryptedPassword: await bcrypt.hash(request.payload.password,10),
                  password: undefined,
                }
              }
              return request
            },
          }
        },
        parent: sidebarGroups.user
      }
    
    },{resource:AcessoriosAutomotivos, options:{parent: sidebarGroups.company}},
      {resource:EsteticaAutomotiva, options:{parent: sidebarGroups.company}},
      {resource:MecanicaEspecializada, options:{parent: sidebarGroups.company}},
      {resource:MecanicaPreventiva, options:{parent: sidebarGroups.company}},
      {resource:Veículos, options:{parent: sidebarGroups.carro}},
      {resource:Marcas, options:{parent: sidebarGroups.carro}}
      
      
      ,],
    
    branding:{

      companyName: 'BrazMotors',
    },
   
    rootPath: "/admin",
  
});

const router = AdminBroExpress.buildAuthenticatedRouter(adminBroOptions,{
  authenticate: async (email, password) => {
    const Admin  = await Administrador.findOne({ email })

    if(Admin){
      
      const batem = await bcrypt.compare(password, Admin.encryptedPassword)

      if(batem){
        
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