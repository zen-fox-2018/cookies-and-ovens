const Ingredients = require('./Ingredients')

class Cookie {
    constructor(name, ingredients, timeNeeded) {
        this.name = name
        this.status = "mentah"
        this.ingredients = this.obj(ingredients)
        this.has_sugar = this.checkSugar()
        this.timeNeeded = timeNeeded
    }

    bake(time) {
        if (time > this.timeNeeded) {
            return 'hangus'            
        } else if (time === this.timeNeeded) {
            return 'matang'
        } else if (time >= this.timeNeeded - 10) {
            return 'hampir matang'
        } else {
            return 'mentah'
        }
    }

    checkSugar() {
        let check = false
        this.ingredients.forEach(e => {
            if (e.name === 'sugar') {
                check = true
            }
        });
        return check
    }

    obj(ingredients) {
        let arrIngred = ingredients.split(', ')
        let objIngred = arrIngred.map(e => {
            e = e.split(' : ')
            return {name: e[1], amount: e[0]}
        })
        let cookieIngred = objIngred.map(e => {
            return new Ingredients(e)
        });
        return cookieIngred
    }
}

module.exports = Cookie