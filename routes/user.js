const express = require('express');
const bodyParser = require('body-parser');
const User = require('../models/user');
const userRoute = express.Router();

userRoute.use(bodyParser.json());

userRoute.route('/signup')
    .get(async (req, res) => res.render('signup'));

userRoute.route('/login')
    .get(async (req, res) => res.render('login'));

module.exports = userRoute;

