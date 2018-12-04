const Cookie = require('./Cookie')

class Keju extends Cookie {
    constructor(name, ingredients) {
        super(name, ingredients, 35)
        this.other_count = 150
    }
}

module.exports = Keju