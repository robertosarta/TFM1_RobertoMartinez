let iframeProduct;
let clientProduct;
let productModelUid;
let productModel;
let productModelTags;
let filtersInputProducts = document.getElementById("filters-input_search_products");
let filtersButtonProducts = document.getElementById("filters-button_search_products");
function catchTags(model) {
    productModelTags = [];
    for (let index = 0; index < model.tags.length && index < 2; index++) {
        productModelTags.push(model.tags[index].name);
    }
}

function searchFilter() {
    nextPageSensor = false;
    sessionStorage.setItem("catalogInit", "true");
    sessionStorage.setItem("selectedFilter", filtersInputProducts.value);
    sessionStorage.setItem("popularActive", "false");
    window.location.href = "./catalog.html"
};


filtersButtonProducts.addEventListener('click', () => {searchFilter()});
filtersInputProducts.addEventListener('keydown', (e) => {
    if (e.key === 'Enter'){
        searchFilter();
    }
});

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
    fetchFilter(productModelTags, (models) => createCard(models, true));
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



