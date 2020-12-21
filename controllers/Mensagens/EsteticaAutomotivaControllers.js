
const Mensagem = require('../../models/Mensagens/MensagensModel')
const EsteticaAutomotiva = require('../../models/Estetica_Automotiva/EsteticaAutomotivaModel')

module.exports = {
    
    async Create(Request,Response) {
       
        const {id,nome,email,telefone,celular,mensagem} = Request.body

        const assunto = await EsteticaAutomotiva.findById({_id: id}).limit(10)

        console.log(assunto.titulo);

        const NovaMensagem = new Mensagem({
            nome: nome,
            email: email,
            telefone: telefone,
            celular: celular,
            mensagem: mensagem,
            assunto: assunto.titulo,
            categoria: "Estética Automotiva"
        })

        await NovaMensagem.save().then((data)=>{Response.json(data)}).catch((err)=>{Response.json(err)})
        
        return 
        
    }
}

