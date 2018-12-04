const Cookie = require('./cookie_parent.js');

class Kacang extends Cookie {
    constructor(){
        super('kacang',30)
    }
}

module.exports = Kacang