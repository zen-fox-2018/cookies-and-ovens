class Cookie {
    constructor(name, time) {
        this.name = name
        this.time = time
    }
}

class PeanutButter extends Cookie { }

class ChocolateChip extends Cookie { }

module.exports = {PeanutButter, ChocolateChip}