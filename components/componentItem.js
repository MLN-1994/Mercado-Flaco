
function Item(item) {

    return `<div class="product-box">
    <span data-save="${item.id}" data-id="${item.id}"  class="material-symbols-outlined">
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


  