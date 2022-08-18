// Mobile nav js
const btn = document.querySelector(".mobile-nav-toggle"); // Mobile nav button
const links = document.querySelector(".links"); // Navigation links
const firstLink = document.querySelector(".connecting-b-link");
const secondLink = document.querySelector(".connecting-link");
const thirdLink = document.querySelector(".connecting-contact-link");
const x = document.getElementsByTagName("BODY")[0];
links.classList.add("hidden");

btn.addEventListener("click", () => {
    links.classList.remove("hidden");

    // Adding 'open' class changes style of the elements
    btn.querySelectorAll("span").forEach((span) => span.classList.toggle("open"));

    links.classList.toggle("open");

    links.classList.add("visible");

    function disableScroll() {
        if (!links.classList.contains("open")) {
            links.classList.remove("visible");
            x.style.overflowY = "scroll";
        } else {
            x.style.overflowY = "hidden";
        }
    }

    disableScroll();

    function closeNav() {
        links.classList.remove("visible");
        links.classList.remove("open");
        btn.querySelectorAll("span").forEach((span) => span.classList.remove("open"));

        disableScroll();
    }

    firstLink.addEventListener("click", closeNav);
    secondLink.addEventListener("click", closeNav);
    thirdLink.addEventListener("click", closeNav);
});