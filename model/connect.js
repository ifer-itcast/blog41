const mongoose = require('mongoose');
const config = require('config');
// 192.168.74.62
// 'mongodb://ifer:ifer@localhost/blog41'
mongoose.connect(`mongodb://${config.get('db.user')}:${config.get('db.pwd')}@${config.get('db.host')}:${config.get('db.port')}/${config.get('db.name')}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('~~~~~~~~~~~~~~~~~~~~~~连接数据库成功~~~~~~~~~~~~~~~~~~~~~~')).catch(err => console.log(err, '连接数据库失败'));

