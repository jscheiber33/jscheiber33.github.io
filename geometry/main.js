var NUM_CIRCLES = 12;
var circleDiameter;

// Initial Triangle Variables
    x1 = 0;
    x2 = 20;
    x3 = 40;
    y1 = 0;
    y2 = 30;
    y3 = 0;

function setup() {
    createCanvas(480, 600);
    circleDiameter = width/NUM_CIRCLES;
}

function draw() {
    var isShifted = false;
    var circleRadius = circleDiameter/2;
    var x;
    var y = height;
    
    if(isShifted) {
        x = circleRadius;
    }
    else{
        x = 0;
    }
    
    for(y; y > 0; y++){
        if(isShifted) {
            x = circleRadius;
        }
        else{
            x = 0;
        }
        for(x; x < width; x++){
            ellipse(x, y, circleDiameter, circleDiameter);
            x = x + circleDiameter;
        }
        y = y - circleRadius;
        isShifted = !isShifted;
    }
}