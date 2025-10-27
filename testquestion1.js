let posX, xSpeed,direction;

function setup(){
    createCanvas(600, 400);
    background('cyan')
    posX = width/ 2;
    direction = "right"
    xSpeed = 5;
    fill('limegreen');
}
function draw(){
    createCanvas(600,400);
    background('cyan')
    fill('limegreen');
    circle(posX,height/2,50)
    posX += xSpeed
    if (posX - 50/2 <= 0 || posX + 50/2 >= width) {
        xSpeed *= -1;
    }

}
