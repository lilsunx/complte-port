document.addEventListener('DOMContentLoaded', function() {
    // Offset active menu item on click
    document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
      link.addEventListener('click', () => {
        const navbarCollapse = document.querySelector('.offcanvas.show');
        if (navbarCollapse) {
          navbarCollapse.classList.remove('show');
        }
      });
    });
});

//chat gpt image slide code 

// JavaScript for automatic image slider
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');

let currentIndex = 0;

function nextSlide() {
    slides[currentIndex].classList.remove('transition');
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add('transition');
    slider.style.transform = `translateX(-${currentIndex * 200}px)`;
}

setInterval(nextSlide, 3000); // Change image every 2 seconds (2000 milliseconds)
