const crypto = require('crypto');

module.exports = con => {
    // 1. 加密算法、秘钥
    const hmac = crypto.createHmac('sha256', 'secret-key');

    // 2. 加密内容
    hmac.update(con);

    // 3. 加密结果
    return hmac.digest('hex');
};