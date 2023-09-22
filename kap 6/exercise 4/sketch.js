function setup() {
  createCanvas(400, 400);
  r=random(20,80);
  
  background(220);
  
  
}
let r=40;
let x=200;
let y=200;

function draw() {
  background(220);
  circle(x,y,r*2);
}

function mousePressed(){
  print(sqrt(pow(mouseX-x,2)+pow(mouseY-y,2))-r);
  if(mouseButton==LEFT){
    if(sqrt(pow(mouseX-x,2)+pow(mouseY-y,2))<=r){
      console.log("gamer time :)");
    }
  }
  
}
