
//MODAL-CARRITO
const openModal = document.querySelector("#open-modal")
const closeModal = document.querySelector("#modal-close")
const modalContain = document.querySelector("#modal-container")

openModal.addEventListener("click", () => {
  modalContain.classList.add("modal-container-active")
  console.log("funciona el boton")

})

closeModal.addEventListener("click", () => {
  modalContain.classList.remove("modal-container-active")
  console.log("funciona el boton d cierre")
})


//PRODUCT-LIST

function Item(item) {

  return `<div class="product-box">
      <div class="img-contain">
        <img class="img-product" src="${item.image}" alt="">
      </div>
      <div class=" title-price">
        <h3 class="product-title">${item.title}</h3>
        <h4 class="price">$${item.price}</h4>
      </div>
      <div class="info">
        <span class="dues">6 x $${item.dues}, sin interes.</span>
        <br>
        <br>
        <span class="description">${item.description}</span>
      </div>
      <div class="btn">
        <buttom id="add" class="add">Sumar</buttom>
    </div>
  </div>`
}

function addItem(item) {
  document.getElementById("products-contain").innerHTML += Item(item);
}

const items = [
  {
    id: 1,
    image: "https://http2.mlstatic.com/D_Q_NP_667712-MLA46445221923_062021-AB.webp",
    title: "Kit teclado y mous 1",
    price: 9599,
    dues: 1599.83,
    description: "Kit de teclado y mouse gamer Razer Cynosa Lite + Abyssus Lite Español de color negro"
  },
  {
    id: 2,
    image: "https://http2.mlstatic.com/D_Q_NP_714842-MLA51838842275_102022-AB.webp",
    title: "Notebook Lenovo V-series",
    price: 9599,
    dues: 1599.83,
    description: "V15 G1 Iml Iron Gray 15.6 , Intel Core I3 10110u 8gb De Ram 1tb Hdd, Intel Uhd Graphics 1366x768px Sin So"
  },
  {
    id: 3,
    image: "https://http2.mlstatic.com/D_NQ_NP_976403-MLA51364537264_082022-W.webp",
    title: "Pc Armada Ryzen",
    price: 9599,
    dues: 1599.83,
    description: "5 5600g 6/12 Nucleos 16g "
  },
  {
    id: 4,
    image: "https://http2.mlstatic.com/D_NQ_NP_612294-MLA52221546173_102022-V.webp",
    title: "Auriculares Redragon Zeus",
    price: 9599,
    dues: 1599.83,
    description: "Experimentá la adrenalina de sumergirte en la escena de otra manera! Tener auriculares específicos para jugar cambia completamente tu experiencia en cada partida."
  },
  {
    id: 5,
    image: "https://http2.mlstatic.com/D_NQ_NP_973781-MLA48131216539_112021-W.webp",
    title: "Monitor gamer Samsung F24T35 led 24",
    price: 9599,
    dues: 1599.83,
    description: "Este monitor de 24 te va a resultar cómodo para estudiar, trabajar o ver una película en tus tiempos de ocio. "
  },
  {
    id: 6,
    image: "https://http2.mlstatic.com/D_NQ_NP_754878-MLA42899391576_072020-V.webp",
    title: "Parlante Genius SP-HF180 negro ",
    price: 9599,
    dues: 1599.83,
    description: "Genius SP-HF180 ofrece un sonido natural, con una gran claridad y precisión, que se dispersa de manera uniforme."
  },
  {
    id: 7,
    image: "https://http2.mlstatic.com/D_NQ_NP_787221-MLA48007684849_102021-V.webp",
    title: "Smart TV Samsung Series 7 UN50AU7000GCZB LED 4K 50",
    price: 9599,
    dues: 1599.83,
    description: "La cantidad de pixeles que ofrece es 4 veces mayor que la Full HD, ¿el resultado? Escenas mucho más realistas y con un nivel de detalle increíble"
  },
  {
    id: 8,
    image: "https://http2.mlstatic.com/D_NQ_NP_822203-MLA52221738161_102022-V.webp",
    title: "Notebook HP 14-dq2029la plata natural 14",
    price: 9599,
    dues: 1599.83,
    description: "Intel Core i5 1135G7 8GB de RAM 256GB SSD, Intel Iris Xe Graphics G7 80EUs 1366x768px Windows 10 Home"
  },
  {
    id: 9,
    image: "https://http2.mlstatic.com/D_NQ_NP_746987-MLA45385615382_032021-V.webp",
    title: "Mouse de juego Logitech G Series Lightsync G203 negro ",
    price: 9599,
    dues: 1599.83,
    description: "El mouse de juego te ofrecerá la posibilidad de marcar la diferencia y sacar ventajas en tus partidas. Su conectividad y sensor suave ayudará a que te desplaces rápido por la pantalla."
  },
  {
    id: 10,
    image: "https://http2.mlstatic.com/D_NQ_NP_648229-MLA48377926983_112021-V.webp",
    title: "Kit de teclado y mouse inalámbrico Logitech MK540 Español Latinoamérica de color negro ",
    price: 9599,
    dues: 1599.83,
    description: "El combo de teclado y mouse Logitech es perfecto para ayudarte a desarrollar tus actividades diarias."
  },
]

// ad initial items
const setInitialItems = () => {

  items.forEach((item) => { addItem(item) });

};

setInitialItems();


//AGREGAR A CARRITO
  const addToCart = (id) =>{
    const product = items.find( (item) => item.id === id )
    items.push(product)
    console.log(product)
  }
  addToCart(4)
  addToCart(6)

// Filtra los productos por el nombre y los agrega al DOM
function searchItem(title){

  // Items filtrados
  const filteredItems = items.filter((item) => {

    const itemTitle = item.title.toLowerCase();
    const searchTitle = title.toLowerCase();


    return itemTitle.includes(searchTitle);

  });

  // Limpiar el listado de items
  document.getElementById("products-contain").innerHTML = "";

  // Agregar los items filtrados
  filteredItems.forEach((item) => { addItem(item) });

}

// Search input
const searchInput = document.querySelector('#search-input');

// detectar cambios en el input
searchInput.addEventListener("keyup", (event) => {

  searchItem(event.target.value);

});