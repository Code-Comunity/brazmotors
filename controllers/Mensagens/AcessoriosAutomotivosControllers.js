const Mensagem = require('../../models/Mensagens/MensagensModel')
const Acessorios = require('../../models/Acessorios/AcessoriosModel')

module.exports = {
    async Create(Request,Response) {
        
        const {id,nome,email,telefone,celular,mensagem} = Request.body
        
        const assunto = await Acessorios.findById({_id: id}).limit(10)

        const NovaMensagem = new Mensagem({
            nome: nome,
            email: email,
            telefone: telefone,
            celular: celular,
            mensagem: mensagem,
            assunto: assunto.titulo,
            categoria: "Acessorios Automotivos"
        })

            await NovaMensagem.save().then((data)=>{Response.json(data)}).catch((err)=>{Response.json(err)})

        return    
    }
}
