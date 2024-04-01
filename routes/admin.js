

const express = require('express');
const {login} = require('../controllers/admin/login');

const adminRouter = express.Router();


adminRouter.post('/login', login);

module.exports = {
    adminRouter
}