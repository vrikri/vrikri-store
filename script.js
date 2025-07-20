// script.js

let cart = [];

function addToCart(name, price) {
  cart.push({ name, price: parseInt(price) });
  updateCart();
  openCart();
}

function updateCart() {
  const cartItems = document.getElementById("cartItems");
  const cartTotal = document.getElementById("cartTotal");

  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    const div = document.createElement("div");
    div.textContent = `${item.name} - ₹${item.price}`;
    cartItems.appendChild(div);
    total += item.price;
  });

  cartTotal.textContent = total;
}

function openCart() {
  document.getElementById("cartSidebar").classList.add("open");
}

function closeCart() {
  document.getElementById("cartSidebar").classList.remove("open");
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".add-to-cart").forEach(btn => {
    btn.addEventListener("click", () => {
      const name = btn.dataset.name;
      const price = btn.dataset.price;
      addToCart(name, price);
    });
  });

  document.querySelectorAll(".cart-btn").forEach(btn => {
    btn.addEventListener("click", openCart);
  });
});
