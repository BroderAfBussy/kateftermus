function setup() {
  createCanvas(400, 400);
  background(220);
  let a=0;
  while(a<5){
    fill(random(255),random(255),random(255));
    let s=random(10,40);
    square(random(400-s),random(400-s),s);
    a++;
  }
  for(let b=0;b<5;b++){
    fill(random(255),random(255),random(255));
    let s=random(10,40);
    square(random(400-s),random(400-s),s);
  }
}

function draw() {
  
}
