const Joi = require('joi');
const {User} = require('../../model/user');
const hash = require('../../utils/hash');

module.exports = async (req, res) => {
    let schema = {
        username: Joi.string().min(2).max(12).required().error(new Error('用户名不符合规则')),
        email: Joi.string().email().error(new Error('邮箱格式不符合要求')),
        password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required().error(new Error('密码格式不符合要求')),
        role: Joi.string().valid('normal', 'admin').required().error(new Error('角色非法')),
        state: Joi.number().valid(0, 1).required().error(new Error('状态值非法'))
    };

    try {
        await Joi.validate(req.body, schema);
    } catch(err) {
        return res.redirect(`/admin/user-edit?message=${err.message}`);
    }

    const user = await User.findOne({email: req.body.email});
    if(user) {
        // 说明之前已经有此邮箱
        return res.redirect(`/admin/user-edit?message=此用户已经存在`);
    }
    // 允许添加
    req.body.password = hash(req.body.password);
    await User.create(req.body);
    res.redirect('/admin/user');
};