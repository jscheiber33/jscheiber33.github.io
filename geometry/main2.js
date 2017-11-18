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
    // circleDiameter = width/NUM_CIRCLES;
}

function draw() {
    rVal = 242;
    gVal = 233;
    bVal = 12;
    
    fill(color(rVal,gVal,bVal));
    stroke(color(0, 0, 0));

    for(uh = 0; uh < 10; uh++){
        for(i = 0; i < 10; i++){
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
        
    }
    
}