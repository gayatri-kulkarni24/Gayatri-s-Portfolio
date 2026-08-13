// ================================
// PREMIUM LOADING SCREEN
// ================================

document.body.classList.add("loading");

const loader = document.getElementById("loader");
const progress = document.querySelector(".loader-progress");
const percent = document.getElementById("loader-percent");
const loaderLogo = document.querySelector(".loader-logo");

const loaderTimeline = gsap.timeline();

/* Logo appears */

loaderTimeline.to(loaderLogo, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power3.out",
});

/* Progress */

loaderTimeline.to(progress, {
    width: "100%",
    duration: 1.8,
    ease: "power2.inOut",
    onUpdate: function () {
        const value = Math.round(this.progress() * 100);
        percent.textContent = `${value}%`;
    },
});

/* Small pause */

loaderTimeline.to(
    {},
    {
        duration: 0.2,
    },
);

/* Hide loader */
loaderTimeline.to(loader, {
    yPercent: -100,
    duration: 1,
    ease: "power4.inOut",
    onComplete: () => {
        document.body.classList.remove("loading");
        loader.style.display = "none";
    },
});
