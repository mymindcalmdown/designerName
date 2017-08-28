
window.onload = function(){
var odiv5 = document.getElementById('float_ball'); 
	// odiv5.style.top = document.documentElement.clientHeight-odiv5.offsetHeight+scrollTop+'px';
window.onscroll = function(){
	
	 var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
		 startMove((document.documentElement.clientHeight-odiv5.offsetHeight)/2+scrollTop);//-200);//200可以控制悬浮框的位置,如果抖动就用parseInt()；
		};
     var timer = null;//要写在运动函数外
     function startMove(iTarget){
	
	 clearInterval(timer);
	 timer = setInterval(function(){
	 	var speed = (iTarget-odiv5.offsetTop)/6;
	 	speed = speed>0?Math.ceil(speed):Math.floor(speed);
	 	if(odiv5.offsetTop == iTarget){
             clearInterval(timer);
	 	}else{
	 		odiv5.style.top = odiv5.offsetTop+speed+'px';
	 	}

	 },30);
   }
}