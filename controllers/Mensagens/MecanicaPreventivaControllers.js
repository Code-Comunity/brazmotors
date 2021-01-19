const Mensagem = require('../../models/Mensagens/MensagensModel')
const MecanicaEPreventiva = require('../../models/Mecanica_Preventiva/MecanicaPreventivaModel')

module.exports = {
    async Create(Request,Response) {
        
        const {id,nome,email,telefone,celular,mensagem} = Request.body
        const assunto = await MecanicaEPreventiva.findById({_id: id}).limit(10)

        const NovaMensagem = new Mensagem({
            nome: nome,
            email: email,
            telefone: telefone,
            celular: celular,
            mensagem: mensagem,
            assunto: assunto.titulo,
            categoria: "Mecânica Preventiva"
        })

        NovaMensagem.save().then((data)=>{Response.json(data)}).catch((err)=>{Response.json(err)})

    }
}

