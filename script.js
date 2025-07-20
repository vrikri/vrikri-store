// Hero Slider Script
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

function prevSlideFunc() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(currentSlide);
}

// Event listeners
if (nextBtn && prevBtn) {
  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlideFunc);
}

// Auto-play every 5 seconds
setInterval(nextSlide, 5000);

