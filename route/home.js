const express = require('express');

const admin = express.Router();

admin.get('/', require('./home/index'));
admin.get('/article', require('./home/article'));

module.exports = admin;