function setup() {
    createCanvas(windowWidth, windowHeight);

    // background 设置也可以放在 setup中
    // 只会初始化执行一次，设置canvas画布的颜色
    // 如果存在resizeCanvas，颜色配置会失效，需要在resize函数中配置背景
    // background(0);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);

    // background(0);
}

// function background1() {
//     background(...arguments)
//     console.log(111)
// }
/**
 * 只要画布生成一次，就会销毁原来的，执行新的draw
 */
function draw() {

    /**
     * 创建动态模糊的一种技巧
     * 不是用纯黑色来清除每一帧
     * 我们使用(N/255)%不透明度的黑色
     */
    background(0, 0, 0, 20);

    const dim = min(width, height);

    noFill();
    strokeWeight(dim * 0.015);
    stroke('red');


    // 可以更改 1000 属性
    const time = millis() / 1000;

    // 速度
    const speed = 0.25;

    // 角度
    const angle = time * PI * 2.0 * speed;

    const cx = width / 2;
    const cy = height / 2;

    // x 坐标
    // y 坐标
    const u = cos(angle);
    const v = sin(angle);


    // 以中心为原点的旋转的大小
    const radius = dim * 0.25;

    const px = cx + radius * u
    const py = cy + radius * v

    // 半径
    const r = dim * 0.1;

    circle(px, py, r)
    // noLoop()
}