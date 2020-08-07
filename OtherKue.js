const Kue = require('./Kue.js')

class OtherKue extends Kue{
    constructor(namaKue){
        super()
        this.name = namaKue
        this.timeMasak = 40
    }
}
module.exports = OtherKue