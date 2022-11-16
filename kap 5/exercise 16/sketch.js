function setup() {
  createCanvas(400, 400);
  background(220);
  let liste=["Jonas","Magnus","David","Johnny","Sebastian","Bo","Katrine","Anna","Johan","Thor"];
console.log(liste[0].length);

for(let i=0;i<liste.length;i++){
  textSize(5*liste[i].length);
  text(liste[i],random(width-100),random(height-100))
}
}

function draw() {
  
  
}
