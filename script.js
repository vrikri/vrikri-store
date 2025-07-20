// Dummy product list
const products = [
  { id: 1, name: "Round Wooden Tray", price: 499, image: "images/tray1.jpg", desc: "Handcrafted tray with smooth finish." },
  { id: 2, name: "Wooden Gift Box", price: 699, image: "images/box1.jpg", desc: "Great for storing or gifting." },
  { id: 3, name: "Wooden Fruit Bowl", price: 799, image: "images/bowl1.jpg", desc: "Rustic bowl made from mango wood." },
  { id: 4, name: "Rustic Wall Clock", price: 899, image: "images/clock1.jpg", desc: "Silent wall clock with charm." },
  { id: 5, name: "Mobile Stand", price: 249, image: "images/stand1.jpg", desc: "Minimalist phone holder." },
  { id: 6, name: "Coaster Set", price: 299, image: "images/coasters1.jpg", desc: "6-piece wooden coaster set." },
  { id: 7, name: "Mini Storage Box", price: 349, image: "images/box2.jpg", desc: "Store rings, coins & more." },
  { id: 8, name: "Pen Stand", price: 199, image: "images/penstand.jpg", desc: "Organize pens or tools." },
  { id: 9, name: "Decorative Lamp", price: 1299, image: "images/lamp1.jpg", desc: "Elegant handmade lamp." },
  { id: 10, name: "Wall Shelf", price: 1099, image: "images/shelf1.jpg", desc: "Add style to your space." },
];

// Load product.html content
if (location.pathname.includes("product.html")) {
  const id = new URLSearchParams(location.search).get("id");
  const product = products.find(p => p.id == id);
  const container = document.getElementById("product-detail");
  if (product && container) {
    container.innerHTML = `
      <div class="product-card">
        <img src="${product.image}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p>${product.desc}</p>
        <p><strong>₹${product.price}</strong></p>
        <button onclick="addToCart(${product.id})" class="btn">Add to Cart</button>
      </div>
    `;
  }
}

// Cart logic
function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(id);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart!");
}

// Show cart
if (location.pathname.includes("cart.html")) {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  const container = document.getElementById("cart");
  if (container) {
    if (cartItems.length === 0) {
      container.innerHTML = "<p>Your cart is empty.</p>";
    } else {
      const grouped = {};
      cartItems.forEach(id => {
        grouped[id] = (grouped[id] || 0) + 1;
      });
      container.innerHTML = Object.entries(grouped).map(([id, qty]) => {
        const p = products.find(prod => prod.id == id);
        return `
          <div class="product-card">
            <img src="${p.image}" alt="${p.name}">
            <h3>${p.name}</h3>
            <p>Quantity: ${qty}</p>
            <p>Total: ₹${p.price * qty}</p>
          </div>
        `;
      }).join("");
    }
  }
}
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Auto-slide
setInterval(nextSlide, 4000);

// Initial slide
showSlide(slideIndex);
