const formidable = require('formidable');
const path = require('path');
module.exports = (req, res) => {
    // 1. 初始化 form 表单对象
    let form = new formidable.IncomingForm();
    // 2. 配置上传文件的路径
    form.uploadDir = path.join(__dirname, '../', '../', 'public', 'uploads');
    // 3. 保持文件的后缀
    form.keepExtensions = true;
    // 4. 解析上传数据
    form.parse(req, function(err, fields, files) {
        res.send(files);
    });
};