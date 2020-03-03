function setup() {
    createCanvas(windowWidth, windowHeight)
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}

function draw() {
    background(0)

    // 计算一个介于两个数字之间所定义的插值量位置的数字
    // unity3D中也存在这个函数  -- 线性插值函数
    // lerp(a,b,f)  = (1-f)*a+b*f   
    // 所以当f为0时返回的是a  f为1时 返回的是b  所以第三个参数应该是取一个 0~1的渐变值

    const dim = Math.min(width, height);

    // Set up stroke and disable fill
    strokeJoin(ROUND);
    strokeWeight(dim * 0.015);
    stroke(255);
    noFill();


    const time = millis() / 1000;

    // Loop duration 持续时间
    const duration = 4;

    const playhead = time / duration % 1;

    // 固定的起始和终止节点
    const start = [width * 0.25, height / 2];
    const end = [width * 0.75, height / 2];


    // sin 的值为0-1, 1
    // 因此 t0 是 0，1
    // 满足lerp函数的参数amt的参数规则
    let t0 = sin(playhead * PI * 2);
    // Now we map the -1..1 to 0..1 values
    t0 = t0 * 0.5 + 0.5;    

    
    // 可以参考维基百科的lerp函数的计算方法
    const x = lerp(start[0], end[0], t0);
    const y = start[1]
    
    //  画一个圆
    const r = dim * 0.3;
    ellipse(x, y, r, r);

    // noLoop()

}