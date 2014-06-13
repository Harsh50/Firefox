
var ctx=document.getElementById("canvas1").getContext("2d");


var ele=document.getElementById("speed");
ctx.fillStyle="black";
var x=0;
var y=450;
var lx=0;
var ly=0;
var dx=3,dy=3;
var f=1;
animy(0,1);
var dir="right";
function animx(count,dir)

{
	ctx.clearRect(x,y+ly,80,50);

dx=parseFloat(ele.value);

ctx.clearRect(x-lx,y,80,50);
if(dir=="left")
   {
   	ctx.clearRect(x+lx,y,80,50);
   ctx.fillRect(x,y,80,50);
   x-=dx;
   lx=dx;
   if(x>0)
   setTimeout(animx,10,count,"left")
   else
   {
   ctx.clearRect(x+lx,y,80,50);
   setTimeout(animy,10,count,1);
   }
   return;	
  }
	
   ctx.fillRect(x,y,80,50);
   
   
   x+=dx;
   count+=dx;
   lx=dx;
   
   if(count<=125)
   setTimeout(animx,10,count,"right");
   else
   {
   	
  if(y<=50 || x>400)
   setTimeout(animy,10,0,-1);
   else
   setTimeout(animy,10,0,+1);
   }
}
function animy(count,f)
{ 
   ctx.clearRect(x-lx,y,80,50);
   if(f==-1)
   dy=-parseFloat(ele.value);
    else	
   dy=parseFloat(ele.value)
  
	ctx.clearRect(x,y+ly,80,50);
   ctx.fillRect(x,y,80,50);

   y-=dy;
   ly=dy;
   if(f==-1)
   count-=dy;
   else
   count+=dy;
   
   
   if(count<=100)
   setTimeout(animy,10,count,f);
   else
   {
 if(x>=800||y>=400)
   { setTimeout(animx,10,0,"left");
   	}
   else
   setTimeout(animx,10,0,"right");
}
}