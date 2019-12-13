const {User} = require('../../model/user');

module.exports = async (req, res) => {
    req.app.locals.currentLink = 'user';
    // 当前页码
    let page = req.query.page || 1;
    // 每一页显示多少条数据
    let pagesize = 2;
    // 查询数据库中的总的条数
    let count = await User.countDocuments();
    // 计算前端需要显示多少页
    let total = Math.ceil(count / pagesize);
    // 根据页码需要跳过多少条
    // 1 => 0
    // 2 => 2
    // 3 => 4
    let start = (page - 1) * pagesize;
    const users = await User.find().skip(start).limit(pagesize);
    res.render('admin/user', {
        username: req.session.username,
        users,
        total,
        page
    });
};