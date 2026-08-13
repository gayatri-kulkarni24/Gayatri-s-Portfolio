// ================================
// CUSTOM CURSOR
// ================================

const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");

let mouseX = 0;
let mouseY = 0;

let outlineX = 0;
let outlineY = 0;


// Mouse position

document.addEventListener("mousemove", (e) => {

    mouseX = e.clientX;
    mouseY = e.clientY;

    cursorDot.style.left = `${mouseX}px`;
    cursorDot.style.top = `${mouseY}px`;

});


// Smooth outer cursor movement

function animateCursor() {

outlineX += (mouseX - outlineX) * 0.10;
outlineY += (mouseY - outlineY) * 0.10;
    cursorOutline.style.left = `${outlineX}px`;
    cursorOutline.style.top = `${outlineY}px`;

    requestAnimationFrame(animateCursor);

}

animateCursor();


// Interactive elements

const interactiveElements = document.querySelectorAll(
    "a, button, input, textarea, .skill-card, .project-card, .contact-box"
);

interactiveElements.forEach((element) => {

    element.addEventListener("mouseenter", () => {

        cursorOutline.classList.add("cursor-hover");

    });

    element.addEventListener("mouseleave", () => {

        cursorOutline.classList.remove("cursor-hover");

    });

});