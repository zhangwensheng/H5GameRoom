//var d1=document.getElementById("d1_img");
//var d2=document.getElementById("d2_img");

var clock=1;
window.setInterval(function(){
	if(clock==1){
	document.getElementById("d1_img").src="res/detail/11.jpg";
	document.getElementById("d2_img").src="res/detail/21.jpg";
	}else if(clock==2){
	document.getElementById("d1_img").src="res/detail/12.jpg";
	document.getElementById("d2_img").src="res/detail/22.jpg";
	}else if(clock==3){
	document.getElementById("d1_img").src="res/detail/10.jpg";
	document.getElementById("d2_img").src="res/detail/23.jpg";
	}
	else{
		document.getElementById("d2_img").src="res/detail/20.jpg";
	}
	if(clock<=4)
	{clock+=1;}
	else{clock=1;}
	},2000)
