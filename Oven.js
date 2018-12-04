class Oven {
    constructor() {
        this.tray = [];
    }

    bake(time){
        if(this.tray.length == 0) {
            console.log(`Insert Cookie To Bake`)
        } else {
            for(let i = 0; i < this.tray.length; i++) {
                // console.log(this.tray[i]._bakeTime)
                for (let j = 5 ; j <= time; j+= 5) {
                    if(j === this.tray[i]._bakeTime) {
                        this.tray[i].status = 'DONE'
                    } else if( j > this.tray[i]._bakeTime) {
                        this.tray[i]._status = 'BURNT'
                    } else if(j < this.tray[i]._bakeTime - 5) {
                        this.tray[i].status = 'RAW' 
                    } else {
                        this.tray[i].status = 'ALMOST DONE'
                    }
                    console.log(`${this.tray[i].constructor.name} Cookie, minute ${j} : ${this.tray[i].status}`)
                }
                console.log('===========================================')
            }
        }
    }

    addToTray(cookie) {
        if(this.tray.length < 3) {
            this.tray.push(cookie)
        }
    }
}

module.exports = Oven
