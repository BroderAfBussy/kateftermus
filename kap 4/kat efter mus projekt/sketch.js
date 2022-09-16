let a,b,d,x,y,speed;

let x2, y2;

function setup() {
  createCanvas(600, 600);
  d=50;
  x=width/2;
  y=height/2;
  speed=10;
  a=0;
  b=0;
  x2=width/3;
  y2=height/3;
}


function draw() {
  background(220);
  borderCheck();
  

  //din far

  image(img,x,y,d,d);
  x+=a;
  y+=b;

  image(img2,x2,y2,d*2,d*2);
  if (x-x2>=0) {
  x2 += sqrt(x-x2)/2;
  }
  else {
    x2 -= sqrt(x2-x)/2;
  }
  if(y-y2>=0){
  y2 += sqrt(y-y2)/2;
  }
  else {
    y2 -=sqrt(y2-y)/2;
  }
  

}






function borderCheck() {
  if (x + d / 2 >= width) {
    a = -a;
    
  }
  if (x - d / 2 <= 0) {
    a = speed;
    
  }
  if (y + d / 2 >= height) {
    
    b = -speed;
  }
  if (y - d / 2 < 0) {
    
    b = speed;
  }
 }

 function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    b = speed;
    a = 0;
    
  }
  if (keyCode === UP_ARROW) {
    b = -speed;
    a = 0;
  }
  if (keyCode === LEFT_ARROW) {
    b = 0;
    a = -speed;
  }
  if (keyCode === RIGHT_ARROW) {
    b = 0;
    a = speed;
  }
 }

 function preload() {
  img = loadImage('rat.png');
  img2 = loadImage('cat.png');
 }
 