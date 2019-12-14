const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const dateFormat = require('dateformat');
const template = require('art-template');
const morgan = require('morgan');

// 配置格式化日期，在每一个模板文件中都能使用
template.defaults.imports.dateFormat = dateFormat;

require('./model/connect');
// require('./model/user');
app.use(bodyParser.urlencoded({extended: false}));
app.use(session({
    secret: 'test key',
    saveUninitialized: false,
    cookie: {
        maxAge: 24 * 60 * 60 * 1000
    }
}));

// 静态资源访问
app.use(express.static(path.join(__dirname, 'public')));
// 模板配置
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'art');
app.engine('art', require('express-art-template'));

const admin = require('./route/admin');
const home = require('./route/home');

if(process.env.NODE_ENV === 'development') {
    // 做开发环境的事情
    app.use(morgan('dev'));
} else {
    // 做生产环境的事情
}

// 登录拦截
app.use('/admin', require('./middleware/loginGuard'));

// 后台管理相关的路由
app.use('/admin', admin);
// 前台展示相关的路由
app.use('/home', home);

// 统一错误信息的处理
app.use((err, req, res, next) => {
    // {path: '/admin/user-modify',message: '错误提示', id: 'fdsfdsfd'}
    let obj = JSON.parse(err);
    let arr = [];
    for(let attr in obj) {
        if(attr != 'path') {
            arr.push(`${attr}=${obj[attr]}`);
        }
    }
    // [message='错误提示', id: 'fdsfds']
    // message=错误提示&id=fdsfds
    res.redirect(`${obj.path}?${arr.join('&')}`);
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));