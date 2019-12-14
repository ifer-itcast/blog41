const {Article} = require('../../model/article');
const pagination = require('mongoose-sex-page');

module.exports = async (req, res) => {
    let aritcles = await pagination(Article).find().populate('author').page(1).size(2).display(5).exec();
    res.render('home/default', {aritcles});
}