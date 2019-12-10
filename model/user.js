const mongoose = require('mongoose');
const hash = require('../utils/hash');

// 规则
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true, // undefined、null
        minlength: 2,
        maxlength: 20
    },
    email: {
        type: String,
        unique: true // 保证邮箱唯一
    },
    password: {
        type: String,
        required: true
    },
    role: {
        // admin  => 管理员
        // normal => 普通用户
        type: String,
        required: true
    },
    state: {
        type: Number,
        default: 0 // 0 => 启用，1 => 禁用
    }
});

// 集合
const User = mongoose.model('User', userSchema);

/* User.create({
    username: 'ifer',
    email: 'ifer@qq.com',
    password: hash('ifer'),
    role: 'admin',
    state: 0
}).then(res =>console.log(res)); */

module.exports = {
    User
};