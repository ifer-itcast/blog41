module.exports = (req, res) => {
    res.render('admin/article-edit', {
        id: req.session.userid,
        username: req.session.username
    });
};