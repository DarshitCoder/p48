const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var thief_run,thief;
var bg,bg2;
var p_s,ps
var di,d;
var s,si
var bs,bsi
var sSound;
var log1,log2
var shoot 
var psci,pscil,pscit,psc,pscl,psct;
var a1i,a2i,a3i,a4i;

var gameState=0;
function preload(){
 //load your images here 
 thief_run=loadAnimation("t1.png","t2.png","t3.png","t4.png","t5.png","t6.png","t7.png","t8.png","t9.png","t10.png","t11.png","t12.png","t13.png","t14.png","t15.png","t16.png","t17.png","t18.png","t19.png","t20.png")
  bg=loadImage("m.jpg")
  di=loadImage("d.png")
  bg2=loadImage("r.jpg")
si=loadImage("soldior.png")
bi=loadImage("bullet.png")
bsi=loadImage("bs.png")
sSound=loadSound("s.mp3")
shoot=loadSound("shoot.mp3")
p_s=loadImage("ps.png")
a1i=loadImage("a1.png")
a2i=loadImage("a2.png")
a3i=loadImage("a3.png")
a4i=loadImage("a4.png")
psci=loadImage("psc.png")
pscil=loadImage("pscl.png")
pscit=loadImage("psct.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
    world = engine.world;


  thief=createSprite(1253,300,30,30);
  thief.addAnimation("run",thief_run);
  thief.scale=0.5;
  thief.velocityX=-2;
  d=createSprite(700,325,30,30);
  d.addImage(di);
  d.scale=.2;
  s=createSprite(60,309,30,30);
  s.addImage(si);
  s.scale=1;
  
 

  b=createSprite(132,267,10,10)
  b.addImage(bi);
  b.scale=0.1;
  b.visible=false;

  a1=createSprite(500,310,10,10)
  a1.addImage(a1i);
  a1.scale=0.5;
 
  a2=createSprite(565,530,10,10)
  a2.addImage(a2i);
  a2.scale=0.3;


  a3=createSprite(185,200,10,10)
  a3.addImage(a3i);
  a3.scale=0.2;
  

  a4=createSprite(915,415,10,10)
  a4.addImage(a4i);
  a4.scale=0.4;


  shotter=createSprite(145,267,10,10)
  shotter.scale=0.1;
  shotter.visible=false;

  bs=createSprite(1300,300,30,30);
  bs.addImage(bsi);
  bs.scale=0.8;
  bs.velocityX=-2;
  bs.visible=false;

 
  


  ps=createSprite(100,450,30,30);
  ps.addImage(p_s);
  ps.scale=1;
  

  psc=createSprite(100,500,30,30);
  psc.addImage(psci);
  psc.scale=0.7;

  log1 =  new Log(302,310,1000,-PI/2);
  log2 =  new Log(178,208,300,PI/4);
  log3 =  new Log(910,410,300,-PI/4);
  log4 =  new Log(524,530,2000,-PI/2);
  log5 =  new Log(900,100,1250,-PI/2);
  //add code here

}
function draw() {
background(bg)
  //add code here
  Engine.update(engine);
  
 
  text(mouseX+','+mouseY,mouseX,mouseY);
  ps.depth=psc.depth;
  psc.depth=psc.depth+1;
 log1.display();
 log2.display();
 log3.display();
 log4.display();
 log5.display();

if(gameState===0 && thief.isTouching(d)){
sSound.play();
d.visible=false;
  gameState=1;
}

 if(gameState===1 && keyDown("space")){
b.visible=true;
b.velocityX=100;
shoot.play();

 }

 if(b.isTouching(thief)){
bs.visible=true;
thief.visible=false;
thief.velocityX=0;
bs.velocityX=0;
d.visible=true;
}
if(keyDown("right")){
  psc.addImage(psci)
  psc.x=psc.x+5
}
if(keyDown("left")){
  psc.addImage(pscil)
  psc.x=psc.x-2
}
if(keyDown("up")){
psc.y=psc.y-5

}

if(keyDown("down")){
  psc.y=psc.y+5
  
  }
textSize(20);
fill("blue")
text("!!!!theif is stealing the diamond you are the soldior please shoot him press space key to shoot !!!!",500,110 );
drawSprites();
}