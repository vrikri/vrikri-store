const products = [
  { name: "Wooden Coasters", price: 299, image: "https://via.placeholder.com/200x180?text=Coasters" },
  { name: "Carved Wooden Box", price: 499, image: "https://via.placeholder.com/200x180?text=Box" },
  { name: "Wooden Photo Frame", price: 349, image: "https://via.placeholder.com/200x180?text=Frame" },
  { name: "Spoon Set", price: 199, image: "https://via.placeholder.com/200x180?text=Spoons" },
];

let cart = [];

function loadProducts() {
  const list = document.getElementById("product-list");
  products.forEach((product, index) => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <button onclick="addToCart(${index})">Add to Cart</button>
    `;
    list.appendChild(div);
  });
}

function addToCart(index) {
  cart.push(products[index]);
  updateCart();
}

function updateCart() {
  document.getElementById("cart-count").innerText = cart.length;
  const cartList = document.getElementById("cart-items");
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  cartList.innerHTML = "";
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ₹${item.price}`;
    cartList.appendChild(li);
  });
  document.getElementById("cart-total").innerText = total;
}

function toggleCart() {
  document.getElementById("cart").classList.toggle("hidden");
}

function checkout() {
  alert("Thank you for shopping with Vrikri!");
  cart = [];
  updateCart();
  toggleCart();
}

loadProducts();
