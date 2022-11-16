
function setup() {
  createCanvas(400, 400);
  background(220);
  
  for(i=0;i<100;i++){
    
    if(i%2==0){
    var x = random(200);   }
    else {
      var x = random (200,400);   }
    
    let y = random(400);
    let r = random(100);
    print("dinmor");
    for(var f=i; f%2==0;f++){
      fill(255,0,0);
    }
    let c=f;
    while( i%2==1){
      fill(0,0,255);
      break;
    }
    
    
    
    circle(x,y,r);
    text(i,x,y);
    
    
  }
}


function draw() {
  
}
