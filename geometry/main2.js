var NUM_CIRCLES = 12;
var circleDiameter;
var stopplz = 0;
var isShifted;
var rVal;
var gVal;
var bVal;

// Initial Triangle Variables
    x1 = 0;
    x2 = 20;
    x3 = 40;
    y1 = 0;
    y2 = 30;
    y3 = 0;

function setup() {
    createCanvas(480, 600);
    
    frameRate(5);
    
    rVal = 255;
    gVal = 0;
    bVal = 0;
}

function draw() {

    for(uh = 0; uh < 10; uh++){
        for(i = 0; i < 10; i++){
    
            fill(color(rVal,gVal,bVal));
            stroke(color(0, 0, 0));
        
            triangle(x1, y1, x2, y2, x3, y3);
            
            x1 += 40;
            x2 += 40;
            x3 += 40;
                
        }
        
        y1 += 15;
        y2 += 15;
        y3 += 15;
            
        x1 = 0;
        x2 = 20;
        x3 = 40;
        
        i = 0;
        
        rVal = (rVal + 254) % 256;
        gVal = (gVal + 7) % 256;
        bVal = (bVal + 3) % 256;
        
    }
    
}