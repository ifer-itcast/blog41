const {Article} = require('../../model/article');

const Comment = require('../../model/comment');

module.exports = async (req, res) => {
    const _id = req.query.id; // 文章 id

    // 根据文章 ID 查询当前文章的详情
    let article = await Article.findOne({_id}).populate('author');

    // 根据文章 ID 查询当前文章下的所有评论
    let cms = await Comment.find({aid: _id}).populate('uid');

    // 文章ID没传或者写错了
    if(!article) {
        return res.redirect('/home');
    }
    // 渲染文章详情
    res.render('home/article', {article, username: req.session.username,userid: req.session.userid, cms});
}