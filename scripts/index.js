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