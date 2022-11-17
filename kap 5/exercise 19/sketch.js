function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);
  
  
}
let x=0
function draw() {
  background(220);
  x+=2;
  
  translate(width/2,height/2);
  
  rotate(x);
  line(-50,-40,50,-40);
  circle(0,0,50);
  circle(0,50,20);
}
//Tjek translate, rotate og shear inde under p5js/reference