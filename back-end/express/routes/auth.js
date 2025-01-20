const Router = require('express').Router();

const login = require("../controllers/login")



Router.route('/login').get(login)



module.exports = {Router}