const mongoose = require('mongoose');
const hash = require('../utils/hash');
const Joi = require('joi');
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

const validateUser = con => {
    let schema = {
        username: Joi.string().min(2).max(12).required().error(new Error('用户名不符合规则')),
        email: Joi.string().email().error(new Error('邮箱格式不符合要求')),
        password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required().error(new Error('密码格式不符合要求')),
        role: Joi.string().valid('normal', 'admin').required().error(new Error('角色非法')),
        state: Joi.number().valid(0, 1).required().error(new Error('状态值非法'))
    };
    return Joi.validate(con, schema)
};

/* User.create({
    username: 'ifer',
    email: 'ifer@qq.com',
    password: hash('ifer'),
    role: 'admin',
    state: 0
}).then(res =>console.log(res)); */

module.exports = {
    User,
    validateUser
};