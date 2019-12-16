module.exports = (req, res) => {
    // 直接渲染文章编辑页面
    res.render('admin/article-edit', {
        id: req.session.userid,
        username: req.session.username
    });
};