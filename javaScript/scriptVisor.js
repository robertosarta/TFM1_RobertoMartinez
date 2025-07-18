// let cart = [];
// const savedCart = JSON.parse(localStorage.getItem('carrito'));
// if (savedCart) {
//     cart = savedCart   //actualiza el array desde el otro js
// } else {
//     let arrayItems = Object.values(products); //lo vuelve a crear si no existe (convierte products en array)
//     cart = arrayItems.map(p => ({
//         picture: p.picture,
//         name: p.name,
//         price: p.price,
//         about: p.about,
//         cart: p.cart,
//         uid: p.uid,
//     }));
// }

// const productosPorNombre = {};
// cart.forEach(p => {
//     productosPorNombre[p.name.toLowerCase()] = p;
// });

// let presentationModels = [
//     "witch",
//     "morpheus",
//     "tipche"
// ];

// function searchUid(key) {
//     const product = productosPorNombre[key.toLowerCase()];
//     if (!product) return null;
//     return product.uid;
// }

let uid1 = "6e47b68d13a0413d8fd5fa248a639e8b";
let iframe1 = document.getElementById(`api-frame-TiPche`);
// By default, the latest version of the viewer API will be used.
let client1 = new Sketchfab(iframe1);
client1.init(uid1, {
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

const uid2 = "a4f51228a33146159b2c65385baa2f51";
const iframe2 = document.getElementById(`api-frame-Witch`);
// By default, the latest version of the viewer API will be used.
const client2 = new Sketchfab(iframe2);
client2.init(uid2, {
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


const uid3 = "aea0f05978384dc992398ab122c7f2f8";
const iframe3 = document.getElementById(`api-frame-Morpheus`);
// By default, the latest version of the viewer API will be used.
const client3 = new Sketchfab(iframe3);
client3.init(uid3, {
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

