const express = require('express');

const admin = express.Router();

admin.get('/', require('./home/index'));
admin.get('/article', require('./home/article'));

// 评论
admin.post('/comment', require('./home/comment'));

module.exports = admin;