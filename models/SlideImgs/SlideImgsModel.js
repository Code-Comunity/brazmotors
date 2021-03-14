const mongoose = require('mongoose')

const SlideSchema = mongoose.Schema({
  imagem: {
    type: String,
  }
})

module.exports = mongoose.model('SlideSchema',SlideSchema)