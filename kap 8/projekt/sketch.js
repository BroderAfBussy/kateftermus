let x;
let y;
let r=10;
let r1=0.9;
let r2=0.9;
let mennesker=[];


function setup() {
  createCanvas(windowWidth, windowHeight);
  x=windowWidth/2;
  y=windowHeight/2;
  for (let i=0;i<50;i++){
  mennesker.push(new Menneske(random(r, windowWidth-r), random(r, windowHeight-r), r, random(-5, 5), random(-5, 5)));
  }

}




function draw() {
  background(220);
  
  
  for (let i = 0; i < mennesker.length; i++) {
    mennesker[i].draw();
    mennesker[i].collision1(windowWidth,windowHeight);
    for (let j = i+1 ; j<mennesker.length ; j++){
      mennesker[i].collision2(mennesker[j] , mennesker[j]);
    }
 }
  

}

class Menneske {
  constructor(x, y, radius, retning_x, retning_y) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.retning_x = retning_x;
    this.retning_y = retning_y;
    
    this.sick = random(0,1);
    if (this.sick>0.8){
      this.sick=true;
    }
    this.DOCTORR = random(0,1);
    if (this.DOCTORR>0.95){
      this.DOCTORR=true;
    }
  }
   
  draw() {
    if (this.DOCTORR==true) {
      fill(0,0,200);
    }
    else if(this.sick==true){
      fill(255,0,0)
    }
    else {fill(255);}
    
    circle(this.x, this.y, this.radius*2);
  }

  collision1(windowWidth, windowHeight) {
    if (this.x + this.radius > windowWidth) {
      this.retning_x = -this.retning_x;
      this.x--;
    }
    if (this.x - this.radius <= 0) {
      this.retning_x = -this.retning_x;
      this.x++;
    }
    if (this.y + this.radius > windowHeight) {
      this.retning_y = -this.retning_y;
      this.y--;
    }
    if (this.y - this.radius <= 0) {
      this.retning_y = -this.retning_y;
      this.y++;
    }
    this.x = this.x + this.retning_x;
    this.y = this.y + this.retning_y;
  }
  collision2 (other) {
    if (dist(this.x , this.y , other.x , other.y)>=r*2){}
    else if (this.x==other.x){
      
    }
    else if (this.y==other.y){}
    else {
      this.retning_x = -this.retning_x;
      this.retning_y = -this.retning_y;
      other.retning_x = -other.retning_x;
      other.retning_y = -other.retning_y;
      
      if (this.DOCTORR==true||other.DOCTORR==true){
        this.sick=false;
        other.sick=false;
        
      }
      if (other.sick==true||this.sick==true){
        this.sick=true;
        other.sick=true;
      }
      
      //forsøg på at undgå at folk bliver stuck i hinanden.
      if (this.x>other.x){
        this.x++;
      }
      else {this.x--;}
      if (this.y>other.y){
        this.y++;
      }
      else {this.y--;}
    }

  }

}

/*Svar på spørgsmål.

1. Hvorfor indgår radius i beregningerne for kollision med skærmens kant? 
Fordi circlens x- og ykoordinater er cirklens centrum, men vi vil gerne have den til at stoppe
før midten af cirklen rammer kanten. Derfor indgår radius, så cirklen vender om når cirkelperiferien rammer kanten.

2. Hvad sker der, hvis vi f.eks. sætter r1 eller r2 til et større tal?
Cirklen bevæger sig hurtigere i den givne retning (hvis r1, så vandret, hvis r2, så lodret).

3. Hvorfor ændrer vi fortegn på retningsvektorens ene koordinat ved kollision med lærreds vægge? 
For at få cirklen til at vende om...


*/