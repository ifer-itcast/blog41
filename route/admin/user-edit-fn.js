const {User, validateUser} = require('../../model/user');
const hash = require('../../utils/hash');

module.exports = async (req, res, next) => {
    try {
        await validateUser(req.body);
    } catch(err) {
        // res.redirect(`/admin/user-edit?message=${err.message}`)
        return next(JSON.stringify({path: '/admin/user-edit', message: err.message}));
    }

    const user = await User.findOne({email: req.body.email});
    if(user) {
        // 说明之前已经有此邮箱
        return next(JSON.stringify({path: '/admin/user-edit', message: '此用户已经存在'}));;
    }
    // 允许添加
    req.body.password = hash(req.body.password);
    await User.create(req.body);
    res.redirect('/admin/user');
};