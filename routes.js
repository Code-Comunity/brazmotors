const Acessorios = require('./controllers/Acessorios/AcessoriosControllers')
const Carros = require('./controllers/Carros/CarrosControllers')
const Marcas = require('./controllers/Marcas/MarcasControllers')
const Mecanica = require('./controllers/Mecanica_Serviços/MecanicaControllers')
const Mensagens = require('./controllers/Mensagens/MensagensControllers') 
const {Router} = require('express')
const routers = Router()


// Rotas
    routers.get('/acessorios',Acessorios.FindAll)

    routers.get('/carros',Carros.FindAll)
    routers.get('/carros/:id',Carros.FindById)

    routers.get('/marcas',Marcas.FindAll)
    routers.get('/marcas/modelos/:id',Marcas.FindById)
    
    routers.get('/mecanica/servicos',Mecanica.FindAll)
    
    routers.post('mensagem',Mensagens.Create)
//


module.exports = routers