const {Article} = require('../../model/article');

module.exports = async (req, res) => {
    const _id = req.query.id;

    let article = await Article.findOne({_id}).populate('author');

    res.render('home/article', {article, username: req.session.username});
}