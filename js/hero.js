const heroImage=document.querySelector(".hero-image");

document.addEventListener("mousemove",(e)=>{
    const x=(window.innerWidth/2-e.clientX)/35;
    const y=(window.innerHeight/2-e.clientY)/35;
    heroImage.style.transform=`translate(${x}px,${y}px)`;
});