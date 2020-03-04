function setup() {
    createCanvas(windowWidth, windowHeight)
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}

function draw() {
    background(0)

    const dim = min(width, height)

    // 设置样式
    noFill();
    stroke(255);
    strokeJoin(BEVEL);
    strokeWeight(dim * 0.015);

    const px = width / 2
    const py = height / 2
    const r = dim / 3

    const time = millis() / 1000

    const amt = (sin(time / 4 * 2 * PI) + 1) / 2
    // 获取点的个数
    const points = lerp(2, 100, pow(amt, 2))

    // 偏移量，更接近收缩和扩展效果，而不是从某一个顶点展开
    const angle = amt * 2 * PI

    polygon(px,py,r,points,angle)
}

/**
 * @description 从某个顶点偏移量开始，创建一个多边形
 * @param {初始位置} x 
 * @param {初始位置} y 
 * @param {半径} r 
 * @param {点的个数} sides 
 * @param {初始偏移量} angle 
 */
function polygon(x, y, r, sides = 3, angle = 0) {
    beginShape()
    for (let i of sides) {
        // 不同顶点，出现不同的偏移量，逐渐递增
        const ra = angle + 2 * PI * i / sides
        vertex(cos(ra) * r + x, sin(ra) * r + y)
    }
    endShape(CLOSE)
}
