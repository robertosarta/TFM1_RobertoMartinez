const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    menuToggle.classList.toggle("open"); // esto activa la animación
});
