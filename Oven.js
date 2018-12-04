class Oven {
    constructor() {
        this.pan = []
    }

    bake(time) {
        for (let i = 0; i < this.pan.length; i++) {
            console.log(`COOKIE ${this.pan[i].name} BEING COOKED`);

            for (let j = 0; j < time; j += 2) {
                if (j < this.pan[i].duration - 10) {
                    console.log(
                        `${this.pan[i].namaKue}, menit ke ${i} : Mentah`
                    );
                } else if (j == this.pan[i].duration) {
                    console.log(
                        `${this.pan[i].namaKue}, menit ke ${i} : Mateng`
                    );
                } else if (j < this.pan[i].duration - 5) {
                    console.log(
                        `${this.pan[i].namaKue}, menit ke ${i} : Hampir Mateng`
                    );
                } else if (j > this.pan[i].duration) {
                    console.log(
                        `${this.pan[i].namaKue}, menit ke ${i} : Goshongg`
                    );
                }
            }

        }
        return `COOKIE READY TO SERVE`
    }

    addCookie(cookieData) {
        this.pan.push(cookieData)
    }

}

module.exports = Oven







