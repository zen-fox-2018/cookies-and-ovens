class Oven {
  constructor() {
    this.tray = []
  }

  addCookie(cookie) {
    this.tray.push(cookie)
  }

  bake(timer) {
    let bakeTime = timer
    let longBake = 0
    let percentDone = 0
    while (bakeTime > 0) {
      bakeTime = bakeTime - 5
      longBake = timer - bakeTime
      this.tray.forEach(function(cookie) {
        percentDone = longBake/cookie.timeDone*100
        if (percentDone < 50) {
          cookie.status = 'mentah'
        }
        else if (percentDone >= 50 && percentDone < 100) {
          cookie.status = 'setengah matang'
        }
        else if (percentDone === 100) {
          cookie.status = 'matang'
        }
        else {
          cookie.status = 'hangus'
        }
        console.log(`${cookie.name}, menit ke ${timer - bakeTime} : ${cookie.status}`);
      })
      console.log('\n');
    }
  }
}

module.exports = Oven