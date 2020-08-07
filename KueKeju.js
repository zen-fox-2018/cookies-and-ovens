const Kue = require('./Kue')
class KueKeju extends Kue {
    constructor() {
        super()
        this.name = 'Kue Keju'
        this.timeMasak = 35
    }
}

module.exports = KueKeju