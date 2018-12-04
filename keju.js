const Cookie = require('./cookie_parent.js');

class Keju extends Cookie {
    constructor(){
        super('keju', 35)
    }
}

module.exports = Keju