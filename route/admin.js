const express = require('express');
const admin = express.Router();

// 登录页面
admin.get('/login', require('./admin/loginPage'));
// 用户管理页面
admin.get('/user', require('./admin/userPage'));
// 登录功能
admin.post('/login', require('./admin/login'));
// 退出功能
admin.get('/logout', require('./admin/logout'));

// 新增用户页面
admin.get('/user-edit', require('./admin/user-edit'));
// 新增用户功能
admin.post('/user-edit', require('./admin/user-edit-fn'));
// 用户修改功能
admin.post('/user-modify', require('./admin/user-modify-fn'));
// 删除用户功能
admin.get('/delete', require('./admin/user-delete-fn'));
// 文章路由
admin.get('/article', require('./admin/articlePage'));
// 文章编辑页面
admin.get('/article-edit', require('./admin/article-edit'));
// 接收文章数据
admin.post('/article-edit', require('./admin/article-edit-fn'));

module.exports = admin;