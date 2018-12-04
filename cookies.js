class Cookies {
  constructor(name, baked) {
    this.name = name
    this.status = 'mentah'
    this.baked = baked
  }
}

class CheeseCookies extends Cookies {
  constructor() {
    super('CheeseCookies', 35)
  }
}

class PeanutCookies extends Cookies {
  constructor() {
    super('PeanutCookies', 30)
  }
}

class ChocoCookies extends Cookies {
  constructor() {
    super('ChocoCookies', 20)
  }
}

module.exports = {Cookies, CheeseCookies, PeanutCookies, ChocoCookies}
