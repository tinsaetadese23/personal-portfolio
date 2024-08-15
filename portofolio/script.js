function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


let currentSlide = 0;

function navigateToSlide(index) {
  const slides = document.querySelectorAll('.carousel-slide');
  const dots = document.querySelectorAll('.dot');

  // Hide all slides and remove active class from dots
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));

  // Show the selected slide and activate the corresponding dot
  slides[index].classList.add('active');
  dots[index].classList.add('active');

  currentSlide = index;
}

// Optionally, add functionality for automatic transitions or swipe gestures here
document.addEventListener('DOMContentLoaded', function () {
  const text = "Tinsae Tadese";
  const titleElement = document.querySelector('.title');
  let index = 0;

  function typeWriter() {
    if (index === 0) {
      titleElement.innerHTML = ""; // Clear the content before starting the animation
    }

    if (index < text.length) {
      titleElement.innerHTML += text.charAt(index);
      index++;
    } else {
      setTimeout(() => {
        index = 0;
      }, 1000);
    }
  }

  setInterval(typeWriter, 200);
});

function scrollToContact() {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  toggleMenu(); // If you want to toggle the menu as well
}

function scrollToExp() {
  document.getElementById('experience').scrollIntoView({ behavior: 'smooth' });
  toggleMenu(); // If you want to toggle the menu as well
}

function scrollToProj() {
  document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  toggleMenu(); // If you want to toggle the menu as well
}