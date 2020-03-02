function setup() {
    createCanvas(windowWidth, windowHeight)
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}


function draw() {
    blendMode(BLEND)

    // Black background，先设置样式
    background(0)

    fill(255)

    // 从底下的图像中减去颜色
    blendMode(DIFFERENCE)

    // Center of screen
    const x = width / 2
    const y = height / 2

    // Fraction of screen dim
    const dim = min(width, height)
    const size = dim * 0.5

    // 将内容设置为中心点
    rectMode(CENTER)
    rect(x, y, size, size)

    // push() 函数将储存当时的绘画样式设置及变形，而 pop() 将恢复这些设置
    push()

    translate(size / 4, size / 4)
    ellipse(x, y, size, size)
    pop()

    push()
    translate(-size / 4, -size / 4)
    triangle(
        x, y - size / 2,
        x + size / 2, y + size / 2,
        x - size / 2, y + size / 2
    )
    pop()
}