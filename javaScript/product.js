function createCard(models) {
        modelSection.innerHTML = "";

        const savedModel = cart.find(item => item.uid === model.uid);
        if (savedModel) {
            model.likeCount = savedModel.likeCount;
            model.starMarked = savedModel.starMarked;
        } else {
            model.starMarked = false;
        }

        const iframe = crearElemento("iframe", );
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
};

document.addEventListener("DOMContentLoaded", () => {
    const uid = localStorage.getItem('selectedUID');
    if(uid) {
        fetch(`https://api.sketchfab.com/v3/models/${uid}`)
        .then(res => res.json())
        .then(models => {
            createCard(models);
            
        });
    }
})