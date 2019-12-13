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

admin.get('/delete', require('./admin/user-delete-fn'));

// 文章路由
admin.get('/article', require('./admin/articlePage'));
admin.get('/article-edit', require('./admin/article-edit'));
// 接收文章数据
admin.post('/article-edit', require('./admin/article-edit-fn'));

module.exports = admin;