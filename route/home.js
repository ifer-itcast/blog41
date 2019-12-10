const express = require('express');

const admin = express.Router();

admin.get('/', (req, res) => {
    res.send('欢迎访问前台展示页面');
});

module.exports = admin;