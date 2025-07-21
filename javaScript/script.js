const menuToggle = document.getElementById("menuButton");
const desplegableMenu = document.getElementById("desplegable-menu");

menuToggle.addEventListener("click", () => {
    desplegableMenu.classList.toggle("open");
    menuToggle.classList.toggle("open"); // esto activa la animación
});

// PARALAX CARDS
document.querySelectorAll('.card-custom').forEach(card => {
    const frontImg = card.querySelector('.card-img_front');

    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width -0.5;
        const y = (e.clientY - rect.top) / rect.height -0.5;

        frontImg.style.transform = `translate(${x * 1.5}rem, ${y * 1.5}rem)`; 
    })

    card.addEventListener('mouseleave', () => {
        frontImg.style.transform = 'translate(0, 0';
    })
});


