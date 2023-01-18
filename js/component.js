class Componenet {
    constructor(x, y, w, h, color) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        if(color) this.color = color
    }

    render() {
        const ctx = myGameArea.context

        if(this.img) {
            ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
        }
        else if(this.color) {
            ctx.fillStyle = this.color
            ctx.fillRect(this.x, this.y, this.w, this.h)
        }
    }
}