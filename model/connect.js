const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/blog41', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('连接数据库成功')).catch(err => console.log(err, '连接数据库失败'));

