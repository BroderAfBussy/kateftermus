function setup() {
  createCanvas(800, 800);
  background(220);
  let sort=true;
  
  for(let x=-2;x<8;x++){
    sort=!sort;
    for(let y=-2;y<8;y++){
      rect(x*100,y*100,100);
      if (sort==true){
        fill(0);
        sort=!sort;
      }
      else{
        fill(255);
        sort=!sort;
      }
    }
      }
}

function draw() {
  
}
