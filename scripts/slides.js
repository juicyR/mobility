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

for (let i = 0; i < slides.length; i++) {
    slides[i].style.height = `${unoHeight}`;        
}

// Moving back and forth

function moving(offset) {
    const activeSlide = slideContainer.querySelector("[data-active]");

    let newIndex = [...slides].indexOf(activeSlide) + offset;
    if (newIndex < 0) {
        newIndex = slides.length - 1;
        indexes[0].style.background = "white";
    } else {
        if (newIndex >= slides.length) {
            newIndex = 0;
            indexes[indexes.length - 1].style.background = "white";
        }
    }

    slides[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;

    // Slideshow Index
    indexes[newIndex].style.background = "#ce3229";
    if (offset == 1) {
        indexes[newIndex - 1].style.background = "white";
    } else {
        indexes[newIndex + 1].style.background = "white";
    }
}

arrows.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.arrowImage == "next" ? 1 : -1;
        moving(offset);
    })
})


// Swipe functionality
sectionUno.addEventListener('touchstart', handleTouchStart, false);
sectionUno.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;

function getTouches(evt) {
    return evt.touches || evt.originalEvent.touches;
}

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
}

function handleTouchMove(evt) {
    if (!xDown) {
        return;
    }

    var xUp = evt.touches[0].clientX;

    var xDiff = xDown - xUp;

    let swipeOffset = xDiff > 0 ? 1 : -1;

    moving(swipeOffset);

    xDown = null;
};

// Section 5 switching
const secFiveHeader = document.querySelectorAll(".sec5-header");
const headers = document.querySelector(".headers");
const secFiveArr = document.querySelectorAll(".sec5-arr");
const content = document.querySelectorAll(".connect");
const mainContent = document.querySelector(".main-content");
const bgContainer = document.querySelector(".sec5-slideshow");
const backgroundImage = document.querySelectorAll(".sec5-img");

secFiveArr.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.newContent == "next" ? 1 : -1;
        secFiveSlide(offset);
    })
})

secFiveHeader.forEach(button => {
    button.addEventListener("click", () => {
        if (button.dataset.switch == "right") {
            content[1].dataset.activeContent = true;
            delete content[0].dataset.activeContent;
        
            secFiveHeader[1].dataset.activeHeader= true;
            delete secFiveHeader[0].dataset.activeHeader;

            backgroundImage[1].dataset.activeBackground= true;
            delete backgroundImage[0].dataset.activeBackground;
        } else {
            content[0].dataset.activeContent = true;
            delete content[1].dataset.activeContent;
        
            secFiveHeader[0].dataset.activeHeader= true;
            delete secFiveHeader[1].dataset.activeHeader;

            backgroundImage[0].dataset.activeBackground= true;
            delete backgroundImage[1].dataset.activeBackground;
        }
    })
})

function secFiveSlide(offset) {
    let current = mainContent.querySelector("[data-active-content]");
    let currentHeader = headers.querySelector("[data-active-header]");
    let currentBg = bgContainer.querySelector("[data-active-background]");
    secFiveIndex = [...content].indexOf(current) + offset;

    if (secFiveIndex < 0) {
        secFiveIndex = content.length - 1;
    } else if (secFiveIndex >= content.length) {
        secFiveIndex = 0;
    }

    content[secFiveIndex].dataset.activeContent = true;
    delete current.dataset.activeContent;

    secFiveHeader[secFiveIndex].dataset.activeHeader= true;
    delete currentHeader.dataset.activeHeader;

    backgroundImage[secFiveIndex].dataset.activeBackground= true;
    delete currentBg.dataset.activeBackground;
}