// let products = {
//         Example:{
//             picture:"",
//             name: "",
//             price: "", /*añadirlo de forma aleatoria entre 1 y 200*/
//             description: "",
//             cart: 0,
//             uid: "",
//             commentCount: "",
//             faceCount: "",
//             likeCount: "",
//             tags: "",
//         },
//     };

// let cart = [];  //creo un carrito vacio
// const savedCart = JSON.parse(localStorage.getItem('carrito'));
// if (savedCart){
//     cart = savedCart   //actualiza el array desde el otro js
// }else {
//     let arrayItems = Object.values(products); //lo vuelve a crear si no existe (convierte products en array)
//     cart = arrayItems.map(p => ({
//     picture: p.picture,
//     name: p.name,
//     price: p.price,
//     description: p.description,
//     cart: p.cart,
//     uid: p.uid,
//     commentCount: p.commentCount,
//     faceCount: p.faceCount,
//     likeCount: p.likeCount,
//     tags: p.tags
// }));
// }

