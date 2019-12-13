const {User} = require('../../model/user');
module.exports = async (req, res, next) => {
    const {id} = req.query;
    const {password} = req.body; // 传过来的所有信息

    // 根据 id 查询当前用户的信息
    const user = await User.findOne({_id: id});
    // 判断用户传递过来的密码是否和查询出来的密码一致
    
    if(password === user.password) {
        // 如果一致则允许修改
    } else {
        // 否则不允许修改
        next(JSON.stringify({path: '/admin/user-edit', message: '密码不一致', id}));
    }
};