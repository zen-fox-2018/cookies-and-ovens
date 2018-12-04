const Cookie = require('./Cookie_parent.js')

class SnowCake extends Cookie{
    
        constructor(name,duration,time){
            super(name,duration,time)
            this.name = name 
            this.duration = duration 
            this.time = time 
        }
    
}

module.exports = SnowCake