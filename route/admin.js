const express = require('express');
const admin = express.Router();

admin.get('/login', require('./admin/loginPage'));
admin.get('/user', require('./admin/userPage'));
admin.post('/login', require('./admin/login'));
admin.get('/logout', require('./admin/logout'));

module.exports = admin;