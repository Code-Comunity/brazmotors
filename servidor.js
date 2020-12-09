const mongoose = require('mongoose');
const {adminBroOptions,router} = require('./controllers/AdminPro/AdminControllers');
const routers = require('./routes');
const express = require("express");
const app = express();

app.use(adminBroOptions.options.rootPath, router);
app.use(routers);

const run = async () => {
  await mongoose.connect('mongodb://localhost/adminbroapp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
  await app.listen(5500, () => console.log("Server started"));
};
run();
