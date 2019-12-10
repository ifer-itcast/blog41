const express = require('express');

const app = express();

const admin = require('./route/admin');
const home = require('./route/home');

// 后台管理相关的
app.use('/admin', admin);
app.use('/home', home);

app.listen(3000, () => console.log('Server running on http://localhost:3000'));