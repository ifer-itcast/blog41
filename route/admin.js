const express = require('express');
const admin = express.Router();

admin.get('/login', require('./admin/loginPage'));
admin.get('/user', require('./admin/userPage'));
admin.post('/login', require('./admin/login'));
admin.get('/logout', require('./admin/logout'));

// 新增用户
admin.get('/user-edit', require('./admin/user-edit'));
admin.post('/user-edit', require('./admin/user-edit-fn'));

admin.post('/user-modify', require('./admin/user-modify-fn'));

module.exports = admin;