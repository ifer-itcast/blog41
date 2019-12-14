const mongoose = require('mongoose');
// 192.168.74.62
mongoose.connect('mongodb://ifer:ifer@localhost/blog41', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('~~~~~~~~~~~~~~~~~~~~~~连接数据库成功~~~~~~~~~~~~~~~~~~~~~~')).catch(err => console.log(err, '连接数据库失败'));

