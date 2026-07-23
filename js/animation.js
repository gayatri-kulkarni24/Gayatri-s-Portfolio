const tl = gsap.timeline();

tl.from(".logo",{

x:-50,

opacity:0,

duration:1

})

.from(".nav-links li",{

y:-40,

opacity:0,

stagger:.12,

duration:.8

},"-=0.5")

.from(".resume-btn",{

x:40,

opacity:0,

duration:.8

},"-=0.5")

.from(".hero-animate",{

y:60,

opacity:1,

stagger:.18,

duration:1

},"-=0.3")

.from(".hero-image",{

scale:.8,

opacity:1,

duration:1

},"-=0.7");


gsap.from(".tech-badge",{

scale:.5,

opacity:1,

stagger:.15,

delay:1.8,

duration:.8,

ease:"back.out(1.7)"

});

gsap.to(".profile-circle",{

    y:-15,

    repeat:-1,

    yoyo:true,

    duration:3,

    ease:"sine.inOut"

});