
  //MODAL-LOG
  const openModal = document.getElementById("btn-login")
  const closeModal = document.getElementById("modal-cerrar")
  const modalContain = document.getElementById("modal-container")

  openModal.addEventListener("click", () => {
    modalContain.classList.add("modal-container-active")
    console.log("funciona el boton")
    
  })
  
  closeModal.addEventListener("click", () => {
    modalContain.classList.remove("modal-container-active")
    console.log("funciona el boton")
  })


//PRODUCT-LIST

function Item(item){
  
    return `<div class="product-box">
      <div class="img-contain">
        <img class="img-product" src="${item.image}" alt="">
      </div>
      <div class=" title-price">
        <h3 class="product-title">${item.title}</h3>
        <h4 class="price">$${item.price}</h4>
      </div>
      <div class="info">
        <spam>6 x $${item.dues}, sin interes.</spam>
        <br>
        <br>
        <spam>${item.description}</spam>
      </div>
      <div class="btn">
        <buttom id="add">Sumar</buttom>
    </div>
  </div>`
  }
  
  function addItem(item){
    document.getElementById("products-contain").innerHTML += Item(item);
  }
  
  const items = [
    {
    image : "https://http2.mlstatic.com/D_Q_NP_667712-MLA46445221923_062021-AB.webp",
    title : "Kit teclado y mous 1",
    price :  9599,
    dues: 1599.83,
    description:"Kit de teclado y mouse gamer Razer Cynosa Lite + Abyssus Lite Español de color negro"
  },
    {
    image : "https://http2.mlstatic.com/D_Q_NP_667712-MLA46445221923_062021-AB.webp",
    title : "Kit Gamer Tedge Teclado + Mouse + Auriculares Color Negro",
    price : 9599,
    dues: 1599.83,
    description:"Kit de teclado y mouse gamer Razer Cynosa Lite + Abyssus Lite Español de color negro"
  },
    {
    image : "https://http2.mlstatic.com/D_Q_NP_667712-MLA46445221923_062021-AB.webp",
    title : "Kit teclado y mous 2",
    price : 9599,
    dues: 1599.83,
    description:"Kit de teclado y mouse gamer Razer Cynosa Lite + Abyssus Lite Español de color negro"
  },
    {
    image : "https://http2.mlstatic.com/D_Q_NP_667712-MLA46445221923_062021-AB.webp",
    title : "Kit teclado y mous 2",
    price : 9599,
    dues: 1599.83,
    description:"Kit de teclado y mouse gamer Razer Cynosa Lite + Abyssus Lite Español de color negro"
  },
    {
    image : "https://http2.mlstatic.com/D_Q_NP_667712-MLA46445221923_062021-AB.webp",
    title : "Kit teclado y mous 2",
    price : 9599,
    dues: 1599.83,
    description:"Kit de teclado y mouse gamer Razer Cynosa Lite + Abyssus Lite Español de color negro"
  },
    {
    image : "https://http2.mlstatic.com/D_Q_NP_667712-MLA46445221923_062021-AB.webp",
    title : "Kit teclado y mous 2",
    price : 9599,
    dues: 1599.83,
    description:"Kit de teclado y mouse gamer Razer Cynosa Lite + Abyssus Lite Español de color negro"
  },
  ]
  
  items.forEach((item)=>{
    addItem(item)
  })
  
  //PRODUCT-FILTER

  const searchBtn = document.getElementById("search-button")
  searchBtn.addEventListener("click", () => {
    const searchInput = document.getElementById("search-input").value
    
    console.log(searchInput)
  })
