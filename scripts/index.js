// Menu
let headerTop = document.querySelector('.header');

// Changing the color background of the nav bar when scrolling
window.onscroll = function() {
    var intElemScrollTop = window.scrollY;
    if (intElemScrollTop > 10) {
        headerTop.style.background = "#005173";
    } else {
        headerTop.style.background = "transparent";
    }
};

let sectionTois = document.querySelector('.section3');
let threeImage = document.querySelector('.sec3-img');

const compStylesTois = window.getComputedStyle(sectionTois);
const toisHeight = compStylesTois.getPropertyValue('height');

threeImage.style.height = `${toisHeight}`;

// Section 5 Height
const sectionFive = document.querySelector(".section5");
const secFiveBg = document.querySelectorAll(".sec5-img");

let secFiveComp = window.getComputedStyle(sectionFive);
let secFiveHeight = secFiveComp.getPropertyValue('height');

for (let i = 0; i < secFiveBg.length; i++) {
    secFiveBg[i].style.height = `${secFiveHeight}`;
}

// Comleted Site. We did it boys. After 2 years.