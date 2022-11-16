function setup() {
  createCanvas(400, 400);
  background(220);
  let uligliste=[];
  let ligeliste=[];

  for(let i=0;i<100;i++){
  if(i%2==0){
    ligeliste.push(i);
    text(i,random(200,400),random(400));
  }
  else{
    uligliste.push(i);
    text(i,random(200),random(400));
  }
  }
  
}

function draw() {
  
}
