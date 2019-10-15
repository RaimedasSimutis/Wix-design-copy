//menu bars animation
$('[data-toggle]').on("click", function (e) {
    
    e.preventDefault();
    let element = $(this).data('toggle');

    $('[data-' + element + ']').toggleClass(element + '--active');

    if ($(this).hasClass(element + '--active')) {
        $(this).removeClass(element + '--active').addClass(element + '--unactive');
        $("body").css({
            "overflow": "visible"
        });
        ///console.log('klase unactive');

    } else if ($(this).hasClass(element + '--unactive')) {
        $(this).removeClass(element + '--unactive').addClass(element + '--active');
        $("body").css({
            "overflow": "hidden"
        });
        //console.log('klase active');

    } else {
        //console.log('nulinis variantas, pridedam active');
        $(this).addClass(element + '--active');
        $("body").css({
            "overflow": "hidden"
        });
    }
});

//parallax effect functionality
function parallax() {

    if (screen.width >= 1200) {
        let slider = document.getElementById("slider");
        let yPos = window.pageYOffset / slider.dataset.speed;
        
        //yPos = -yPos;
        let coords = '0%' + yPos + 'px';
        slider.style.backgroundPosition = coords;

    }
}

//Scroll to specific element possition functionality
function scrollToCord(y) {
    window.scrollTo({
        top: y,
        left: 0,
        behavior: 'smooth'
    });
}

//Calculate specific element possition with navbar
function elPossitionCalc(el) {
    const elName = document.querySelector(`.${el}`);
    // const navContainer = document.querySelector('.nav-container');
    let calculatedYPossition = elName.offsetTop - navContainer.offsetHeight;
    scrollToCord(calculatedYPossition);
}

//Calculate specific element possition without navbar
function elPossitionCalcMobile(el) {
    const elName = document.querySelector(`.${el}`);
    // const navContainer = document.querySelector('.nav-container');
    let calculatedYPossition = elName.offsetTop;
    scrollToCord(calculatedYPossition);
}

//border bottom on navbar buttons by screen Y possition functionality
function posIdentificationOnNavbar() {
    let yPos = window.pageYOffset;
    const contentContainer = document.querySelector('.content-container');
    const contactsContainer = document.querySelector('.contacts-container');
    //const navContainer = document.querySelector('.contacts-container');

    let contentContainerYPos = contentContainer.offsetTop;
    let contactsContainerYPos = contactsContainer.offsetTop;

    const blackBorder = "4px solid #000000";
    const whiteBorder = "4px solid #E6E6E7";


    if (yPos < (contentContainerYPos - navContainerHeight)) {
        navHomeBtn.style.borderTop = "4px solid #000000";
        navProjectsBtn.style.borderTop = "4px solid transparent";
        navContactBtn.style.borderTop = "4px solid transparent";
    } else if ((contentContainerYPos - navContainerHeight) <= yPos && yPos < (contactsContainerYPos - navContainerHeight)) {
        //console.log('2');
        navHomeBtn.style.borderTop = "4px solid #E6E6E7";
        navProjectsBtn.style.borderTop = "4px solid #000000";
        navContactBtn.style.borderTop = "4px solid #E6E6E7";
    } else if (yPos >= (contactsContainerYPos - navContainerHeight)) {
        //console.log('3');
        navHomeBtn.style.borderTop = "4px solid #E6E6E7";
        navProjectsBtn.style.borderTop = "4px solid #E6E6E7";
        navContactBtn.style.borderTop = "4px solid #000000";
    }
}

//variables
//const scrollButton = document.querySelector('.footer-container');
const scrollToTopButton = document.querySelector('.contacts-content__button');
const navContactBtn = document.querySelector('#Contacts-btn');
const navProjectsBtn = document.querySelector('#Projects-btn');
const navHomeBtn = document.querySelector('#Home-btn');
const navContainer = document.querySelector('.nav-container');
const navMenuBarsBtn = document.querySelector('#menu-bars');
const popupProjectsBtn = document.querySelector('#Popup-projects-btn');
const popupContactsBtn = document.querySelector('#Popup-contacts-btn');
const navContainerHeight = navContainer.offsetHeight;

window.addEventListener("scroll", function () {
    parallax();
    posIdentificationOnNavbar();
});

scrollToTopButton.addEventListener("click", function () {
    event.preventDefault();
    scrollToCord(0);
});

navContactBtn.addEventListener("click", function () {
    event.preventDefault();
    elPossitionCalc('contacts-container');
});

navProjectsBtn.addEventListener("click", function () {
    event.preventDefault();
    elPossitionCalc('content-container');
});

navHomeBtn.addEventListener("click", function () {
    event.preventDefault();
    scrollToCord(0);
});

//scroling to specific element from popup menu on mobile devices
$('[data-nav-btn]').on("click", function (e) {
    e.preventDefault();
    let element = $(this).data('nav-btn');

    if ($('.popup-nav').hasClass('popup-nav--active')) {
        $('.popup-nav').removeClass('popup-nav--active');
        $('.menu-bars__content').removeClass('popup-nav--active').addClass('popup-nav--unactive');
        $("body").css({"overflow": "visible"});
        console.log('klase buvo. istryniau');
    } else {
        console.log('nu as nieko neivykdziau sry')
    }

    elPossitionCalcMobile(element);
});

//show letter animations on page load
  $( window ).on( "load", function() {
    posIdentificationOnNavbar();
    parallax();
    $('.main-image-container__box-above-A').addClass('main-image-container__box-above-A--loaded');  
    $('.main-image-container__letter-S').addClass('main-image-container__letter-S--loaded');
    $('.main-image-container__letter-A').addClass('main-image-container__letter-A--loaded');
    //console.log( "window loaded" );
});
