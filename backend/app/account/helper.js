
const SHA256 = require('crypto-js/sha256');
const { APP_SECRETE } = require('../../secrets');


const hash = string => {
 return SHA256(`${ APP_SECRETE }${ string }${ APP_SECRETE }`).toString();
};

module.exports = { hash };
