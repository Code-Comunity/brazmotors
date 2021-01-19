const AcessoriosAutomotivos = require('../../../models/Acessorios/AcessoriosModel')
const Veículos = require('../../../models/Carros/CarrosModel')
const Marcas = require('../../../models/Marcas/MarcasModel')
const Mensagens = require('../../../models/Mensagens/MensagensModel');
const MensgConfig = require('../../../configs/AdminBro/Resources/Mensagens')
const MecanicaEspecializada = require("../../../models/Mecanica_Especializada/MecanicaEspecializadaModel");
const MecanicaPreventiva = require("../../../models/Mecanica_Preventiva/MecanicaPreventivaModel");
const EsteticaAutomotiva = require("../../../models/Estetica_Automotiva/EsteticaAutomotivaModel")
const Administrador = require("../../../models/Administrador/AdministradorModel");
const AdminConfig = require('../../../configs/AdminBro/Resources/adminstrador')
const traducao = require('../../../configs/AdminBro/tradução/Pt-Br')
const sidebarGroups = require('../../../utils/sideBars')
const AdminBro = require('admin-bro')

module.exports = {
    resources: [
    {resource: Mensagens, options:MensgConfig.options},
    {resource: Administrador, options: AdminConfig.options},
    {resource: AcessoriosAutomotivos, options:{parent: sidebarGroups.company}},
    {resource: EsteticaAutomotiva, options:{parent: sidebarGroups.company}},
    {resource: MecanicaEspecializada, options:{parent: sidebarGroups.company}},
    {resource: MecanicaPreventiva, options:{parent: sidebarGroups.company}},
    {resource: Veículos, options:{parent: sidebarGroups.carro}},
    {resource: Marcas, options:{parent: sidebarGroups.carro}}],
    
    locale: traducao.locale,
        
    branding:{
    companyName: 'BrazMotors',
    logo: '../../images/Union.png',
    softwareBrothers: false
    },
    dashboard: {
        handler: async () => {
            return { some: 'output' }
          },
    component: AdminBro.bundle('../../../utils/components/home')
    
    },
    rootPath: "/admin",
}