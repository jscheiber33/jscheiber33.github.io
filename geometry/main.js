var NUM_CIRCLES = 12;
var circleDiameter;


function setup() {
    createCanvas(480, 600);
    circleDiameter = width/NUM_CIRCLES;
}

// function draw() {
//   ellipse(0, height/2, circleDiameter, circleDiameter);
//   ellipse(circleDiameter, height/2, circleDiameter, circleDiameter);
//   ellipse(2*circleDiameter, height/2, circleDiameter, circleDiameter);
//   ellipse(3*circleDiameter, height/2, circleDiameter, circleDiameter);
//   ellipse(4*circleDiameter, height/2, circleDiameter, circleDiameter);
//   ellipse(5*circleDiameter, height/2, circleDiameter, circleDiameter);
//   ellipse(6*circleDiameter, height/2, circleDiameter, circleDiameter);
//   ellipse(7*circleDiameter, height/2, circleDiameter, circleDiameter);
//   ellipse(8*circleDiameter, height/2, circleDiameter, circleDiameter);
// }

function draw() {
    var isShifted = false;
    var circleRadius = circleDiameter/2;
    
    if(isShifted) {
        x = circleRadius;
    }
    else{
        x = 0;
    }
    
    for(y = 0; y < height; y++){
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
        y = y + circleRadius;
        isShifted = !isShifted;
    }
}