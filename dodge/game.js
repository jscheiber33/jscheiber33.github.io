var player;
var enemy;
var enemy2;
var enemy3;

var enemySpeed;
var enemySpeed2;
var enemySpeed3;

var isGameOver;

function setup() {
    isGameOver = false;
    createCanvas(250, 250)
    player = createSprite(width/2, height, 50, 50); // (x postition, y position, player width?, player height?)
    enemy = createSprite(width * .2, 25, 10, 30);
    enemy2 = createSprite(width * .8, 25, 10, 30);
    enemy3 = createSprite(width * .5, 25, 10, 30);
    enemySpeed = random(1, 2);
    enemySpeed2 = random(1, 2);
    enemySpeed3 = random(1, 2);
}

function draw() {
    if (isGameOver) {
        gameOver();
    } 
    else {
        if (enemy.overlap(player)) {
            isGameOver = true;
        }
    
        if(enemy2.overlap(player)){
            isGameOver = true;
        }
        
        if(enemy3.overlap(player)){
            isGameOver = true;
        }
    
        background(0, 0, 100);
        drawSprites();
        
        if (keyDown(RIGHT_ARROW) && player.position.x < (width - 25)) {
            player.position.x += 2;
        }
        
        else if (keyDown(LEFT_ARROW) && player.position.x > 25) {
            player.position.x -= 2;
        }
        
        if(enemy.position.y < height + 31){
            enemy.position.y += enemySpeed;
        }
        
        if(enemy.position.y > height){
            enemy.position.x = random(5, width - 5);
            enemy.position.y = -30;
            enemySpeed = random(3, 5);
        }
        
        if(enemy2.position.y < height + 31){
            enemy2.position.y += enemySpeed2;
        }
        
        if(enemy2.position.y > height){
            enemy2.position.x = random(5, width - 5);
            enemy2.position.y = -30;
            enemySpeed2 = random(3, 5);
        }
        
        if(enemy3.position.y < height + 31){
            enemy3.position.y += enemySpeed3;
        }
        
        if(enemy3.position.y > height){
            enemy3.position.x = random(5, width - 5);
            enemy3.position.y = -30;
            enemySpeed3 = random(3, 5);
        }
    }
}

function gameOver(){
    background(0);
    textAlign(CENTER);
    fill("white");
    text("Game Over", width/2, height/2);
    if(keyDown(CONTROL)){
        startOver();
    }
}

function startOver(){
    if(isGameOver){
        isGameOver = false;
        enemy.position.x = width * .25;
        enemy2.position.x = width * .5;
        enemy3.position.x = width * .75;
        enemy.position.y = -30;
        enemy2.position.y = -30;
        enemy3.position.y = -30;
    }
}
