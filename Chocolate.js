const Cookie = require('./Cookie')

class Chocolate extends Cookie {
    constructor(){
        super()
        this._bakeTime = 20
    }
}

module.exports = Chocolate