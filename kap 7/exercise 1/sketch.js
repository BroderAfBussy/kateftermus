//OBS: dette er ikke opgave 1 i bogen, men noget vi skulle lave i klassen.
//Formålet med denne opgave er at lære om hvordan man bruger klasser.

let stamme;
let gran;
let stjerne;
let kugler;
let stjernerotation=0;
let ypos;
function setup() {
  createCanvas(400, 400);
  stamme = new Stamussy(width/2,100);
  gran = new Granussy(width/2,50,150,200);
  stjerne = new Stjernussy(width/2,150,15,30);
  kugler = new Kuglussy(50,10);
}

function draw() {
  translate(width,height);
  rotate(PI)
  background(220);
  stamme.show();
  gran.show();
  stjerne.show();
  kugler.show();
  
}

class Stamussy{
  constructor(c,th=100){
    
    this.x = c-25;
    this.w= 50
    this.h = th;
    
  }
  show(){
    push();
    fill(100,50,0);
    rect(this.x, 0, this.w, this.h)
    pop();
  }
}

class Granussy{
  constructor(c,y,w,h){
    this.x =c;
    this.y =y;
    this.w=w/2;
    this.h=h;
    this.hyp =sqrt(h^2 + this.w^2);
  }
  show(){
    push();
    fill(0,220,0)
    triangle(this.x-this.w, this.y, this.x+this.w, this.y, this.x, this.y+this.h);
    pop();
    
  }
}
class Stjernussy{
  constructor(x,y,r1,r2){
    this.x=x;
    this.y=y;
    this.r1=r1;
    this.r2=r2;
  }
  show(){
    push();
    
    fill(255,255,0)
    star(this.x,this.y,this.r1,this.r2,5)
    pop();
  }
}
class Kuglussy{
  constructor(amount,d=10){
    gran.y
    this.Tan=gran.h/gran.w;
    this.d=d;
    this.am=amount;
    
    
  }
  show(){
    push();
   
    fill(255,0,0);
    /*OBS: Slet senere
    Idé: Lav en liste med tilfældige punkter, som den så generer kuglerne ud fra. Eller noget.
    */
    for(let i=0;i<this.am;i++){
      ypos=random(10,100);
      circle(ypos/this.Tan , ypos , this.d);
      print(ypos/this.d);
    }
    pop();
  }
}


//Følgende kode er stjålet fra internettet og ændret, så stjernen vender den rigtige vej.
function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = stjernerotation*angle; a < TWO_PI+stjernerotation*angle; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

//function koordinatgenerering(ymax)