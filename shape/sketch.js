function setup() {
    createCanvas(windowWidth, windowHeight);
    noLoop()
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}


function draw() {
    background(0)

    noFill();
    const x = width / 2
    const y = height / 2

    stroke(255);
    // 直径
    const diameter = min(width, height) * 0.5

    circle(x, y, diameter);

    rect(x-diameter/2, y-diameter/2, diameter, diameter);
    
    triangle(x-diameter/2, y+diameter/2, x,y-diameter/2, x+diameter/2, y+diameter/2)
}