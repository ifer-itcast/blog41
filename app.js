const express = require('express');
const app = express();
const path = require('path');

require('./model/connect');

// 静态资源访问
app.use(express.static(path.join(__dirname, 'public')));
// 模板配置
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'art');
app.engine('art', require('express-art-template'));

const admin = require('./route/admin');
const home = require('./route/home');

// 后台管理相关的路由
app.use('/admin', admin);
// 前台展示相关的路由
app.use('/home', home);

app.listen(3000, () => console.log('Server running on http://localhost:3000'));