const Cookie = require('./Cookie_parent.js');
const ButterCake = require('./butterCake.js')
const BoluCake = require('./BoluCake.js');
const SnowCake = require('./snowCake.js')
class Oven {
    constructor(name,duration,time) {
        this.name = name
        this.duration =  duration
        this.time = time
        this.condition = 'mentah'
        this.oven()
        
    }
    get getTime(){
        return this.time
    }
    get getduration(){
        return this.duration
    }
    oven (){
        let count = 0
        for(let i = 0; i <this.getTime; i++){
            count++
            if(count < this.getduration){
                this.condition = 'belum mateng'
            }
            else if(count >= this.getduration - 2 && count <= this.getduration + 1 ){
                this.condition = 'sudah matang ayo di angkat'
            }else{
                this.condition  = 'gosong buu'
            }
            if(count % 5 == 0 || count == this.durasi) {
                console.log(`kue ${this.name}, menit ke ${count} : ${this.condition}`)
            }
        }
      

    }
}


let oven = new BoluCake('bolucake',20,25)
let newsnowCake = new SnowCake('snowcake',20,16)
let newoven = new Oven(oven.name,oven.duration,oven.time)
console.log(oven)
let newovensnow = new Oven(newsnowCake.name,newsnowCake.duration,newsnowCake.time)
console.log(newoven)
