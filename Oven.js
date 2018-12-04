class Oven {
    constructor() {
        this.tray = []
    }
    
    tambahkue(kue) {
        this.tray.push(kue)
    }


    bake(waktu) {
        if(this.tray.length < 0) {
            console.log(`silahkan tambahkan kue ke dalam tray`)
        } else {
            this.tray.forEach(cookie => {
                for (let i = 0 ; i <= waktu ; i+=5) {
                    if ( i < 10) {
                        cookie.status = "mentah"
                    } else if (  i < cookie.baketime -5 ) {
                        cookie.status = "hampir matang"
                    } else if (cookie.baketime === i) {
                        cookie.status = "matang"
                    } else if (cookie.baketime < i) {
                        cookie.status = "hangus"
                    }
                console.log(`${cookie.name}, menit ke ${i} : ${cookie.status}`)
                }
                console.log("===================================")
            })
        }
    }
}
module.exports = Oven