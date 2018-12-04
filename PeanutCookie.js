const Cookie = require('./Cookie')

class PeanutCookie extends Cookie {
  constructor() {
    super(30)
  }
}

module.exports = PeanutCookie