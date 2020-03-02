function setup() {
    createCanvas(windowWidth, windowHeight);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    // 在默认下，p5.js 将会循环执行 draw() 内的代码
    // 不过 draw() 循环能使用 noLoop() 停止。在这情况下 draw() 循环可使用 loop() 函数恢复执
    background(0)

    const px = width / 2;
    const py = height / 2;

    noFill();
    stroke(255);

    const minDim = min(width, height);

    const size = minDim * 0.5;

    // 毫秒
    const time = millis() / 1000;

    // 持续时间
    const duration = 5;

    const playhead = time / duration % 1;

    const anim = sin(playhead * PI * 2) * 0.5 + 0.5;

    const thickness = minDim * 0.1 * anim;

    console.log(time, playhead, anim, thickness)

    // 定义线条、点及形状边线的宽度（粗度）。所有宽度单位都是像素。
    strokeWeight(thickness);

    // Draw a circle centred at (px, py)
    ellipse(px, py, size, size);
}