const mongoose = require('mongoose');
const {adminBroOptions,router} = require('./controllers/AdminPro/AdminControllers');
const routers = require('./routes');
const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors')
const firebase = require('firebase/app')

  app.use(cors())
  app.use(adminBroOptions.options.rootPath, router);
  app.use(express.json())
  app.use(routers);
  app.use('/images', express.static(path.join(__dirname, 'images')))
  
const run = async () => {
  await mongoose.connect('mongodb+srv://ptkm1:87127186ab@cluster0.jkope.mongodb.net/marcas?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
  await app.listen(process.env.PORT || 5500, () => console.log("Server started"))

  (firebase.initializeApp({
      apiKey: "AIzaSyD39yRLVKbcw12JmPhL5gk5W8_c3qV-UWk",
      authDomain: "treino-6249d.firebaseapp.com",
      databaseURL: "https://treino-6249d.firebaseio.com",
      projectId: "treino-6249d",
      storageBucket: "treino-6249d.appspot.com",
      messagingSenderId: "929368419310",
      appId: "1:929368419310:web:9fb4eca6295f685e09bcff"
    }))()
};
run()
