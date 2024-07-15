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
