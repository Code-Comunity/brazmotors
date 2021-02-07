module.exports = {
  RenderAll(dados){
    return(dados.map(SlideImg=>{
                return({
                    img: SlideImg.imagem
                })
            })
        )

  }
}