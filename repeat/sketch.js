function setup() {
    createCanvas(windowWidth, windowHeight)
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}

function draw() {
    background(0)



    let dim = min(width, height)
    const x = width / 2
    const y = height / 2

    // color config
    stroke(255);
    strokeCap(ROUND);
    // weight config
    strokeWeight(dim * 0.0075);

    // fill config
    noFill()

    const r = x / 10

    const count = 6

    // 使用 for 循环 来实现 repeat
    for(let i of count) {
        console.log(i)
        circle(x-r*count/2+r*i, y, r)
    }
    noLoop()
}