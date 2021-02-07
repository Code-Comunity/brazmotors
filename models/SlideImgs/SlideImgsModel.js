const { FILE } = require('dns')
const mongoose = require('mongoose')

const SlideSchema = mongoose.Schema({
  imagem: {
    type: String,
  },
  nome:{
    type: String,
  }
})

module.exports = mongoose.model('SlideSchema',SlideSchema)