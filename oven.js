class Oven {
    constructor(name) {
        this.name = name
    }

    bake(time) {

        let start = 5;
        while (start <= time) {

            if (start < time / 2) {
                console.log(`${this.name}, menit ke ${start} : mentah`)
            } else if (start == time / 2) {
                console.log(`${this.name}, menit ke ${start} : hampir matang`)
            } else if (start > time / 2 && start < time) {
                console.log(`${this.name}, menit ke ${start} : matang`)
            } else if (start == time) {
                console.log(`${this.name}, menit ke ${start} : hangus`)
            }
            start += 5
        }

    }
}

module.exports = Oven