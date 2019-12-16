const {Article} = require('../../model/article');
const pagination = require('mongoose-sex-page');

module.exports = async (req, res) => {
    let page = req.query.page || 1;
    let article = await pagination(Article).find().populate('author').page(page).size(2).display(5).exec();
    // res.send(aritcles);
    res.render('home/default', {article});
}