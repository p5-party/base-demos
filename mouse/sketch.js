let px, py

function setup() {
    createCanvas(windowWidth, windowHeight);

    // Initial object position
    px = width / 2;
    py = height / 2;

    // Also use this as the initial mouse position
    // i.e. before the mouse has interacted with the canvas
    mouseX = width / 2;
    mouseY = height / 2;
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}


function draw() {
    background(0,20)

    const dim = min(width, height)
    // Unity官方给出的描述是：按照秒来计数，完成上一帧的时间，时间变化量
    // 通常，使用这个函数来产生与游戏帧速率无关的效果
    // 因此通过它可以让游戏对象按照一个常速进行旋转，而不是依赖于它的帧频
    // 这不仅使得游戏的运行独立于帧频，也使得运动的效果符合现实
    // 每一帧的时间是不同的
    const dt = deltaTime / 1000;

    const power = 1;
    // 向鼠标的方向移动
    px = spring(px, mouseX, power, dt);
    py = spring(py, mouseY, power, dt);

    // 填充白色的圆
    fill(255);
    const r0 = dim * 0.1;
    ellipse(px, py, r0, r0);

    // 画圈圈图
    noFill();
    stroke(255);
    strokeWeight(dim * 0.015);
    const r1 = r0 * 2;
    circle(mouseX,mouseY,r1)
    // noLoop()

}

function spring(a, b, power, dt) {
    return lerp(a, b, 1 - Math.exp(-power * dt));
}