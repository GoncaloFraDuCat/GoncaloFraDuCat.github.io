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
  const carouselItems = document.querySelectorAll('.projects-box');
  const prevButton = document.getElementById('prev-button');
  const nextButton = document.getElementById('next-button');

  let currentIndex = 0;

  function updateCarousel() {
    carouselItems.forEach((item, index) => {
      item.style.display = index === currentIndex ? 'flex' : 'none';
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


// Your animation code

// function([string1, string2],target id,[color1,color2])
 consoleText(['&lt; Get to know me /&gt;', 'Hi there :)', 'Press Here to continue'], 'text',['white','silver','lightblue']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}

document.addEventListener('DOMContentLoaded', function() {
    var scrollToTopButton = document.getElementById('scroll-to-top-button');

    // Show the button when scrolling starts
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 0) { // Check if scrolled past the top
            scrollToTopButton.style.opacity = "1";
            scrollToTopButton.style.visibility = "visible";
        } else {
            scrollToTopButton.style.opacity = "0";
            scrollToTopButton.style.visibility = "hidden";
        }
    });

    // Scroll to top when the button is clicked
    scrollToTopButton.addEventListener('click', function(event) {
        window.scrollTo({top: 0, behavior: 'smooth'});
    });
});

    document.addEventListener('DOMContentLoaded', function () {
      var navbarLinks = document.querySelectorAll('.navbar-list li');
      var currentBlinkingLink = null;

      navbarLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
          e.preventDefault();

          // Stop the current blinking link
          if (currentBlinkingLink) {
            currentBlinkingLink.querySelector('.blinker').classList.remove('blinker');
          }

          // Start blinking effect on the clicked link
          var blinker = document.createElement('span');
          blinker.className = 'blinker';
          this.insertBefore(blinker, this.firstChild);

          currentBlinkingLink = this;

          setTimeout(function () {
            blinker.remove();
            currentBlinkingLink = null;
          }, 20000); // Match the animation duration (0.9s * 1000ms)
        });
      });
    });

    document.addEventListener('DOMContentLoaded', function () {
      const welcomeTitle = document.querySelector('.welcome-title');

      anime({
        targets: welcomeTitle,
        width: ['1%', '100%'],
        height: '*',
        backgroundColor: '#000000',
        opacity: [0, 1],
        duration: 4000,
        easing: 'easeInOutQuad'
      });

      setTimeout(function () {
        welcomeTitle.classList.add('expanding');
      }, 50);
    });


    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (event) {
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
