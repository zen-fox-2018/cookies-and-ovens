const Cookie = require('./Cookie')

class Coklat extends Cookie {
    constructor(name, ingredients) {
        super(name, ingredients, 20)
        this.peanut_count = 100
    }
}

module.exports = Coklat