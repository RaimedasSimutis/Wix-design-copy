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

function scrollToTop () {
    window.scrollTo({top:0, left:0, behavior: 'smooth'});
}



//const scrollButton = document.querySelector('.footer-container');
const scrollButton = document.querySelector('.back-to-top-button');

window.addEventListener("scroll", function(){
	parallax();	
});

scrollButton.addEventListener("click", function(){
    scrollToTop();
})

