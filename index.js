function parallax() {
	var $slider = document.getElementById("slider");

    var yPos = window.pageYOffset / $slider.dataset.speed;
    //console.log("-------------");
    //console.log(`Window offser ${window.pageYOffset}`);
    //console.log(`YPos: ${yPos}`);
    
	//yPos = -yPos;
    //console.log(`-YPos: ${yPos}`);
    //console.log("-------------");
	var coords = '0%'+ yPos + 'px';
	
    $slider.style.backgroundPosition = coords;
    
}


window.addEventListener("scroll", function(){
	parallax();	
});