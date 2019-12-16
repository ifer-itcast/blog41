const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const config = require('config');

module.exports = () => session({
    secret: '2019-11-15',
    saveUninitialized: false, // 注意这里的登录页面要是通过模板引擎渲染的，而不是作为静态资源存在！未登录时不要生成 connect.id
    resave: false, // 是否每次请求都会重置 cookie 的过期时间，通过数据库中 sessions 集合中每条文档下的 session 字段可以查看
    cookie: {
        maxAge: 24 * 60 * 60 * 1000 // 前端 cookie 一天后过期
    },
    store: new MongoStore({
        url: `mongodb://${config.get('db.user')}:${config.get('db.pwd')}@${config.get('db.host')}:${config.get('db.port')}/${config.get('db.name')}`,
        autoRemoveInterval: 5 // 每 5 分钟去数据库中删除过期的 session，根据文档中的 session 字段下的 cookie 过期时间去删除
    })
});