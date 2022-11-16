function setup() {
  createCanvas(400, 400);
  
}

let vlin=0;
let xlin=0;

function draw() {
  background(220);
  vlin+=1;
  xlin+=2;
  for(let i=5;i>0;i--){
    line(0,vlin-i*10,width,vlin-i*10);
  }
  for(let i=5;i>0;i--){
    line(xlin-i*10,0,xlin-i*10,height)
  }

}
