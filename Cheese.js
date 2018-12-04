const Cookie = require('./Cookie')

class Cheese extends Cookie {
    constructor(){
        super()
        this._bakeTime = 35
    }
}

module.exports = Cheese