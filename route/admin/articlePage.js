const {Article} = require('../../model/article');

module.exports = async (req, res) => {
    req.app.locals.currentLink = 'article';
    let articles = await Article.find().populate('author');
    res.render('admin/article', {
        username: req.session.username,
        articles
    });
};