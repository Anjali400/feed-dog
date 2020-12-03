//Create variables here
var dog, happyDog,dogSprite;
 var database;
 var foodS, foodStock;
 var database,position;
 var food=19;
 var house;
 var milk,milk1;
function preload()
{
	// images 
dogSprite=loadImage("images/dogImg.png")
happyDog=loadImage("images/dogImg1.png")
house=loadImage("images/images 2.jpg")
milk1=loadImage("images/milk.png")
}

function setup() {
  database=firebase.database()
	createCanvas(500, 500);
  dog=createSprite(250,400,50,50)
  dog.addImage(dogSprite)
  dog.scale=0.2;

 milk=createSprite(320,270,50,50)
milk.addImage(milk1)
milk.scale=0.3

  var foodStock=database.ref('dog/position')
  foodStock.on("value",readStock)
}


function draw() {  
background(house)
background.scale=1;


if(keyWentDown(UP_ARROW)){
  writeStock(foodS)
  dog.addImage(happyDog)
  food=food-1
}
if(food<1){
food=0;
}
  drawSprites();
  textSize(20)
  fill("red")
  stroke("black")
  text("FoodStock:"+food,180,280)
  
  text("Note:Press UP_ARROW Key To Feed Drago Milk!",30,70)
  //add styles here

}
function readStock(data){
foodS=data.val();
}
function writeStock(x){
  database.ref('dog/position').update({
   // foodS:x
  })
}



