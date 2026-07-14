document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".track");

    if (!track) return;

    // Duplica tantas veces como sea necesario para llenar la pantalla
    while (track.scrollWidth < window.innerWidth * 2) {
        track.innerHTML += track.innerHTML;
    }

    let x = 0;
    const speed = 0.5; // píxeles por frame

    function animate() {
        x += speed;

        // Cuando recorrió la mitad, vuelve a empezar sin que se note
        if (x >= track.scrollWidth / 2) {
            x = 0;
        }

        track.style.transform = `translateX(${-x}px)`;
        requestAnimationFrame(animate);
    }

    animate();
});