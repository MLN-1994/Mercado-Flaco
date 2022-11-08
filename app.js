
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
        <buttom id="add">Sumar</buttom>
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
    image: "https://http2.mlstatic.com/D_Q_NP_667712-MLA46445221923_062021-AB.webp",
    title: "Kit Gamer Tedge Teclado + Mouse + Auriculares Color Negro",
    price: 9599,
    dues: 1599.83,
    description: "Kit de teclado y mouse gamer Razer Cynosa Lite + Abyssus Lite Español de color negro"
  },
  {
    id: 3,
    image: "https://http2.mlstatic.com/D_Q_NP_667712-MLA46445221923_062021-AB.webp",
    title: "Kit teclado y mous 2",
    price: 9599,
    dues: 1599.83,
    description: "Kit de teclado y mouse gamer Razer Cynosa Lite + Abyssus Lite Español de color negro"
  },
  {
    id: 4,
    image: "https://http2.mlstatic.com/D_Q_NP_667712-MLA46445221923_062021-AB.webp",
    title: "Kit teclado y mous 2",
    price: 9599,
    dues: 1599.83,
    description: "Kit de teclado y mouse gamer Razer Cynosa Lite + Abyssus Lite Español de color negro"
  },
  {
    id: 5,
    image: "https://http2.mlstatic.com/D_Q_NP_667712-MLA46445221923_062021-AB.webp",
    title: "Kit teclado y mous 2",
    price: 9599,
    dues: 1599.83,
    description: "Kit de teclado y mouse gamer Razer Cynosa Lite + Abyssus Lite Español de color negro"
  },
  {
    id: 6,
    image: "https://http2.mlstatic.com/D_Q_NP_667712-MLA46445221923_062021-AB.webp",
    title: "Kit teclado y mous 2",
    price: 9599,
    dues: 1599.83,
    description: "Kit de teclado y mouse gamer Razer Cynosa Lite + Abyssus Lite Español de color negro"
  },
]

items.forEach((item) => {
  addItem(item)
})

//PRODUCT-FILTER

const searchBtn = document.getElementById("search-button")
searchBtn.addEventListener("click", () => {
  const searchInput = document.getElementById("search-input").value

  console.log(searchInput)
})
