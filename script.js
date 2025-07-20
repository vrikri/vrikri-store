// === Hero Slider ===
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) slide.classList.add('active');
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

document.querySelector('.slider-btn.next').addEventListener('click', nextSlide);
document.querySelector('.slider-btn.prev').addEventListener('click', prevSlide);

// Auto-slide every 5 seconds
setInterval(nextSlide, 5000);
showSlide(currentSlide);

// === Cart Button Placeholder ===
const cartButtons = document.querySelectorAll('.product-card button');

cartButtons.forEach(button => {
  button.addEventListener('click', () => {
    alert("🛒 Item added to cart! (Functionality coming soon)");
    // You can later connect this with real cart logic or sidebar
  });
});
