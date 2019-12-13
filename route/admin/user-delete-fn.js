const {User} = require('../../model/user');

module.exports = async (req, res) => {
    const _id = req.query.id;
    // 根据 id 进行删除
    await User.findOneAndDelete({_id});
    res.redirect('/admin/user');
};