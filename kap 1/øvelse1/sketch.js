function setup() {
  createCanvas(400, 400);
  
}
let x=1;
let gamming=1;
function draw() {
  background(220);
  
  x=x+gamming;
  if(x>=width||x<=0) {
    gamming=gamming*-1;
  }
  
  circle(x,200,100);
  

}
