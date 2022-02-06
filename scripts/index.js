// Declaration of variables
// Main slideshow buttons
let arrowLeft = document.querySelector('.arrow-left');
let arrowRight = document.querySelector('.arrow-right');
let container = document.querySelector('.container');

// Slideshow indexes
let siOne = document.querySelector('.si1'), siTwo = document.querySelector('.si2'), siThree = document.querySelector('.si3'), siFour = document.querySelector('.si4'), siFive = document.querySelector('.si5');

// Menu
let headerTop = document.querySelector('.header');

// Mobile nav js
const btn = document.querySelector(".mobile-nav-toggle"); // Mobile nav button
const links = document.querySelector(".links"); // Navigation links

btn.addEventListener("click", () => {
    // Adding 'open' class changes style of the elements
    btn.querySelectorAll("span").forEach((span) => span.classList.toggle("open"));
    links.classList.toggle("open");

    if (links.classList.contains("open")) {
        // If the menu takes up half of the screen. On body click, menu closes
        /* container.addEventListener("click", () => {
             links.classList.remove("open");
             btn.querySelectorAll("span").forEach((span) => span.classList.remove("open"));
        }) */

        // Removing body scroll functionality when menu is open
        document.body.style.overflowY = "hidden";
    } else {
        document.body.style.overflowY = "scroll";
    }
});

// Changing the color background of the nav bar when scrolling
window.onscroll = function() {
    var intElemScrollTop = window.scrollY;
    if (intElemScrollTop > 10) {
        headerTop.style.background = "#005173";
    } else {
        headerTop.style.background = "transparent";
    }
};

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


// Section 5 code
let header1 = document.querySelector('.header1'); // These are the top headers above the information boxes
let header2 = document.querySelector('.header2');

let triangle1 = document.querySelector('.triangle1'); // Triangles below the headers
let triangle2 = document.querySelector('.triangle2');

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

    // Removing and adding triangles below headers, to show user which is active
    triangle1.style.opacity = "0";
    triangle2.style.opacity = "1";

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

    // Removing and adding triangles below headers, to show user which is active
    triangle2.style.opacity = "0";
    triangle1.style.opacity = "1";

    // Displaying current information box, and undisplaying the other
    connect1.style.display = "flex";
    connect2.style.display = "none";

    // Changing background according to information box
    container.style.backgroundImage = `url('${images[current]}'), url(../Mobility/Website/Mobility-Home-Page-V12-assets/Hills.jpg), url(../Mobility/Website/Mobility-Home-Page-V12-assets/business-bg.jpg) `;
}

// Arrows functionality
header2.addEventListener("click", h2Appear);
header1.addEventListener("click", h1Appear);

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