const express = require("express");
const aboutRouter = express.Router();

aboutRouter.get('/', function (request, response){
response.send({
author:"Emeshe Sotak",
group: "SA2",
v: "7",
date: "2019.12.17"
    });
});

module.exports = aboutRouter;