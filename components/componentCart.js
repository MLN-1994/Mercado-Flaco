function ItemCart(cart) {
    return `
    <div class="products-cart">
      <div>
        <img src="${cart.image}" alt=""  class="img-product-cart">
      </div>
      <div>
        <h5 class="cart-title">${cart.title}</h5>
      </div>
      <div class="cart-price">$${cart.price}</div>
      <div class="delete-product">
        <img class="delete" onclick="deleteItem(${cart.id})" src="./images/borrar.png" alt="">
      </div>
    </div>`
  }