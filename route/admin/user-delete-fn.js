const {User} = require('../../model/user');

module.exports = async (req, res) => {
    const _id = req.query.id;
    // 根据 id 进行删除
    await User.findOneAndDelete({_id});
    // 删除用户后跳转到当前页面，注意跳转后会再次出发 /admin/user GET 请求，所以会显示删除后的数据
    res.redirect('/admin/user');
};