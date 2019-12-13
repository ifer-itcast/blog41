const {User} = require('../../model/user');

module.exports = async (req, res) => {
    req.app.locals.currentLink = 'user';
    const {message,id} = req.query;
    if(id) {
        let user = await User.findOne({_id: id});
        res.render('admin/user-edit', {
            message,
            user,
            buttonTxt: '修改',
            link: '/admin/user-modify?id='+id // 修改用户时传过去id用于查询信息
        });
    } else {
        res.render('admin/user-edit', {
            message,
            buttonTxt: '添加',
            link: '/admin/user-edit'
        });
    }
};