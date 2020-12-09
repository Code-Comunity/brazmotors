const AdminBro = require("admin-bro");
const AdminBroExpress = require("@admin-bro/express");
const AdminBroMongoose = require("@admin-bro/mongoose");
const Acessorios = require('../../models/Acessorios/AcessoriosModule')
const Carros = require('../../models/Carros/CarrosModule')
const Marcas = require('../../models/Marcas/MarcasModule')
const Mecanica = require('../../models/Mecanica_Servicos/MecanicaModule')
const Mensagens = require('../../models/Mensagens/MensagensModule')


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