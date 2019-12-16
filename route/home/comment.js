const Comment = require('../../model/comment');

module.exports = async (req, res) => {
    const {uid, aid, content} = req.body;

    // 添加评论相关的信息到数据库
    await Comment.create({uid, aid, content, time: new Date()});

    // 添加成功之后跳转到当前页，把文章 ID 传递过去是为了查询当前文章详情和评论信息
    res.redirect('/home/article?id=' + aid);
};