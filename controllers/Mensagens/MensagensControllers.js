const Mensagem = require('../../models/Mensagens/MensagensModule')
module.exports = {
    async Create(Request,Response) {
        
        const {nome,email,telefone,celular,mensagem} = Request.body

        const NovaMensagem = new Mensagem({
            nome: nome,
            email: email,
            telefone: telefone,
            celular: celular,
            mensagem: mensagem
        })

        NovaMensagem.save().then((data)=>{Response.json(data)}).catch((err)=>{Response.json(err)})

    }
}
