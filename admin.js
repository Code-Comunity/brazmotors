const AdminBro = require("admin-bro");
const AdminBroExpress = require("@admin-bro/express");
const AdminBroMongoose = require("@admin-bro/mongoose");
const Acessorios = require('./modules/Acessorios/AcessoriosModule')
const Carros = require('./modules/Carros/CarrosModule')
const Marcas = require('./modules/Marcas/MarcasModule')
const Mecanica = require('./modules/Mecanica_Servicos/MecanicaModule')
const Mensagens = require('./modules/Mensagens/MensagensModule')


AdminBro.registerAdapter(AdminBroMongoose);


const adminBroOptions = new AdminBro({
  resources: [Carros,Marcas,Acessorios,Mecanica,Mensagens],
  rootPath: "/admin"
});

const router = AdminBroExpress.buildRouter(adminBroOptions);

module.exports ={
  router:router,
  adminBroOptions:adminBroOptions
}