const {Article} = require('../../model/article');
const pagination = require('mongoose-sex-page');

module.exports = async (req, res) => {
    req.app.locals.currentLink = 'article';
    let page = req.query.page || 1;
    // page => 查询哪一页
    // size => 每页展示多少条
    // display => 展示多少页
    // exec => 执行前面的查询操作
    let articles = await pagination(Article).find().page(page).size(2).display(3).populate('author').exec();
    // res.send(articles);
    res.render('admin/article', {
        username: req.session.username,
        articles
    });
};