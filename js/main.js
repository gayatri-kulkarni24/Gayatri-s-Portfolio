const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    navbar.style.padding = "0";
    navbar.style.background = "rgba(5,8,22,.9)";
  } else {
    navbar.style.background = "rgba(5,8,22,.6)";
  }
});

window.addEventListener("load", () => {
  gsap.to("body", {
    opacity: 1,
    duration: 0.5,
  });
});

const message = document.getElementById("message");
const charCount = document.getElementById("charCount");

if (message && charCount) {
  message.addEventListener("input", () => {
    charCount.textContent = message.value.length;
  });
}
