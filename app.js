
let cartItems = []

const openModal = document.querySelector("#open-modal")
const closeModal = document.querySelector("#modal-close")
const modalContain = document.querySelector("#modal-container")

const renderCartItems = () => {

  document.querySelector("#cart-items").innerHTML = ""

  cartItems.forEach((item) => {

    addItemCart(item);

  });


}

//DELETE ITEMS CART
function deleteItem(id) {

  cartItems = cartItems.filter((item) => item.id != id);


  renderCartItems();
  //llamo a renderCart y me descuenta los items del producto al borrar
  // llamando totalprice descuento el precio del producto sumado
  renderCart();
  renderTotalPrice();
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

const saveIcons = document.querySelectorAll("[data-save]");
saveIcons.forEach((saveIcon) => {

  saveIcon.addEventListener("click", () => {

    // Guarda el id del item
    const itemId = saveIcon.dataset.save;

    // Busca el item en el array de items
    const itemSelected = items.find((item) => item.id == itemId);

    // Busca los items que ya entan guardados en el localStorage y si no hay, crea un array vacio
    const savedItems = JSON.parse(localStorage.getItem("favs")) || [];

    // Busca si el item ya esta guardado
    const itemExists = savedItems.find((item) => item.id == itemId);

    // Si el item ya esta guardado, lo elimina del array de items guardados, si no, lo agrega
    if (itemExists) {

      // Filtra los items guardados y crea un nuevo array sin el item seleccionado
      const newSavedItems = savedItems.filter((item) => item.id != itemId);

      // Guarda el nuevo array en el localStorage, sin el item en el que se hizo click.
      localStorage.setItem("favs", JSON.stringify(newSavedItems));

      // saveIcon.classList.remove("save-active");

    // Si el item no esta guardado, lo agrega al array de items guardados
    } else {

      // Agrega el item seleccionado al array de items guardados
      savedItems.push(itemSelected);

      // Guarda el array de items guardados en el localStorage
      localStorage.setItem("favs", JSON.stringify(savedItems));

      // saveIcon.classList.add("save-active");

    }

  });

})




// const saveIcons = document.querySelectorAll("#saveIcon");
// saveIcons.forEach((saveIcon) => {
//   saveIcon.addEventListener("click", () => {

//     const selectFav = items.find((item) => item.id === +saveIcon.dataset.id);
//     localStorage.setItem('favs', JSON.stringify(items));
    
//     let getLocal = localStorage.getItem('favs');
//     console.log('Producto a guardar: ', selectFav, JSON.parse(getLocal));

//   });
// })




// FETCH
 
function callPromos() {
  const promos = document.querySelector("#promos")
  fetch(" ./promos.json")
    .then((resp) => resp.json())
    .then((data) => {

    

      data.promotions.forEach(promo => {

        const promoHtml = `
          <div class="promo-contain">
          <img class="banner-imgs" src="${promo.image}" alt="">
          <h4 class="banner-title">${promo.name}</h4>
        </div>
        `

        promos.innerHTML += promoHtml;

      })

    
    })
    .catch((error) => {
      console.log(error)
    })
}
callPromos()