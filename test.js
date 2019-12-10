const crypto = require('crypto');

// 1. 加密算法、秘钥
const hmac = crypto.createHmac('sha256', 'secret-key');

// 2. 加密内容
hmac.update('123456');

// 3. 加密结果
let res = hmac.digest('hex'); // 419ae45f96afc274e3d804e4e905e4e35d727d622580602a5fc05b641ce1e5b6

console.log(res);