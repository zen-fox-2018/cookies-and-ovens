const Cookie = require('./Cookie')

class Peanut extends Cookie {
    constructor(){
        super()
        this._bakeTime = 30
    }
}

module.exports = Peanut