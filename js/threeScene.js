// =============================
// THREE.JS PARTICLE BACKGROUND
// =============================

const canvas = document.getElementById("bg-canvas");
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
camera.position.z = 8;

// Particles
const particleCount = 3000;
const positions = [];

for (let i = 0; i < particleCount; i++) {
    positions.push(
        (Math.random() - 0.5) * 35,
        (Math.random() - 0.5) * 35,
        (Math.random() - 0.5) * 35
    );
}

const geometry = new THREE.BufferGeometry();
geometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(positions, 3)
);

const material = new THREE.PointsMaterial({
    color: 0x60A5FA,
    size: 0.05,
    transparent: true,
    opacity: 0.9,
    blending: THREE.AdditiveBlending,
    depthWrite: false
});

const particles = new THREE.Points(
    geometry,
    material
);

scene.add(particles);

// Animation
function animate() {
    requestAnimationFrame(animate);
    particles.rotation.y += 0.00015;
    particles.rotation.x += 0.00008;
    renderer.render(scene, camera);
}
animate();

// Resize
window.addEventListener("resize", () => {
    camera.aspect =
        window.innerWidth /
        window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(
        window.innerWidth,
        window.innerHeight
    );
});

document.addEventListener("mousemove", (e) => {
    particles.rotation.y =
        (e.clientX / window.innerWidth) * 0.3;
    particles.rotation.x =
        (e.clientY / window.innerHeight) * 0.3;
});