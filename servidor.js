const mongoose = require('mongoose');
const {adminBroOptions,router} = require('./controllers/AdminPro/AdminControllers');
const routers = require('./routes');
const express = require('express');
const app = express();

  
  app.use(adminBroOptions.options.rootPath, router);

  app.use(express.json())

  app.use(routers);


const run = async () => {
  await mongoose.connect('mongodb+srv://ptkm1:87127186ab@cluster0.jkope.mongodb.net/marcas?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
  await app.listen(process.env.PORT || 5500, () => console.log("Server started"));
};
run();
