const express = require('express');

const admin = express.Router();

admin.get('/login', (req, res) => {
    res.render('admin/login', {});
});

admin.get('/user', (req, res) => {
    res.render('admin/user', {});
});

admin.post('/login', (req, res) => {
    const {email, password} = req.body;
    if(email.trim().length === 0 || password.trim().length === 0) {
        res.status(400).render('admin/error', {
            msg: '用户名或密码不能为空'
        });
    }
});

module.exports = admin;