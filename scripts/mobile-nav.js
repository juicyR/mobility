// Mobile nav js
const btn = document.querySelector(".mobile-nav-toggle"); // Mobile nav button
const links = document.querySelector(".links"); // Navigation links
links.classList.add("hidden");

btn.addEventListener("click", () => {
    links.classList.toggle("hidden");

    // Adding 'open' class changes style of the elements
    btn.querySelectorAll("span").forEach((span) => span.classList.toggle("open"));
    links.classList.toggle("open");

    setTimeout(() => {
        links.classList.add("visible");
    }, 80);

    if (!links.classList.contains("open")) {
            links.classList.remove("visible");
    }
});