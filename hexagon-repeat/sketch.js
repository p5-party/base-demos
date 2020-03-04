function setup() {
    createCanvas(windowWidth, windowHeight);
}

// 动态 resize
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}


function draw() {
    background(0)

    const dim = min(width, height)
    const r = dim / 3

    const px = width / 2
    const py = height / 2

    // style
    noFill()
    stroke(255)

    // time
    const time = millis() / 1000
    
    // 六边形的数量
    const count = 10
    for (let i of count) {
        // 逐渐递增和递减
        const amt = sin(i/count + time) * 0.5 + 0.5
        // 每一次大小都不一样
        strokeWeight(lerp(r * 0.0001, r/10, amt))
        hexagon(px, py, r / count + i * r / count)
    }
    // noLoop()
}


function hexagon(x, y, r, angle = 0) {
    beginShape()
    const sides = 6
    for (let i of sides) {
        const ag = angle + TWO_PI * (i / sides);
        const px = x + cos(ag) * r
        const py = y + sin(ag) * r
        vertex(px, py)
    }

    endShape(CLOSE)
}