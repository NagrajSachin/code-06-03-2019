const express = require('express');
const bodyParser = require('body-parser');
const Branch = require('../models/branches');
const Agents = require('../models/agents');
const Customers = require('../models/customers');
const router = express.Router();

router.use(bodyParser.json());

router.route('/')
    .get(async (req, res, next) => {
        res.render('home');
    });

//sample api's to test     
router.route('/branches')
    .get(async (req, res, next) => {
        const b1 = await Branch.find();
        res.send(b1);
    });

    router.route('/agents')
    .get(async (req, res, next) => {
        const b1 = await Agents.find();
        res.send(b1);
    });
    
    router.route('/customers')
    .get(async (req, res, next) => {
        const b1 = await Customers.find();
        res.send(b1);
    });

module.exports = router;
