function setup() {
  createCanvas(400, 400);
  background(255);
  console.log("din mor");
  for(let i=0;i<10;i++){
    console.log("din far");
    stroke(random(255),random(255),random(255));
    point(random(width),random(height));
    
  }
}

function draw() {
 
}
