function setup() {
    createCanvas(windowWidth, windowHeight);
}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}


function draw() {
    background(0)

    const dim = Math.min(width, height);

    // 形状的属性
    // 定义线条连接的风格。这些链接可以是尖角、斜角或圆角
    strokeJoin(ROUND);
    strokeWeight(dim * 0.015);
    stroke(255);
    noFill();

    const time = millis() / 1000;

    const duration = 7;

    const playhead = time / duration % 1;

    // Get the rotation of a full circle
    const rotation = playhead * PI * 2;

    const x = width / 2;
    const y = height / 2;
    const size = dim * 0.5;

    push();
    translate(x, y);
    rotate(rotation);

    rectMode(CENTER);
    rect(0, 0, size, size);
    pop();

}