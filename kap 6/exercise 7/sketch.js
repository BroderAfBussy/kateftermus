/*NOTER!
Jeg har lavet en funktion, der siger om man har det rigtige bogstav, og tæller antal fejl man har lavet,
men der er endnu ikke noget med, at dele af ham bliver tegnet (alt er der fra starten).
Så det skal vel implementeres+en måde at resette??? IDK */

function setup() {
  createCanvas(600, 600);
}
let ord=["d","a","v","u","s","y"];
let fejl=0;

function draw() {
  background(220);

  //ordets bogstavpladser
  for(let i=0;i<ord.length;i++){
    
    line(10+i*75,100,60+i*75,100);
  }
  
  rect(200,300,150,20);//stolpe lodret
  rect(190,300 ,20,250);//stolpe vandret
  circle(200,800,height);//bakke
  line(350,300,350,350);//reb
  
  
  rect(335,375,25,75);//krop
  circle(350,375,50); //hoved
  line(335,400,325,450);//venstre arm
  line(360,400,370,450);//højre arm
  line(335,450,330,500);//venstre ben
  line(360,450,365,500);//højre ben
  print(fejl);
}

function keyTyped(){
  
    console.log(key);
    
    for(let i=0;i<ord.length;i++){
      if(ord[i]==key){
        console.log("succes!");
        break;
      }
      else if(i==ord.length-1){
        console.log("niks");
        fejl++;
      }
      
    }


  }

