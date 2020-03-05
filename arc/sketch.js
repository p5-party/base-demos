let rings = []
function setup() {
    createCanvas(windowWidth, windowHeight)

    // 随机的个数产生
    const count = floor(random(10, 20))
    for(let i of count) {
        rings.push({
            sp:random(-1, 1),
            d:((i + 1) / count),
            len: random(PI / 20, PI * 2), // 按照最多20个进行计算
            ag: random(-PI * 2, PI * 2)
        })
    }
    console.log(rings)
}

// 动态 resize
function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}

function draw() {
    background(0)

    const dim = min(width, height)
    // style
    noFill()
    strokeWeight(dim * 0.015);
    strokeCap(ROUND);
    stroke(255);

    
    const count = 10
    for(let i of count ) {
        time = millis() / 1000

        const { sp,d,len,ag} = rings[i]
        const spin = time * sp
        arc(width/2,height/2,d*dim*0.8,d*dim*0.8,spin+ag, spin+ag+len*PI)

    }
}

