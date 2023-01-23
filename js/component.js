class Componenet {
    constructor(x, y, w, h, color) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        if(color) this.color = color
    }

    render() {
        const ctx = gameArea.context

        if(this.img) {
            ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
        }
        else if(this.color) {
            ctx.fillStyle = this.color
            ctx.fillRect(this.x, this.y, this.w, this.h)
        }
    }
}

class Holes extends Componenet {
    constructor() {
        super()
    }

    /*
    ctx.strokeRect(40, 50, 50, 50) //left
ctx.strokeRect(125, 85, 50, 50) //centerTop
ctx.strokeRect(125, 15, 50, 50) //centerBottom
ctx.strokeRect(210, 50, 50, 50) //right
    */
}


class Cats extends Componenet {
    constructor() {
        super()
    }

}

