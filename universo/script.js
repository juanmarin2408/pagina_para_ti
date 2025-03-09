const canvas = document.getElementById("space");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < 200; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let radius = Math.random() * 2;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();
    }
}

const planets = [
    { x: 200, y: 300, size: 200, image: "earth.jpg", name: "Tierra", message: "No te puedo regalar el universo, pero si te puedo hacer uno, te quiero majo", img: new Image() },
    { x: 700, y: 600, size: 200, image: "mars.jpg", name: "Marte", img: new Image() },
    { x: 900, y: 200, size: 200, image: "jupiter.jpg", name: "Júpiter", img: new Image() },
    { x: 420, y: 300, size: 150, image: "luna.png", name: "Luna", img: new Image() },
    { x: 1200, y: 250, size: 300, image: "saturn.jpg", name: "Saturno", img: new Image() }
];

planets.forEach(planet => {
    planet.img.src = planet.image;
});

function drawPlanets() {
    planets.forEach(planet => {
        ctx.drawImage(planet.img, planet.x, planet.y, planet.size, planet.size);
    });
}

function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawStars();
    drawPlanets();
}

planets.forEach(planet => {
    planet.img.onload = render;
});

canvas.addEventListener("click", (event) => {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    
    planets.forEach(planet => {
        const dx = mouseX - (planet.x + planet.size / 2);
        const dy = mouseY - (planet.y + planet.size / 2);
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < planet.size / 2) {
            if (planet.name === "Tierra") {
                alert(planet.message);
            }
        }
    });
});

alert("Te daria esto y mucho mas");
alert("Porque te lo mereces");
alert("cada estrella es un te quiero");