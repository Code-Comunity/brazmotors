const Acessorios = require('./controllers/Acessorios/AcessoriosControllers')
const Carros = require('./controllers/Carros/CarrosControllers')
const Marcas = require('./controllers/Marcas/MarcasControllers')
const MecanicaPreventiva = require('./controllers/Mecanica_Preventiva/MecanicaPreventivaController')
const MecanicaEspecializada = require('./controllers/Mecanica_Especializada/MecanicaEspecializadaController')
const EsteticaAutomotiva = require('./controllers/Estética_Automotiva/EsteticaAutomotivaController')
const Mensagens = require('./controllers/Mensagens/MensagensControllers') 
const {Router} = require('express')
const routers = Router()


// Rotas
    
    routers.get('/acessorios',Acessorios.FindAll)

    routers.get('/carros',Carros.FindAll)
    routers.get('/carros/:id',Carros.FindById)

    routers.get('/marcas',Marcas.FindAll)
    routers.get('/marcas/modelos/:id',Marcas.FindById)
    

    //Rotas dos Serviços automotivos

        routers.get('/mecanica-preventiva',MecanicaPreventiva.FindAll)
        routers.get('/mecanica-preventiva/:id',MecanicaPreventiva.FindById)

        routers.get('/mecanica-especializada',MecanicaEspecializada.FindAll)
        routers.get('/mecanica-especializada/:id',MecanicaEspecializada.FindById)
        
        routers.get('/estetica-automotiva',EsteticaAutomotiva.FindAll)
        routers.get('/estetica-automotiva/:id',EsteticaAutomotiva.FindById)
    
    //
    
    routers.post('/mensagem',Mensagens.Create)
//


module.exports = routers