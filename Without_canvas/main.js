
var box=document.getElementById("e");


var ele=document.getElementById("speed");


var x=parseFloat(box.offsetLeft);
var y=parseFloat(box.offsetTop);
var lx=0;
var ly=0;
var dx=1,dy=1;
var width=window.innerWidth;
var height=window.innerHeight;
var f=1;
animy(0,1);
var dir="right";
function animx(count,dir)

{
	if(ele.value)
	{  
dx=parseFloat(ele.value);
}
else
dx=1;

if(dir=="left")
   {
   	
   box.style.left=x+"px";
   x-=dx;
   
   if(x>0)
   setTimeout(animx,10,count,"left")
   else
   {
 
   setTimeout(animy,10,count,1);
   }
   return;	
  }
	box.style.left=x+"px";
   
   
   x+=dx;
   count+=dx;
  
   
   if(count<=(width/8.5))
   setTimeout(animx,10,count,"right");
   else
   {
   	
  if(x>=(width/2)||y<=0.2*height)
   setTimeout(animy,10,0,-1);
   else
   setTimeout(animy,10,0,+1);
   }
}
function animy(count,f)
{ 
   if(f==-1)
   {
   	if(ele.value)
   dy=-parseFloat(ele.value);
   else
   dy=-1;
}
   else
   {
   if(ele.value)	
   dy=parseFloat(ele.value)
   else
   dy=1;
}
	
   box.style.top=y+"px";

   y-=dy;
   
   if(f==-1)
   count-=dy;
   else
   count+=dy;
   
   
   if(count<=(height/6))
   setTimeout(animy,10,count,f);
   else
   {
 if(x>=(0.9*width)||y>=(0.7*height))
   { setTimeout(animx,10,0,"left");
   	}
   else
   setTimeout(animx,10,0,"right");
}
}