class Cookie {
  constructor(time){
    this.name = this.constructor.name
    this.finished = time
    this.status = 'mentah'
  }
}

module.exports = Cookie