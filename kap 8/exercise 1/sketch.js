function setup() {
  createCanvas(400, 400);
}
let x=1;
let y=1;

function draw() {
  background(220);
  translate(width/2,height/2);
  scale(1,-1);
  
  
  line(-height/2,0,height/2,0);
  line(0,-width/2,0,width/2);
  
  circle(x,y,100);
  x++;
  y++;
  
  
  
  text(mouseX-width/2,-100 , 100);
  text(mouseY-height/2,-70, 100);

  
  
  
}
