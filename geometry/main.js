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
    for(y = 0; y < height; y++){
        for(x = 0; x < width; x++){
            ellipse(x, y, circleDiameter, circleDiameter);
            x = x + circleDiameter;
        }
    y = y + circleDiameter;
    }
}