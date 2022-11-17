function setup() {
  createCanvas(400, 400);
  let liste =  [7,4,5,6,9,1,2,8,3,10];
  let x;
 
  while (liste.length>0){
    x=0;
   for(let i=0;i<liste.length;i++){
    if(liste[i]>liste[x]){
      x=i
    }
   }
   console.log(liste[x]);
   console.log(liste);
   liste.splice(x,1);
   
  }
}



function draw() {
  
}
