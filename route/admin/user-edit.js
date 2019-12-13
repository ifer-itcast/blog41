const {User} = require('../../model/user');

module.exports = async (req, res) => {
    const {message,id} = req.query;
    if(id) {
        let user = await User.findOne({_id: id});
        res.render('admin/user-edit', {
            message,
            user,
            buttonTxt: '修改',
            link: '/admin/user-modify'
        });
    } else {
        res.render('admin/user-edit', {
            message,
            buttonTxt: '添加',
            link: '/admin/user-edit'
        });
    }
};