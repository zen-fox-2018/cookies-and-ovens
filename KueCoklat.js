const Kue = require('./Kue.js')

class KueCoklat extends Kue {
    constructor() {
        super()
        this.name = 'Kue Coklat'
        this.timeMasak = 20
    }
}

module.exports = KueCoklat
