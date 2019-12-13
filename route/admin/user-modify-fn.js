const {User} = require('../../model/user');
const hash = require('../../utils/hash');
module.exports = async (req, res, next) => {
    const {id} = req.query;
    const {password, username, email, role, state} = req.body; // 传过来的所有信息

    // 根据 id 查询当前用户的信息
    const user = await User.findOne({_id: id});
    // 判断用户传递过来的密码是否和查询出来的密码一致
    
    if(hash(password) === user.password) {
        // 如果一致则允许修改
        await User.updateOne({_id: id}, {
            username, email, role, state
        });
        res.redirect('/admin/user');
    } else {
        // 否则不允许修改
        next(JSON.stringify({path: '/admin/user-edit', message: '密码不一致', id}));
    }
};