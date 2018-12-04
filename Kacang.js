const Cookie = require('./Cookie')

class Kacang extends Cookie {
    constructor(name, ingredients) {
        super(name, ingredients, 30)
        this.choco_chip_count = 200
    }
}

module.exports = Kacang