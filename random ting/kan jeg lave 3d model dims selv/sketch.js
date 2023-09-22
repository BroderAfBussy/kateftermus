
function setup() {
  createCanvas(400, 400);
 
  kasse = new BoxMaker(200,200,100,100,100);

  console.log(cos(0.25*PI))
}

function draw() {
  background(220);



  /*
  beginShape();
  vertex(200,100);
  vertex(300,150);
  vertex(200,200);
  vertex(100,150);
  vertex(200,100);
  endShape();

  beginShape();
  vertex(300,150);
  vertex(300,250);
  vertex(200,300);
  vertex(200,200);
  vertex(300,150);
  endShape();

  beginShape();
  vertex(100,150);
  vertex(100,250);
  vertex(200,300);
  vertex(200,200);
  vertex(100,150);
  endShape();

  line(0,150,400,150);
  line(100,0,100,400);  
  */

  kasse.drawBox();
}



class BoxMaker {
  constructor( posX , posY , x , y , z){
    this.posX = posX;
    this.posY = posY;

    this.x = x;
    this.y = y;
    this.z = z;
  }

  drawBox(){
    //top face
    beginShape();
    vertex(this.posX,this.posY);
    vertex(this.posX+this.x*cos(0.25*PI),this.posY+this.y*sin(0.25*PI));
    vertex()
    endShape();

  }
  




}

