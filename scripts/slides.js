// Declaration of variables
const arrows = document.querySelectorAll(".slide-arrow");
const indexes = document.querySelectorAll(".indexes");
const slideContainer = document.querySelector(".slide-container");

// Section 1
const sectionUno = document.querySelector(".section1");

// Slideshow Images
let slides = document.querySelectorAll('.splash-img');

// Getting the height of Section 1
const compStyles = window.getComputedStyle(sectionUno);
const unoHeight = compStyles.getPropertyValue('height');

window.onload = () => {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.height = `${unoHeight}`;        
    }
};

arrows.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.arrowImage == "next" ? 1 : -1;
        const activeSlide = slideContainer.querySelector("[data-active]");

        let newIndex = [...slides].indexOf(activeSlide) + offset;
        if (newIndex < 0) {newIndex = slides.length - 1;} else {
            if (newIndex >= slides.length) {newIndex = 0;}
        }

        slides[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;
    })
})








// Slideshow indexes
let siOne = document.querySelector('.si1'), siTwo = document.querySelector('.si2'), siThree = document.querySelector('.si3'), siFour = document.querySelector('.si4'), siFive = document.querySelector('.si5');

// Whole page slideshow with background images of the body element. Every slideshow in the webpage uses this code
let current = 0;
let images = [];
images[0] = '../Mobility/Website/Mobility-Home-Page-V1-assets/dark-gradient-image.png';images[1] = '../Mobility/Website/Mobility-Home-Page-V1-assets/550.jpg';images[2] = '../Mobility/Website/Mobility-Home-Page-V1-assets/551.jpg';images[3] = '../Mobility/Website/Mobility-Home-Page-V1-assets/552.jpg';images[4] = '../Mobility/Website/Mobility-Home-Page-V1-assets/553.jpg';

// Changing the color of the index according to the image changes
function indexShow() {
    if (current == 0) {
        siOne.style.background = "#ce3229";
    } else {
        siOne.style.background = "white";
    }
    if (current == 1) {
        siTwo.style.background = "#ce3229";
    } else {
        siTwo.style.background = "white";
    }
    if (current == 2) {
        siThree.style.background = "#ce3229";
    } else {
        siThree.style.background = "white";
    }
    if (current == 3) {
        siFour.style.background = "#ce3229";
    } else {
        siFour.style.background = "white";
    }
    if (current == 4) {
        siFive.style.background = "#ce3229";
    } else {
        siFive.style.background = "white";
    }
}

// Move forward functionality
function moveForward() {
    current++;
    if (current > images.length-1) {
        current = 0;
    }
    container.style.backgroundImage = `url('${images[current]}'), url(../Mobility/Website/Mobility-Home-Page-V12-assets/Hills.jpg), url(../Mobility/Website/Mobility-Home-Page-V12-assets/business-bg.jpg)`;
    indexShow();
}

// Move backward functionality
function moveBackward() {
    current--;
    if (current < 0) {
        current = 4;
    }
    container.style.backgroundImage = `url('${images[current]}'), url(../Mobility/Website/Mobility-Home-Page-V12-assets/Hills.jpg), url(../Mobility/Website/Mobility-Home-Page-V12-assets/business-bg.jpg) `;
    indexShow();
}

// Buttons functionality
arrowRight.addEventListener('click', moveForward);
arrowLeft.addEventListener('click', moveBackward);

// Swipe functionality

sectionUno.addEventListener('touchstart', handleTouchStart, false);
sectionUno.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;
var yDown = null;

function getTouches(evt) {
    return evt.touches || evt.originalEvent.touches;
}

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
}

function handleTouchMove(evt) {
    if (!xDown || !yDown) {
        return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if (Math.abs( xDiff ) > Math.abs( yDiff )) {
        if (xDiff > 0) {
            moveForward();
        } else {
            moveBackward();
        }
    }

    xDown = null;
    yDown = null;
};



















// Section 5 code
let header1 = document.querySelector('.header1'); // These are the top headers above the information boxes
let header2 = document.querySelector('.header2');
let connectingLink = document.querySelector('.connecting-link');
let connectingBLink = document.querySelector('.connecting-b-link');

let connect1 = document.querySelector('.connect1'); // Information boxes
let connect2 = document.querySelector('.connect2');
let active = document.querySelector('.active'); // Active slide css change

let hda1 = document.querySelector('.hda1'); // Slideshow arrows
let hda2 = document.querySelector('.hda2');

// Second information box appear and disappear
function h2Appear() {
    // Adding 'active' class name so header style changes
    header2.classList.add("active");
    // Removing 'active' class name
    header1.classList.remove("active");

    // Displaying current information box, and undisplaying the other
    connect2.style.display = "flex";
    connect1.style.display = "none";

    // Changing background according to information box
    container.style.backgroundImage = `url('${images[current]}'), url(../Mobility/Website/Mobility-Home-Page-V12-assets/Hills.jpg), url(../Mobility/Website/Mobility-Home-Page-V1-assets/budgetnet.jpg) `;
}

// First information box appear and disappear
function h1Appear() {
    // Adding 'active' class name so header style changes
    header1.classList.add("active");
    // Removing 'active' class name
    header2.classList.remove("active");

    // Displaying current information box, and undisplaying the other
    connect1.style.display = "flex";
    connect2.style.display = "none";

    // Changing background according to information box
    container.style.backgroundImage = `url('${images[current]}'), url(../Mobility/Website/Mobility-Home-Page-V12-assets/Hills.jpg), url(../Mobility/Website/Mobility-Home-Page-V12-assets/business-bg.jpg) `;
}

// Arrows functionality
header2.addEventListener("click", h2Appear);
header1.addEventListener("click", h1Appear);
connectingLink.addEventListener("click", h2Appear);
connectingBLink.addEventListener("click", h1Appear);

hda2.addEventListener("click", function(){
    if (connect2.style.display == "flex") {
        h1Appear();  
    } else {
        h2Appear();
    }
});

hda1.addEventListener("click", function(){
    if (connect1.style.display == "flex") {
        h2Appear();
    } else {
        h1Appear();
    }
});