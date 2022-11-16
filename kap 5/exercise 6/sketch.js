function setup() {
  createCanvas(400, 400);
  background(220);

  let i=0
  while (i<5){
    fill(255,0,0);
    let x=random(400);
    let b=random(100);
    let y=random(400);
    let c=random(100);
    ellipse(x,y,b,c);
    i++;
  }
  for(let g=0;g<5;g++){
    fill(0,0,255);
    let x=random(400);
    let b=random(100);
    let y=random(400);
    let c=random(100);
    ellipse(x,y,b,c);
  }

}




function draw() {
 
}
