class Oven {
    constructor() {
        this.cookie = []
    }

    add(data) {
        this.cookie.push(data)
    }

    startBake(time) {
        let minutes = 0
        while (minutes <= time) {
            console.log(`===== minutes: ${minutes} =====`);
            this.cookie.forEach(e => {
                console.log(`Kue ${e.constructor.name}, ${e.bake(minutes)}`);
            })
            minutes += 5
        }
    }

}

module.exports = Oven