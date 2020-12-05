const mongoose = require('mongoose');
const {adminBroOptions,router} = require('./admin');
const express = require("express");
const server = express();

server.use(adminBroOptions.options.rootPath, router);

const run = async () => {
  await mongoose.connect('mongodb://localhost/adminbroapp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

  await server.listen(5500, () => console.log("Server started"));
};

run();
