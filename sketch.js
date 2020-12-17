//Create variables here
var dog, happyDog, database, foodS, foodStock;





function preload()
{
 
  //load images here
  dog=loadImage("images/dogImg1.png")
  happyDog=loadImage("images/dogImg.png")
  
}

function setup() {
  createCanvas(500, 500);   
  database=firebase.database();
  console.log(database)
  
  dog1=createSprite(250,255,30,40)
  dog1.addImage(dog)
  dog1.scale=0.2;

  
  
  foodStock=database.ref('food');
  foodStock.on("value",readStock)


 
  
  

  
}


function draw() {  
  background(46, 139, 87)
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog1.addImage(happyDog)
   dog1.scale=0.2;

   }


  

  drawSprites();
  fill ("white")
  text("food remaining"+foodS,40,50)
  //add styles here
  text ("Note:Press UP_ARROW key to feed drago milk!",200,50)

}




//function to read value from DB
function readStock(data){
foodS=data.val();
}

//function to write value from DB
function writeStock(X){

if(X<=0){
  X=0;
}else{
  X=X-1
}


database.ref('/').update({
  food:X
})

}

