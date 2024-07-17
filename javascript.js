// Function to check if smooth scrolling is supported
function supportsSmoothScroll() {
    return 'scrollBehavior' in document.documentElement.style;
}

// Polyfill for smooth scrolling if not supported
if (!supportsSmoothScroll()) {
    document.body.classList.add('no-smooth-scroll');
}

// Smooth scrolling functionality


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const href = this.getAttribute('href');
        const offsetTop = document.querySelector(href).offsetTop;
        const navbarHeight = document.querySelector('.navbar').offsetHeight;

        window.scroll({
            top: offsetTop - navbarHeight,
            behavior: 'smooth'
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
  const carouselItems = document.querySelectorAll('.projects-carousel .projects-box-1 .projects-box-2');
  const prevButton = document.getElementById('prev-button');
  const nextButton = document.getElementById('next-button');

  let currentIndex = 0;

  function updateCarousel() {
    carouselItems.forEach((item, index) => {
      item.style.display = index === currentIndex ? 'block' : 'none';
    });
  }

  prevButton.addEventListener('click', function() {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : carouselItems.length - 1;
    updateCarousel();
  });

  nextButton.addEventListener('click', function() {
    currentIndex = currentIndex < carouselItems.length - 1 ? currentIndex + 1 : 0;
    updateCarousel();
  });

  // Initialize the carousel
  updateCarousel();
});
