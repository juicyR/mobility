// Mobile nav js
const btn = document.querySelector(".mobile-nav-toggle"); // Mobile nav button
const links = document.querySelector(".links"); // Navigation links
links.classList.add("hidden");

btn.addEventListener("click", () => {
    // setTimeout(() => {
        links.classList.toggle("hidden");
        console.log("hidden");
    // }, 40);

    // Adding 'open' class changes style of the elements
    btn.querySelectorAll("span").forEach((span) => span.classList.toggle("open"));
    links.classList.toggle("open");

    setTimeout(() => {
        links.classList.add("visible");
    }, 80);

    if (!links.classList.contains("open")) {
        // setTimeout(() => {
            links.classList.remove("visible");
        // }, 20);
        console.log("hi");
    }
});