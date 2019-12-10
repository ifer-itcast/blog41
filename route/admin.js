const express = require('express');
const {User} = require('../model/user');
const admin = express.Router();

admin.get('/login', (req, res) => {
    res.render('admin/login', {});
});

admin.get('/user', (req, res) => {
    res.render('admin/user', {});
});

admin.post('/login', async (req, res) => {
    const {email, password} = req.body;
    if(email.trim().length === 0 || password.trim().length === 0) {
        res.status(400).render('admin/error', {
            msg: '用户名或密码不能为空'
        });
    }
    const user = await User.findOne({email});

    if(user) {
        // 证明邮箱存在
        if(password == user.password) {
            // 才让登录
            res.send('登录成功');
        } else {
            res.status(400).render('admin/error', {
                msg: '密码错误'
            });
        }
    } else {
        // 证明邮箱根本不存在
        res.status(400).render('admin/error', {
            msg: '用户不存在'
        });
    }
});

module.exports = admin;