function setup() {
  createCanvas(400, 400);
  background(220);
  dobbelcirklussy(random(width),random(height),random(20,80),random(width),random(height),random(30,80))
}

function draw() {
  ;
}

function dobbelcirklussy (x1,y1,r1,x2,y2,r2){
  fill(255,0,0);
  circle(x1,y1,r1*2);
  fill(0,0,255);
  circle(x2,y2,r2*2);

  if (abs(x2-x1)-r1-r2<=0
      &&
      abs(y2-y1)-r1-r2<=0){
    console.log("DIN FAR ER FALSK!!!!");
    }
  else{
    console.log("DIN MOR ER SÅ SANDT!!!");
  }
}
