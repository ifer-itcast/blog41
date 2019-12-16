const {Article} = require('../../model/article');
const pagination = require('mongoose-sex-page');

module.exports = async (req, res) => {
    let page = req.query.page || 1;
    // 前台首页展示
    // page     => 当前页
    // size     => 当前页数量
    // display  => 显示多少页面
    // exec     => 执行前面的查询操作
    let article = await pagination(Article).find().populate('author').page(page).size(2).display(5).exec();
    // res.send(aritcles);
    res.render('home/default', {article, username: req.session.username});
}