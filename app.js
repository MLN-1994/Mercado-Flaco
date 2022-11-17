
let cartItems = []

const openModal = document.querySelector("#open-modal")
const closeModal = document.querySelector("#modal-close")
const modalContain = document.querySelector("#modal-container")

const renderCartItems = () => {

  document.querySelector("#cart-items").innerHTML = ""

  cartItems.forEach((item, index) => {

    addItemCart(item);

  });

  
}

//DELETE ITEMS CART
function deleteItem(id) {

  cartItems = cartItems.filter((item) => item.id != id);

  renderCartItems();

}

//open cart

openModal?.addEventListener("click", () => {


  renderCartItems();


  modalContain.classList.add("modal-container-active")
  console.log("funciona el boton")


})
//close cart
closeModal?.addEventListener("click", () => {
  modalContain.classList.remove("modal-container-active")
  console.log("funciona el boton d cierre")
})


//CART-COUNT

const cartCount = document.querySelector("#count-cart-items")

const renderCart = () => {
  cartCount.innerText = cartItems.length
}

//TOTAL PRICE CART

const totalPrice = document.querySelector("#total-price")
const renderTotalPrice = () => {
  totalPrice.innerText = "Total $ " + cartItems.reduce((acc, cart) => acc += cart.price, 0)

}
//CART-LIST DOM FUNC


function addItemCart(cart) {
  document.querySelector("#cart-items").innerHTML += ItemCart(cart)

}



//ITEMS DOM FUNC
function addItem(item) {
  document.getElementById("products-contain").innerHTML += Item(item);
}


// ad initial items
const setInitialItems = () => {

  items.forEach((item) => { addItem(item) });

};

setInitialItems();

//CARRITO

const btnsAdd = document.querySelectorAll("#add");
btnsAdd.forEach((btnAdd) => {
  btnAdd.addEventListener("click", () => {

    // Selecciona el item a agregar a la lista
    const selectedItem = items.find((item) => item.id === +btnAdd.dataset.id);

    // Remplaza el id del item por un numero aleatorio, para que en el momento de eliminarlo, no exista otro elemento en el carrito con el mismo id, y se eliminan los dos.
    cartItems.push({
      ...selectedItem,
      id: Math.floor(Math.random() * 1000000)
    });

    console.log(cartItems)

    renderCart()
    renderTotalPrice()

  })


})




// Filtra los productos por el nombre y los agrega al DOM
function searchItem(title) {

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


searchInput.addEventListener("keyup", (event) => {

  searchItem(event.target.value);

});

//guardar favs

const saveIcons = document.querySelectorAll("#saveIcon");
saveIcons.forEach((saveIcon) => {
  saveIcon.addEventListener("click", () => {

    // Selecciona el item a agregar a la lista
    const selectFav = items.find((item) => item.id === +saveIcon.dataset.id);


   localStorage.setItem('items', JSON.stringify(items));


let getLocal = localStorage.getItem('items');


console.log('Producto a guardar: ', selectFav ,JSON.parse(getLocal));
   
    });
})
 
