let cart = [];
let savedCart = JSON.parse(localStorage.getItem('cart')); /*cuidado para debuggear esto no deja reiniciar los stats de las cards, starMarked no actualiza aunque hagas localStorage.clear()*/
let nextPageSensor = false;
let isPopularActive = false;
let filtersInput = document.getElementById("filters-input_search");
let filtersButton = document.getElementById("filters-button_search");

if (savedCart) {
    cart = savedCart   //actualiza el array desde el otro js
};

function randomPrice() {
    return Math.floor(Math.random() * 200) + 1;
};

function chooseImage(array) {
    if (!array || array.length === 0) {
        return { url: "./images/fallback.jpg" };
    } else {
        let choosenHeight = array[0];
        array.forEach(image => {
            if (image.height > choosenHeight.height) {
                choosenHeight = image
            }
        });
        return choosenHeight;
    }
};

function saveItemData(item) {
    if (cart.find(i => i.uid === item.uid)) {
        return;
    } else {
        const savedItem = {
            picture: chooseImage(item.thumbnails.images).url,
            name: item.name,
            price: randomPrice(),
            description: item.description,
            cart: item.cart || false,
            uid: item.uid,
            commentCount: item.commentCount,
            faceCount: item.faceCount,
            likeCount: item.likeCount,
            tags: item.tags,
            starMarked: false
        };
        cart.push(savedItem);
        localStorage.setItem('cart', JSON.stringify(cart));
        console.log("Item guardado:", savedItem);
    }
};

function crearElemento(tipo, classElement, text, src, alt, aria) {
    const elem = document.createElement(tipo);
    if (classElement) elem.className = (classElement);
    if (text) elem.textContent = (text);
    if (src) elem.src = (src);
    if (alt) elem.alt = (alt);
    if (aria) elem.setAttribute("aria-label", aria);
    return elem;
};

function assignFilter(elem, filter) {
    elem.forEach(button => {
        button.addEventListener("click", () => {
        nextPageSensor = false;
        fetchFilter(filter, createCard);
    });
    });
};

const popularFilter = document.querySelectorAll(".filter_popular")
const characterFilter = document.querySelectorAll(".filter_personajes");
const creatureFilter = document.querySelectorAll(".filter_criaturas");
const structureFilter = document.querySelectorAll(".filter_estructuras");
const animalsFilter = document.querySelectorAll(".filter_animales");
const arquitectureFilter = document.querySelectorAll(".filter_arquitectura");
const filterVehicle = document.querySelectorAll(".filter_vehiculos");
const filterHistoric = document.querySelectorAll(".filter_historico");
const filterElectronic = document.querySelectorAll(".filter_electronica");
const filterStyle = document.querySelectorAll(".filter_estilo");
const filterFood = document.querySelectorAll(".filter_comida");
const filterDecoration = document.querySelectorAll(".filter_decoracion");
const filterPlants = document.querySelectorAll(".filter_plantas");
const filterWeapons = document.querySelectorAll(".filter_armas");
assignFilter(characterFilter, "character");
assignFilter(creatureFilter, "creature");
assignFilter(structureFilter, "stucture");
assignFilter(animalsFilter, "pet, animal");
assignFilter(arquitectureFilter, "arquitecture");
assignFilter(filterVehicle, "vehicle");
assignFilter(filterHistoric, "historic");
assignFilter(filterElectronic, "electronic");
assignFilter(filterStyle, "style");
assignFilter(filterFood, "food");
assignFilter(filterDecoration, "decoration, home");
assignFilter(filterPlants, "plant");
assignFilter(filterWeapons, "weapon");
popularFilter.forEach(button => {
    button.addEventListener("click", () => {
        nextPageSensor = false;
        fetchFilter("", createCard, null, true);
    });
});

function searchFilter() {
    const inputvalue = filtersInput.value;
    nextPageSensor = false;
    fetchFilter(inputvalue, createCard);
};
filtersButton.addEventListener('click', searchFilter);
filtersInput.addEventListener('keydown', (e) => {
    if (e.key === 'enter'){
        searchFilter();
    }
});


