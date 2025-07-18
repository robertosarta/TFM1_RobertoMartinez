const menuToggle = document.getElementById("menuButton");
const navMenu = document.getElementById("headerMenu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    menuToggle.classList.toggle("open"); // esto activa la animación
});
