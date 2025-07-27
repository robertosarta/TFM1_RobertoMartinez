let iframeProduct;
let clientProduct;
let productModelUid;
let productModel;
let productModelTags;
function catchTags(model) {
    productModelTags = [];
    for (let index = 0; index < model.tags.length && index < 2; index++) {
        productModelTags.push(model.tags[index].name);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    iframeProduct = document.getElementById(`product-api_frame`);
    if (!iframeProduct) return;
    clientProduct = new Sketchfab(iframeProduct);
    /*recupero el producto de local*/
    let productModelString = localStorage.getItem('productModel');
    if (!productModelString) {
        console.error('No se ha encontrado el productModel en localStorage');
    }
    productModel = JSON.parse(productModelString);
    /*lo dejo accesible parseado*/
    
    productModelUid = productModel.uid;
    catchTags(productModel);
    fetchFilter(productModelTags, createCard);

    console.log(productModelTags);
    clientProduct.init(productModelUid, {
        success: function onSuccess(api) {
            api.start();
            api.addEventListener("viewerready", function () {
                // API is ready to use
                // Insert your code here
                console.log("Viewer is ready");
            });
        },
        error: function onError() {
            console.log("Viewer error");
        },
    });
})
