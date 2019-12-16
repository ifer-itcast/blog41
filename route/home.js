const express = require('express');
const home = express.Router();

// 首页
home.get('/', require('./home/index'));
// 详情页
home.get('/article', require('./home/article'));

// 评论功能
home.post('/comment', require('./home/comment'));

module.exports = home;