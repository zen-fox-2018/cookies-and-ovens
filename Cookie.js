class Cookie {
    constructor(){
        this._status = null
    }
    get status(){
        return this._status
    }
    set status(input){
        this._status = input
    }
}

module.exports = Cookie