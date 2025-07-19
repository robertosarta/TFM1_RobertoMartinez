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

let uid1 = "aea0f05978384dc992398ab122c7f2f8";
let iframe1 = document.getElementById(`api-frame-Morpheus`);
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


const uid3 = "ab4cadb444a44f7883995ddb3bf3d087";
const iframe3 = document.getElementById(`api-frame-StitchedSwordsman`);
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

const uid4 = "f3e5a8e7f36a4c7496f5c775acf010b7";
const iframe4 = document.getElementById(`api-frame-Temple`);
// By default, the latest version of the viewer API will be used.
const client4 = new Sketchfab(iframe4);
client4.init(uid4, {
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

