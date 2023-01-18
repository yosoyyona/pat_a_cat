const myGameArea = {
    canvas: document.createElement('canvas'),

    generateCanvas: function () {
        this.canvas.width = 500; //vw 안되는가봄?
        this.canvas.height = 500; //vh
        this.context = this.canvas.getContext('2d');
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    },
}