/* Velge elementer */

const productListEl = document.getElementById("product-list");
const cartItemsEl = document.getElementById("cart-items");
const totalEl = document.getElementById("total-price");
const checkoutBtn = document.getElementById("checkout-btn");

/* Deklarerer en tom liste cartItems som skal inneholde produktene som er lagt til i handlekurven. */

let cartItems = [];

/* Funksjonen som tar inn et produktobjekt som parameter, oppretter HTML-elementer som representerer produktet, og legger dem til i produktlisten. */

function renderProduct(product) {
  const productEl = document.createElement("div");
  productEl.classList.add("product");

  const nameEl = document.createElement("h3");
  nameEl.innerText = product.name;
  productEl.appendChild(nameEl);

  const descEl = document.createElement("p");
  descEl.innerText = product.description;
  productEl.appendChild(descEl);

  const priceEl = document.createElement("p");
  priceEl.innerText = `${product.price} kr`;
  productEl.appendChild(priceEl);
  

  const btnEl = document.createElement("button");
  btnEl.innerText = "Legg til i handlekurv";
  btnEl.addEventListener("click", () => {
    addToCart(product);
  });
  productEl.appendChild(btnEl);

  productListEl.appendChild(productEl);
}

/* Funksjonen som oppdaterer handlekurvlisten og totalprisen basert på innholdet i cartItems. */

function renderCart() {
  cartItemsEl.innerHTML = "";
  cartItems.forEach((item) => {
    const liEl = document.createElement("li");
    liEl.innerText = ` ${item.name} - ${item.price} kr `;
    cartItemsEl.appendChild(liEl);
      const removeBtnEl = document.createElement("button");
      removeBtnEl.innerText = " X ";
      removeBtnEl.addEventListener("click", () => {
        removeFromCart(item.id);
      });
      liEl.appendChild(removeBtnEl);
  });




  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);
  totalEl.innerText = totalPrice;
}

/* Funksjonen som legger et produkt til handlekurven. Hvis produktet allerede finnes i handlekurven, øker den mengden av produktet med 1. Ellers legger den til produktet i handlekurven med en mengde på 1. */

function addToCart(product) {
  const itemInCart = cartItems.find((item) => item.id === product.id);

  if (itemInCart) {
    itemInCart.quantity++;
  } else {
    cartItems.push({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
    });
  }

  renderCart();
}




/* Funksjonen som fjerner et produkt fra handlekurven basert på produktets ID. */
function removeFromCart(id) {
  const index = cartItems.findIndex((item) => item.id === id);

  if (index !== -1) {
    cartItems.splice(index, 1);
    renderCart();
  }
}




/* function removeFromCart(productId) {
  cartItems = cartItems.filter((item) => item.id !== productId);
  
  renderCart();
} */

/* Går gjennom hvert produkt i products-arrayet og kaller renderProduct-funksjonen for å vise produktet i produktlisten. */

products.forEach((product) => {
  renderProduct(product);
});


/*  Legger til en hendelseslytter på utsjekkingsknappen som viser en melding ved klikk på knappen. */

checkoutBtn.addEventListener("click", () => {
  alert("Takk for handelen!");
});


