let cart = [];
let savedCart = JSON.parse(localStorage.getItem('cart')); /*cuidado para debuggear esto no deja reiniciar los stats de las cards, starMarked no actualiza aunque hagas localStorage.clear()*/

if (savedCart){
    cart = savedCart   //actualiza el array desde el otro js
}

function randomPrice() {
    return Math.floor(Math.random() * 200) + 1;
}

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
}

function saveItemData(item) {
    if (cart.find(i => i.uid === item.uid)) {
        return;
    }else {
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
} 

function crearElemento(tipo, classElement, text, src, alt, aria) {
    const elem = document.createElement(tipo);
    if (classElement) elem.className = (classElement);
    if (text) elem.textContent = (text);
    if (src) elem.src = (src);
    if (alt) elem.alt = (alt);
    if (aria) elem.setAttribute("aria-label", aria);
    return elem;
};

const modelSection = document.querySelector(".model-section");
function createCard(models) {
    models.forEach(model => {
        const savedModel = cart.find(item => item.uid === model.uid);
        if (savedModel) {
            model.likeCount = savedModel.likeCount;
            model.starMarked = savedModel.starMarked;
        }else {
            model.starMarked = false;
        }

        const imageUrl = chooseImage(model.thumbnails.images).url;
        const modelCard = crearElemento("div", "model-card");
        const imageContainer = crearElemento("div", "image-container");
        const modelImage = crearElemento("img", "model-card-iframe", null, `${imageUrl}`);

        const modelInfoContainer = crearElemento("div", "model-info-container");
        const modelName = crearElemento("h4", "model-info_name fs-text font-text", `${model.name}`);
        const modelInfoReactionsContainer = crearElemento("div", "model-info_reactions-container");

        const modelInfoReactionsContainerViews = crearElemento("div", "model-info_reactions-container_element");
        const iconViews = crearElemento("i", "bi bi-eye-fill fs-text font-text");
        const viewCount = crearElemento("h5", "fs-text font-text", `${model.viewCount}`);

        const modelInfoReactionsContainerComments = crearElemento("div", "model-info_reactions-container_element");
        const iconComments = crearElemento("i", "bi bi-chat-fill fs-text font-text");
        const commentCount = crearElemento("h5", "fs-text font-text", `${model.commentCount}`);

        const modelInfoReactionsContainerLikes = crearElemento("div", "model-info_reactions-container_element");
        const iconLikes = crearElemento("i", "bi bi-star-fill fs-text font-text");
        const likesCount = crearElemento("h5", "fs-text font-text", `${model.likeCount}`);


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

        modelName.addEventListener("click", () =>{
            saveItemData(model);
        });

        modelInfoReactionsContainerComments.addEventListener("click", () =>{
            saveItemData(model);
            /*y hacer el link a la pagina de visualizacion*/
        });

        modelInfoReactionsContainerLikes.addEventListener("click", () =>{
            if (model.starMarked) {
                return;
            }
            
            model.likeCount++
            model.starMarked = true;

            const itemInCart = cart.find(i => i.uid === model.uid);
            if (!itemInCart) {
                cart.push({...model});
            }else {
                itemInCart.likeCount = model.likeCount;
                model.starMarked = true;
            }
            likesCount.textContent = model.likeCount
            
            localStorage.setItem('cart', JSON.stringify(cart));
            console.log("Cart actualizado:", cart);
            console.log("HOLA")
        });
    });
}



let nextPageURL = null;
function fetchFilter(filter, createCard, url = null) {
    const apiUrl = url || `https://api.sketchfab.com/v3/search?type=models&q=${filter}&count=24`;
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
            console.log("Respuesta completa de la API:", data); /*PARA VER QUE ME DEVUELVE*/
        });

}

const loadNext = document.querySelector(".model-section_load-next");
loadNext.addEventListener("click", () => {
    if (nextPageURL) {
        fetchFilter(null, createCard, nextPageURL)
    } else {
        window.alert("No hay mas resultados");
    }
});



fetchFilter("demon", createCard);
