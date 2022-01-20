let arrowLeft = document.querySelector('.arrow-left');
let arrowRight = document.querySelector('.arrow-right');
let container = document.querySelector('.container');
let siOne = document.querySelector('.si1'), siTwo = document.querySelector('.si2'), siThree = document.querySelector('.si3'), siFour = document.querySelector('.si4'), siFive = document.querySelector('.si5');
let headerTop = document.querySelector('.header');

window.onscroll = function() {
    var intElemScrollTop = window.scrollY;
    if (intElemScrollTop > 10) {
        headerTop.style.backgroundColor = "#000066";
    } else {
        headerTop.style.backgroundColor = "transparent";
    }
};

let current = 0;
let images = [];
images[0] = '../Mobility/Website/Mobility-Home-Page-V1-assets/dark-gradient-image.png';images[1] = '../Mobility/Website/Mobility-Home-Page-V1-assets/550.jpg';images[2] = '../Mobility/Website/Mobility-Home-Page-V1-assets/551.jpg';images[3] = '../Mobility/Website/Mobility-Home-Page-V1-assets/552.jpg';images[4] = '../Mobility/Website/Mobility-Home-Page-V1-assets/553.jpg';

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
function moveForward() {
    current++;
    if (current > images.length-1) {
        current = 0;
    }
    container.style.backgroundImage = `url('${images[current]}'), url(../Mobility/Website/Mobility-Home-Page-V12-assets/Hills.jpg), url(../Mobility/Website/Mobility-Home-Page-V12-assets/business-bg.jpg)`;
    indexShow();
}
function moveBackward() {
    current--;
    if (current < 0) {
        current = 4;
    }
    container.style.backgroundImage = `url('${images[current]}'), url(../Mobility/Website/Mobility-Home-Page-V12-assets/Hills.jpg), url(../Mobility/Website/Mobility-Home-Page-V12-assets/business-bg.jpg) `;
    indexShow();
}
arrowRight.addEventListener('click', moveForward);
arrowLeft.addEventListener('click', moveBackward);


let header1 = document.querySelector('.header1');
let header2 = document.querySelector('.header2');
let triangle1 = document.querySelector('.triangle1');
let triangle2 = document.querySelector('.triangle2');
let connect1 = document.querySelector('.connect1');
let connect2 = document.querySelector('.connect2');
let active = document.querySelector('.active');

let hda1 = document.querySelector('.hda1');
let hda2 = document.querySelector('.hda2');

function h2Appear() {
    header2.classList.add("active");
    header1.classList.remove("active");
    triangle1.style.opacity = "0";
    triangle2.style.opacity = "1";
    connect2.style.display = "flex";
    connect1.style.display = "none";
    container.style.backgroundImage = `url('${images[current]}'), url(../Mobility/Website/Mobility-Home-Page-V12-assets/Hills.jpg), url(../Mobility/Website/Mobility-Home-Page-V1-assets/budgetnet.jpg) `;
}

function h1Appear() {
    header1.classList.add("active");
    header2.classList.remove("active");
    triangle2.style.opacity = "0";
    triangle1.style.opacity = "1";
    connect1.style.display = "flex";
    connect2.style.display = "none";
    container.style.backgroundImage = `url('${images[current]}'), url(../Mobility/Website/Mobility-Home-Page-V12-assets/Hills.jpg), url(../Mobility/Website/Mobility-Home-Page-V12-assets/business-bg.jpg) `;
}

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