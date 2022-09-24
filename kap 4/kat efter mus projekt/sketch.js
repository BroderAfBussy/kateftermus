let a,b,d,x,y,speed; //musens x-hastighed, y-hastighed, diameter, x-koordinat, y-koordinat og generelle hastighed.
let musik; //Musikvariabel
let fanget; //variabel for sfx, der spiller når katten fanger musen
let x2, y2; //kattens koordinater
let d2; //kattens diameter
let musikspillet; //Bestemmer om musikken er startet endnu.
let spilstart; //Tjekker om spillet er startet.
let img, img2; //img er mus, img2 er kat.

function setup() {
  createCanvas(600, 600);
  song = loadSound('padoru.mp3'); //dette er baggrundsmusikken
  d=50; //musens størrelse
  d2=d*2; //katten er altid 2 gange større end musen
  x=width/2; //musen starter altid i midten af skærmen
  y=height/2;
  speed=5; //musens fart generelt
  a=0; //musens fart på x-aksen
  b=0; //musens fart på y-aksen
  x2=0; 
  y2=0; //katten starter altid i øverste højre hjørne
  textSize(50)
}

musikspillet=false; //variablen bestemmer

function draw() {
  background(220);
  borderCheck(); //kollisionsfunktion.
  
  if (spilstart == true){
    nekomove(1);
    if(musikspillet==false){
      musik.loop();
      
      musikspillet=true;
      /* Musikken ville ikke spille, hvis man ikke først havde trykket på en knap.
      Derfor har jeg lavet denne funktion.
      Den tjekker om musikken er blevet spillet, og hvis den ikke er, sætter den musik i gang.
      Og sætter musikspillet-variablen til true. */
    }
  }


  image(img,x,y,d,d); //musen tegnes.
  x+=a; 
  y+=b; 

  

    if(musikspillet==true && spilstart==false) {
      background(220);
    }
  
  image(img2,x2,y2,d2,d2); //Dette er katten.

  //Herunder tjekker if-statement'et om katten og musen er kollideret.
  if(x2-x<=d && x2-x>=-d2 && y2-y<=d && y2-y>=-d2 ) 
  {
    musik.stop();
    
    spilstart=false;
    speed=0;
    a=0;
    b=0;
    if(d2<width){
      if(x>0){
    x/=1.01;
    
    x2/=1.01;
    
      }
      if(y>0){
    y/=1.01;
    
    
    y2/=1.01;
    
      }
    d2*=1.01;
    fanget.play();
    
    }
    
    text("NEKO ARC JUMPSCARE",0,height/2);2
    
    
  }
  

}






function borderCheck() {
  if (x + d >= width) {
    a = -speed;
    
  }
  if (x <= 0) {
    a = speed;
    
  }
  if (y + d >= height) {
    
    b = -speed;
  }
  if (y < 0) {
    
    b = speed;
  }
 }

 function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    b = speed;
    a = 0;
    spilstart = true;
    
  }
  if (keyCode === UP_ARROW) {
    b = -speed;
    a = 0;
    spilstart = true;
  }
  if (keyCode === LEFT_ARROW) {
    b = 0;
    a = -speed;
    spilstart = true;
  }
  if (keyCode === RIGHT_ARROW) {
    b = 0;
    a = speed;
    spilstart = true;
  }
 }

 function preload() {
  img = loadImage('rat.png');
  img2 = loadImage('cat.png');
  musik = loadSound('padoru.mp3');
  fanget = loadSound('BURUNYUU.mp3');
 }

 function nekomove(nekospeed) {
  if (x-x2>=d/2) {
    x2 +=nekospeed;
    }
    else {
      x2 -=nekospeed;
    }
    if(y-y2>=d/2){
    y2 +=nekospeed;
    }
    else {
      y2 -=nekospeed;
    }
 }
 