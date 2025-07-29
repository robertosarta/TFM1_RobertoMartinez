const menuToggle = document.getElementById("menuButton");
const desplegableMenu = document.getElementById("desplegable-menu");
const subscribeInput = document.getElementById("subscribe-input");
const subscribeButton = document.getElementById("subscribe-button");
const subscribePopUp = document.querySelector(".subscribe-popup");
let subscribeButtonInit = false;
let subscribeButtonPopUp = document.querySelectorAll(".subscribe-popup_show");
const createAccountButton = document.getElementById("create-account");

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

document.getElementById("catalogButton").addEventListener("click", () => {
    sessionStorage.setItem("catalogInit", "true");
    window.location.href = "./html/catalog.html";
})

subscribeButton.addEventListener('click', () => {
    if (!subscribeButtonInit && subscribeInput.value){
        subscribePopUp.classList.add("subscribe-popup_show");
        subscribeButtonInit = true;
    }
    
});
subscribeInput.addEventListener('keydown', (e) => {
    if ((e.key === 'Enter') && (!subscribeButtonInit) && (subscribeInput.value)){
        subscribePopUp.classList.add("subscribe-popup_show");
        subscribeButtonInit = true;
    }
});
subscribeButtonPopUp.forEach(element => {
    element.addEventListener('click', () => {
        if(subscribeButtonInit && subscribeInput.value){
            subscribePopUp.classList.remove("subscribe-popup_show");
            subscribeButtonInit = false;
        }
    } )
});

createAccountButton.addEventListener('click', () =>{
    window.location.href = "./signin.html";
})


