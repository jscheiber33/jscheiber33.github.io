var player;
var counter = 0;

var playerImage;
var backgroundImage;

var enemy;
var enemy2;
var enemy3;

var enemyImage;

var enemySpeed;
var enemySpeed2;
var enemySpeed3;

var enemy1StartPosition;
var enemy2StartPosition;
var enemy3StartPosition;

var isGameOver;

function preload() {
    backgroundImage = loadImage("https://surrogate.hackedu.us/i.imgur.com/aKQOg3G.png");
    playerImage = loadImage("https://surrogate.hackedu.us/i.imgur.com/N5uCbDu.png");
    enemyImage = loadImage("https://surrogate.hackedu.us/i.imgur.com/OdL0XPt.png");
    enemy2Image = loadImage("https://surrogate.hackedu.us/i.imgur.com/OdL0XPt.png");
    enemy3Image = loadImage("https://surrogate.hackedu.us/i.imgur.com/OdL0XPt.png");
}

function setup() {
    isGameOver = false;
    createCanvas(256, 512);
    
    enemy1StartPosition = random(.2, .8);
    enemy2StartPosition = random(.2, .8);
    enemy3StartPosition = random(.2, .8);
    
    player = createSprite(width/2, height-25, 0, 0); // (x postition, y position, player width?, player height?)
    player.addImage(playerImage);
    
    enemy = createSprite(width * enemy1StartPosition, -(enemyImage.height), 0, 0);
    enemy.addImage(enemyImage);
    enemy.rotationSpeed = 4.0;
    
    enemy2 = createSprite(width * enemy2StartPosition, -(enemyImage.height), 0, 0);
    enemy2.addImage(enemy2Image);
    enemy2.rotationSpeed = 4.0;
    
    enemy3 = createSprite(width * enemy3StartPosition, -(enemyImage.height), 0, 0);
    enemy3.addImage(enemy3Image);
    enemy3.rotationSpeed = 4.0;
    
    enemySpeed = random(1, 5);
    enemySpeed2 = random(1, 5);
    enemySpeed3 = random(1, 5);
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
    
        background(backgroundImage);
        drawSprites();
        
        textSize(32);
        fill("white");
        text("" + counter, width * 0.075, height * 0.1);
        
        if (keyDown(RIGHT_ARROW) && player.position.x < (width - (playerImage.width/2))) {
            player.position.x += 4;
        }
        
        else if (keyDown(LEFT_ARROW) && player.position.x > playerImage.width/2) {
            player.position.x -= 4;
        }
        
        if(enemy.position.y < height + enemy.height){
            enemy.position.y += enemySpeed;
        }
        
        if(enemy.position.y > height){
            enemyPositioner(1);
        }
        
        if(enemy2.position.y < height + enemyImage.height){
            enemy2.position.y += enemySpeed2;
        }
        
        if(enemy2.position.y > height){
            enemyPositioner(2);
        }
        
        if(enemy3.position.y < height + enemyImage.height){
            enemy3.position.y += enemySpeed3;
        }
        
        if(enemy3.position.y > height){
            enemyPositioner(3);
        }
    }
}

function gameOver(){
    background(0);
    textAlign(CENTER);
    fill("white");
    text("Game Over", width/2, height/2);
    text("End Score: " + counter, width/2, (height/2) + 15);
    if(keyDown(CONTROL)){
        startOver(1);
    }
}

function startOver(){
    if(isGameOver){
        isGameOver = false;
        counter = 0;
        enemyPositioner(10);
    }
}

function enemyPositioner(hi) {
    if(hi == 1){
        enemy.position.x = random(5, width - 5);
        enemy.position.y = -(enemy.height);
        enemySpeed = random(3, 10);
        counter += 1;
    }
    
    else if(hi == 2){
        enemy2.position.x = random(5, width - 5);
        enemy2.position.y = -(enemy.height);
        enemySpeed2 = random(3, 10);
        counter += 1;
    } 
    
    else if(hi == 3){
        enemy3.position.x = random(5, width - 5);
        enemy3.position.y = -(enemy.height);
        enemySpeed3 = random(3, 10);
        counter += 1;
    }
    else if(hi == 10){
        enemy1StartPosition = random(.2, .8);
        enemy2StartPosition = random(.2, .8);
        enemy3StartPosition = random(.2, .8);
        enemy.position.y = -(enemy.height);
        enemy2.position.y = -(enemy.height);
        enemy3.position.y = -(enemy.height);
    }
    else if(hi == 20){
        enemy1StartPosition = random(.2, .8);
        enemy2StartPosition = random(.2, .8);
        enemy3StartPosition = random(.2, .8);
    }
}
