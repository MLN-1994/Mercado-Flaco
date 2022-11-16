// item html dom
function Item(item) {

    return `<div class="product-box">
     <span id="saveIcon"  class="material-symbols-outlined">
     bookmark
     </span>
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
          <buttom id="add" data-id="${item.id}" class="add">Agregar al carrito</buttom>
      </div>
    </div>`
  
  
  }

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
  