const {User} = require('../../model/user');

module.exports = async (req, res) => {
    // 当前是用户相关的页面，做个标记，为了侧边栏的高亮处理用到了 'user'
    req.app.locals.currentLink = 'user';
    const {message,id} = req.query;
    if(id) {
        // id 存在说明是要修改
        let user = await User.findOne({_id: id});
        res.render('admin/user-edit', {
            message,
            user,
            buttonTxt: '修改',
            link: '/admin/user-modify?id='+id, // 修改用户时传过去id用于查询信息
            username: req.session.username
        });
    } else {
        // 否则是要添加
        res.render('admin/user-edit', {
            message,
            buttonTxt: '添加',
            link: '/admin/user-edit',
            username: req.session.username
        });
    }
};