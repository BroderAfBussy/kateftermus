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
      Derfor har jeg lavet dette if-statement.
      Det tjekker om musikken er blevet spillet, og hvis den ikke er, sættes musikken i gang.
      Og sætter musikspillet-variablen til true. */
    }
  }


  image(img,x,y,d,d); //musen tegnes.
  x+=a; 
  y+=b; 

  

    if(musikspillet==true && spilstart==false) {
      background(220);
      //Dette if-statement gør musen usynlig hvis katten fanger den ved bare at tegne en ny baggrund ovenpå.
    }
  
  image(img2,x2,y2,d2,d2); //Dette er katten.

  //Herunder tjekker if-statement'et om katten og musen er kollideret.
  if(x2-x<=d && x2-x>=-d2 && y2-y<=d && y2-y>=-d2 ) 
  //If-statement der tjekker, om musen og katten har rørt hinanden
  {
    musik.stop();
    
    spilstart=false; //Dette aktiverer if-statementet på linje 51-54.
    speed=0; //ll. 65-67: Musens fart sættes til nul (så du ikke kan bevæge dig).
    a=0;
    b=0;

    //Det her er min ret dårlige måde at forstørre katten. tjekker om katten er større end skærmen.
    if(d2<width){
      if(x>0){    x2/=1.01;    }
      if(y>0){    y2/=1.01;    }
      /*ll. 71+72: Kattens x- og y-koordinat gøres mindre. 
      Dette er en dårlig måde at gøre det på, da den absolutte forskel bliver alt for lille ved små tal,
      og vi derfor ender med næsten aldrig ender med at komme helt op i øverste venstre hjørne.*/

      //Kattens png gøres større hver frame, indtil 
    d2*=1.02;
    fanget.play(); /*det her er sfx, der spiller når katten fanger en.
    Den siger det alt for mange gange, men det lyder sjovt, så jeg beholdte det.*/
    
    }
    
    text("NEKO ARC JUMPSCARE",0,height/2);2
    
    
  }
  

}





/*Denne funktion tjekker om musen har ramt kanten af skærmen, og får den til at gå den modsatte vej, hvis den har.
Den er tyvstjålet fra vores programmeringsbog, med kun den lille ændring,
at musens fart i en dimension kun ændres, når den ramme den tilsvarende mur,
i modsætning til den originale, hvor farten parallel med en væg sattes til nul.
Denne ændring gør, at man i nogle få tilfælde kan bevæge sig skråt ved at rammme en væg,
hvilket selvfølgelig ikke er meningen, men det er sjovt, så jeg beholdte det. */
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

 /*Denne funktion styrer musens bevægelse. Den er også tyvstjålet fra programmeringsbogen.
 Har sat "spilstart = true" ind i dem alle for at få musikken til at fungere.*/
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
//Her har vi endnu en funktion, som jeg har nuppet fra bogen. 
//De forskellige variabler er blevet forklaret øverst i dokumentet.
 function preload() {
  img = loadImage('rat.png');
  img2 = loadImage('cat.png');
  musik = loadSound('padoru.mp3');
  fanget = loadSound('BURUNYUU.mp3');
 }

 /*Denne funktion afgør, hvordan katten bevæger sig.
 Den tager imod variablen nekospeed.
 Bemærk at nekospeed ikke må være højere end speed, da katten kan bevæge sig på x- og y-koordinaten på samme tid. */
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
 