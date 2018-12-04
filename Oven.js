
class Oven {
    constructor(KueMasuk , setTime) {
        this.kueAtOven = KueMasuk
        this.startTime = 0
        this.setTime = setTime
    }

    masak() { 
        this.startTime += 5
    }

    getStatus(){
        for(let i = 0; i < this.kueAtOven.length; i++){
            if(this.startTime > this.kueAtOven[i].timeMasak){
                this.kueAtOven[i].status = 'hangus'
            } else if(this.startTime == this.kueAtOven[i].timeMasak){
                this.kueAtOven[i].status = 'matang'
            } else if(this.startTime >= this.kueAtOven[i].timeMasak - 5){
                this.kueAtOven[i].status = 'hampir matang'
            }
            console.log(`${this.kueAtOven[i].name}, menit ke ${this.startTime} : ${this,this.kueAtOven[i].status}`)
        }
    }

}

module.exports = Oven