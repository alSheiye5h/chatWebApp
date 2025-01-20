const Router = require('express').Router();

const {login} = require("../controllers/login")



Router.route('/login').post(login)



module.exports = Router