const modelSection = document.querySelector(".model-section");
function createCard(models) {
    if (!nextPageSensor) {
        modelSection.innerHTML = "";
    }
    models.forEach(model => {
        const savedModel = cart.find(item => item.uid === model.uid);
        if (savedModel) {
            model.likeCount = savedModel.likeCount;
            model.starMarked = savedModel.starMarked;
        } else {
            model.starMarked = false;
        }

        const imageUrl = chooseImage(model.thumbnails.images).url;
        const modelCard = crearElemento("div", "model-card");
        const imageContainer = crearElemento("div", "image-container");
        const modelImage = crearElemento("img", "model-card-iframe", null, imageUrl);

        const modelInfoContainer = crearElemento("div", "model-info-container");
        const modelName = crearElemento("h4", "model-info_name fs-text font-text", model.name);
        const modelInfoReactionsContainer = crearElemento("div", "model-info_reactions-container");

        const modelInfoReactionsContainerViews = crearElemento("div", "model-info_reactions-container_element");
        const iconViews = crearElemento("i", "bi bi-eye-fill fs-text font-text");
        const viewCount = crearElemento("h5", "fs-text font-text", model.viewCount);

        const modelInfoReactionsContainerComments = crearElemento("div", "model-info_reactions-container_element");
        const iconComments = crearElemento("i", "bi bi-chat-fill fs-text font-text");
        const commentCount = crearElemento("h5", "fs-text font-text", model.commentCount);

        const modelInfoReactionsContainerLikes = crearElemento("div", "model-info_reactions-container_element");
        const iconLikes = crearElemento("i", "bi bi-star-fill fs-text font-text");
        const likesCount = crearElemento("h5", "fs-text font-text", model.likeCount);


        modelSection.appendChild(modelCard);
        modelCard.appendChild(imageContainer);
        imageContainer.appendChild(modelImage);

        modelCard.appendChild(modelInfoContainer);
        modelInfoContainer.appendChild(modelName);
        modelInfoContainer.appendChild(modelInfoReactionsContainer);
        modelInfoReactionsContainer.append(modelInfoReactionsContainerViews, modelInfoReactionsContainerComments, modelInfoReactionsContainerLikes);
        modelInfoReactionsContainerViews.append(iconViews, viewCount);
        modelInfoReactionsContainerComments.append(iconComments, commentCount);
        modelInfoReactionsContainerLikes.append(iconLikes, likesCount);

        imageContainer.addEventListener("click", () => {
            saveItemData(model);
            localStorage.setItem('selectedUID', model.uid);
            window.location.href = "./product.html";
        });

        modelName.addEventListener("click", () => {
            saveItemData(model);
            localStorage.setItem('selectedUID', model.uid);
            window.location.href = "./product.html";
        });

        modelInfoReactionsContainerComments.addEventListener("click", () => {
            saveItemData(model);
            localStorage.setItem('selectedUID', model.uid);
            window.location.href = "./html/product.html#seccionEspecial";
        });

        modelInfoReactionsContainerLikes.addEventListener("click", () => {
            if (model.starMarked) {
                return;
            }
            model.likeCount++;
            model.starMarked = true;

            const itemInCart = cart.find(i => i.uid === model.uid);
            if (!itemInCart) {
                cart.push({ ...model });
            } else {
                itemInCart.likeCount = model.likeCount;
                model.starMarked = true;
            }
            likesCount.textContent = model.likeCount

            localStorage.setItem('cart', JSON.stringify(cart));
            console.log("Cart actualizado:", cart);
        });
    });
};

let nextPageURL = null;
function fetchFilter(filter, createCard, url = null, filterPopular = false) {
    isPopularActive = filterPopular;
    let apiUrl;
    if (url) {
        apiUrl = url;
    }else if (filterPopular) {
        apiUrl = url || 'https://api.sketchfab.com/v3/search?type=models&sort_by=-likeCount&count=24'
    }else {
        apiUrl = url || `https://api.sketchfab.com/v3/search?type=models&q=${filter}&count=24`
    }
    fetch(apiUrl, {
        headers: {
            'Authorization': 'Token 6c0d4578e96b4b10b04fba257249d6a1'
        }
    })
        .then(res => res.json())
        .then(data => {
            const models = data.results;
            createCard(models);
            nextPageURL = data.next;
            nextPageSensor = true;
            console.log("Respuesta completa de la API:", data); /*PARA VER QUE ME DEVUELVE*/
        });
};

const loadNext = document.querySelector(".model-section_load-next");
loadNext.addEventListener("click", () => {
    if (nextPageURL) {
        fetchFilter(null, createCard, nextPageURL, isPopularActive)
    } else {
        window.alert("No hay mas resultados");
    }
});

fetchFilter("demon", createCard);
