module.exports = (req, res, next) => {
    // 访问的不是登录页面并且没有 session 信息，则跳转到登录页
    if(req.url !== '/login' && !req.session.username) {
        res.redirect('/admin/login');
    } else {
        let notEntry = ['/user', '/user-edit', '/article', '/article-edit'];
        // 如果是普通用户且访问的是后台管理相关的页面，直接打回到首页
        if(req.session.role === 'normal' && notEntry.includes(req.url)) {
            return res.redirect('/home');
        }
        next();
    }
};