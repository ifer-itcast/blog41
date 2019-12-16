module.exports = (req, res, next) => {
    console.log(req.url, req.session.role, req.session.username, 233333);
    if(req.url !== '/login' && !req.session.username) {
        res.redirect('/admin/login');
    } else {
        let notEntry = ['/user', '/user-edit', '/article', '/article-edit'];
        if(req.session.role === 'normal' && notEntry.includes(req.url)) {
            return res.redirect('/home');
        }
        next();
    }
};