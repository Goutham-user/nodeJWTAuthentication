require('dotenv').config();
require('../config/database').connect();

const express = require('express');
// const route = require('./Routes/router')
const registerUserController = require('../Controllers/registerUser');
const loginUserController = require('../Controllers/login');
const tokenValidatorController = require('../Controllers/welcome');
const auth = require('../middleware/auth');

const route = express.Router();

route.post('/register', registerUserController.registerUniqueUser);
route.post('/login', auth, loginUserController.loginUserValidation);
route.post('/welcome', auth, tokenValidatorController.tokenValidator)

module.exports = route;