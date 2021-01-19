const Mensagem = require('../../models/Mensagens/MensagensModel')
const marcas = require('../../models/Marcas/MarcasModel')
const Carros = require('../../models/Carros/CarrosModel')

module.exports = {
    async Create(Request,Response) {
        
        const {id,nome,email,telefone,celular,mensagem} = Request.body
        
        const assunto = await Carros.findById({_id: id}).limit(10)
        const marca = await marcas.findById({_id: assunto.marca}).limit(10)

        const NovaMensagem = new Mensagem({
            nome: nome,
            email: email,
            telefone: telefone,
            celular: celular,
            mensagem: mensagem,
            assunto: assunto.nome + " - " + marca.nome + " - Versão: "+ assunto.versao,
            categoria: "Interesse por veiculo"
        })

            await NovaMensagem.save().then((data)=>{Response.json(data)}).catch((err)=>{Response.json(err)})

        return    
    }
}
