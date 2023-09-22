//OBS: Dette er heller ikke opgave 2 i bogen, men stadig juletræsprojektet, det er bare andet forsøg.
//Forskellen mellem denne og det tidligere forsøg er, at jeg nu vil lave hele træet som en klasse.
//Lavet af Aske Nordfalk.
let tree;
let stjernerotation=3.25;
let kugleypos=[];
let kuglexpos=[];


function setup() {
  createCanvas(400, 400);
  tree = new Tree(100,60,75,300,200);
  background(220);
  
  tree.makeballs();
  tree.show();

  
  
}

function draw() {
 

  
  
  
}

class Tree {
  constructor (center=width/2 , stammeheight=50 , stammewidth=40 ,
               granheight=150 , granwidth=100, starsize=30 ,
               kugleamount=20 , kuglediameter=10 )
  {
    this.c=center;
    this.sh=stammeheight;
    this.sw=stammewidth;
    this.gh=granheight;
    this.gw=granwidth/2;
    this.ss=starsize;
    this.am=kugleamount;
    this.d=kuglediameter;
    this.Tan=granheight/(granwidth/2);
    
  
  }
  /*Denne metode genererer x- og y-koordinater for julekuglerne.
  Der er desværre ikke noget bias mod de lavere dele af treæt, så kuglerne klumper sig tit sammen i de øvre dele.*/
  makeballs(){
    //Dette loop gentages så mange gange, der er amount, og så ikke mere.
  while (kugleypos.length<tree.am){

    //Her genererer jeg y-positionerne for kuglerne.
    kugleypos.push(random(tree.sh , tree.sh+tree.gh-tree.ss));
   
    /*Denne kodestumpt genererer en xposition for en kugle ud fra en yposition, så denne x-position altid er inden for grannet.
    Det gør den ved at bruge lidt trigonometri. 
    Hvis man lader en vandret linje skære grannet, vil den nye trekant, der dannes mellem skæringspunkterne og toppen, være ligedannet med grantrekanten.
    Dette gælder også, hvis vi deler grannet op i to retvinklede trekanter, og vi dermed kan bruge de mere simple dele af trigonometri.
    Jeg har her brugt en formel der siger, at modstående katete / tangens til vinkel = hosliggende katete.
    I dette tilfælde er den modstående katete forskellen mellem den tilfældigt genererede y-position og træets top.
    */
    kuglexpos.push(
      random(tree.c-(tree.sh+tree.gh-kugleypos[kugleypos.length-1])/tree.Tan ,
        tree.c +(tree.sh+tree.gh-kugleypos[kugleypos.length-1])/tree.Tan)
    );
  }
  }
  show() {
    push();
    //Disse to linjer gør, at punktet (0 , 0) er i nederste venstre hjørne, hvilket gør det lettere at lave træet.
    translate(height,width);
    rotate(PI);
    
    
    //lavkugler();

    //Selve stammen tegnes
    fill(100,50,0);
    rect(this.c-this.sw/2,0,this.sw,this.sh);

    //Træets blade/grene tegnes
    fill(0,200,0);
    triangle(this.c-this.gw , this.sh , this.c, this.sh+this.gh , this.c+this.gw , this.sh);

    //Stjernen tegnes
    fill(255,255,0);
    star(this.c , this.sh+this.gh , this.ss/2 , this.ss , 5);
    
    //Julekuglerne tegnes
    fill(255,0,0);
    for (let i=0; i<this.am;i++){
    circle(kuglexpos[i] , kugleypos[i] , this.d)
    }
    
    pop();
  }
}


//Følgende kode er stjålet fra internettet. jeg har addet stjernerotation og har ikke glemt linket,
//Så jeg kan ikke fjerne stjernerotation igen... Men det fungerer!
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


