const AdminBro = require("admin-bro");
const AdminBroExpress = require("@admin-bro/express");
const AdminBroMongoose = require("@admin-bro/mongoose");
const AuthConfig = require('../../configs/AdminBro/autenticação/autthenticate')
const AdminBroOptions = require('../../configs/AdminBro/Options/AdminBroOptions')

AdminBro.registerAdapter(AdminBroMongoose)

const adminBroOptions = new AdminBro(AdminBroOptions);

const router = AdminBroExpress.buildAuthenticatedRouter(adminBroOptions,{
  authenticate: AuthConfig.auth,
  cookiePassword: 'c0n7r0l3-@7',
})

module.exports ={
  router:router,
  adminBroOptions:adminBroOptions
}