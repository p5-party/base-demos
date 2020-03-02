function setup() {
    createCanvas(windowWidth, windowHeight);
}

// 动态 resize
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}


function draw() {
    background('#000')

    const x = width / 2
    const y = height / 2

    // 直径
    const diameter = min(width, height) * 0.5

    fill('white')
    noStroke()

    circle(x, y, diameter);
}