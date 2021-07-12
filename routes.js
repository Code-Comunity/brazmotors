const Acessorios = require('./controllers/Acessorios/AcessoriosControllers')
const Carros = require('./controllers/Carros/CarrosControllers')
const Marcas = require('./controllers/Marcas/MarcasControllers')
const MecanicaPreventiva = require('./controllers/Mecanica_Preventiva/MecanicaPreventivaController')
const MecanicaEspecializada = require('./controllers/Mecanica_Especializada/MecanicaEspecializadaController')
const EsteticaAutomotiva = require('./controllers/Estética_Automotiva/EsteticaAutomotivaController')

const SlideImgs = require('./controllers/SlideImgs/SlideImgsController')

const AcessoriosAutomotivo_msg = require('./controllers/Mensagens/AcessoriosAutomotivosControllers') 
const Carros_msg = require('./controllers/Mensagens/CarrosControllers') 
const EsteticaAutomotiva_msg = require('./controllers/Mensagens/EsteticaAutomotivaControllers') 
const MecanicaEspecializada_msg = require('./controllers/Mensagens/MecanicaEspecializadaControllers') 
const MecanicaPreventiva_msg = require('./controllers/Mensagens/MecanicaPreventivaControllers') 

const {Router} = require('express')
const routers = Router()


// Rotas
    
    routers.get('/acessorios',Acessorios.FindAll)
    routers.get('/acessorios/:id',Acessorios.FindById)

    routers.get('/carros',Carros.FindAll)
    routers.get('/carros/:id',Carros.FindById)

    routers.get('/marcas',Marcas.FindAll)
    routers.get('/marcas/modelos/:id',Marcas.FindById)
    
    routers.get('/slideimgs', SlideImgs.FindAll)

    //Rotas dos Serviços automotivos

        routers.get('/mecanica-preventiva',MecanicaPreventiva.FindAll)
        routers.get('/mecanica-preventiva/:id',MecanicaPreventiva.FindById)

        routers.get('/mecanica-especializada',MecanicaEspecializada.FindAll)
        routers.get('/mecanica-especializada/:id',MecanicaEspecializada.FindById)
        
        routers.get('/estetica-automotiva',EsteticaAutomotiva.FindAll)
        routers.get('/estetica-automotiva/:id',EsteticaAutomotiva.FindById)
    
    //
    // Rotas das Mensagens
    
        routers.post('/mensagem/MecanicaPreventiva',MecanicaPreventiva_msg.Create)
        routers.post('/mensagem/MecanicaEspecializada',MecanicaEspecializada_msg.Create)
        routers.post('/mensagem/EsteticaAutomotiva',EsteticaAutomotiva_msg.Create)
        routers.post('/mensagem/Veiculo',Carros_msg.Create)
        routers.post('/mensagem/AcessoriosAutomotivo',AcessoriosAutomotivo_msg.Create)


    //


module.exports = routers
