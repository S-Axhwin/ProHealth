const express = require('express');

const Router = express.Router();
const authController = require("../controllers/auth-controllers");

Router.post("/patient/reg", authController.Preg);
Router.post("/patient/login", authController.Plogin);
//Router.post("/patient/login", authController.reg);
Router.post("/doctor/login", authController.Dreg);

module.exports = Router;