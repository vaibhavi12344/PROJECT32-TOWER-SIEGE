
var ground,stand,block1,block2,block3,block4,block5;


function preload(){}
function setup(){
var canvas = createCanvas(400,400);
ground=new Ground(200,400,400,20)
stand=new Ground(300,300,100,60)
block1=new Block(200,350,20,20)
block2=new Block(225,350,20,20)
block3=new Block(259,350,20,20)
block4=new Block(220,400,20,20)
block4=new Block(245,400,20,20)
block5=new Block(238,450,20,20)
}
function draw(){
background("blue");

Text("Drag the Hexagonal Stone and Release it,to launch towards the blocks",190,350)

}

