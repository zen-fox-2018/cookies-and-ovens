class Cookie {
  constructor(cookieName) {
    this.name = cookieName
    this.timeDone = 10
    this.status = "mentah"
  }
}

class Coklat extends Cookie {
  constructor() {
    super('Kue Coklat')
    this.timeDone = 20
  }
}

class Kacang extends Cookie{
  constructor() {
    super('Kue Kacang')
    this.timeDone = 30
  }
}

class Keju extends Cookie{
  constructor() {
    super('Kue Keju')
    this.timeDone = 35
  }
}

module.exports = {Cookie, Coklat, Kacang, Keju}