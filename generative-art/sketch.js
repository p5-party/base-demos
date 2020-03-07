function setup() {
    createCanvas(windowWidth, windowHeight);
}

// 动态 resize
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    background('#efefef')
    // background(0)

    const dim = min(width, height)
    let wd = dim / 2
    let x = width / 2
    let y = height / 2

    const initx = x - wd / 2
    const inity = y - wd / 2

    push()
    fill(255)
    noStroke();
    rect(initx - 10, inity - 10, wd + 20, wd + 20)

    pop()
    const count = 10
    // let width, 以及缩小倍数
    let h = wd / count / 1.5

    let arrs = []
    for (let i = 0; i < count; ++i) {
        arrs[i] = []
        for (let j = 0; j < count; ++j) {
            arrs[i][j] = new Generative(initx + i * 20, inity + j * 20, 10)
        }
    }
    arrs.forEach(v => {
        v.forEach(u => {
            u.draw()
        })
    })

    noLoop()
}

class Generative {
    constructor(x, y, h) {
        const colors = ["#1f1e24", "#b72015", "#3552ba", "#e1b806", "green"]
        this.borderRadius = Math.random() < .5 ? 0 : 10
        this.scale = Math.random(0.9, 1)
        this.bg = colors[Math.floor(Math.random() * colors.length)]
        this.x = x
        this.y = y
        this.h = h
    }
    /**
     * @param {*} x   中心的x轴 
     * @param {*} y   中心的y轴
     * @param {*} h   宽度
     */
    setShape(x, y, h) {
        this.x = x
        this.y = y
        this.h = h
    }
    draw() {
        push()
        noStroke();
        fill(this.bg)
        // scale(0.9);
        this.h *= this.scale
        if (this.borderRadius) {
            rect(this.x, this.y, this.h, this.h);
        } else {
            ellipseMode(CORNER)
            ellipse(this.x, this.y, this.h, this.h)
            // circle(this.x , this.y, this.h)
        }
        pop()
    }
}

function mouseClicked() {
    draw()
}