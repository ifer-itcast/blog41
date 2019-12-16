const formidable = require('formidable');
const path = require('path');
const {Article} = require('../../model/article');
module.exports = (req, res) => {
    // 1. 初始化 form 表单对象
    let form = new formidable.IncomingForm();
    // 2. 配置上传文件的路径
    form.uploadDir = path.join(__dirname, '../', '../', 'public', 'uploads');
    // 3. 保持文件的后缀
    form.keepExtensions = true;
    // 4. 解析上传数据
    form.parse(req, async function(err, fields, files) {
        // 普通数据在 fields 里面，文件（图片，压缩包等）在 files 里面
        let {title, author, publishDate, content} = fields;
        await Article.create({
            title,
            author,
            publishDate,
            cover: files.cover.path.split('public')[1], // 解析图片地址
            content
        });
        res.redirect('/admin/article');
    });
};