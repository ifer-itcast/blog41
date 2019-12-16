module.exports = (req, res) => {
    // 销毁session
    req.session.destroy(function() {
        // 删除前端 Cookie
        res.clearCookie('connect.sid');
        // 跳转到登录页
        res.redirect('/admin/login');
    });
};