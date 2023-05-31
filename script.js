window.onload = () => {
  const transition_el = document.querySelector('.transition');
  const anchors = document.querySelector('a')

  setTimeout (() => {
    transition_el.classList.remove('is-active');
  }, 500);

  for (let i = 0; i < anchors.length; i++) {
    const anchor = anchors(i); 

    anchor.addEventListener('click', e => {
      e.preventDefault();
      let target = e.target.href;

      transition_el.classList.add('is-active');

      setTimeout (() => {
        window.location.href = target;
      }, 500);
    });
  }
}

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}

// Change the image source and update the selected statement
function changeImage(imageSrc, statementId) {
    document.getElementById('image').src = imageSrc;
    
    // Remove the 'selected' class from all statements
    var statements = document.getElementsByClassName('statement');
    for (var i = 0; i < statements.length; i++) {
        statements[i].classList.remove('selected');
    }
    
    // Add the 'selected' class to the clicked statement
    document.getElementById(statementId).classList.add('selected');
}

// Get the button container
var buttonContainer = document.querySelector('.button-container');

// Create an array of button labels
var buttonLabels = ['Python Compiler', 'Swift Compiler', 'C++ Compiler', 'PHP Compiler', 'Java Compiler', 'C# Compiler'];

// Loop through the button labels and create buttons
buttonLabels.forEach(function(label) {
    var button = document.createElement('custom-button');
    button.className = 'custom-button'; // Change the class name here
  
    var icon = document.createElement('i');
    icon.className = 'fas fa-chevron-right'; // Add the desired Font Awesome class for the arrow icon
  
    button.appendChild(icon);
    button.appendChild(document.createTextNode(label));
    buttonContainer.appendChild(button);
});

window.addEventListener("scroll", slideImages);

function slideImages() {
    var imageSection = document.getElementById("image-section");
    var slideContainer = document.querySelector(".slide-container");
    var images = document.querySelectorAll(".slide");
    var sectionTop = imageSection.offsetTop;
    var sectionHeight = imageSection.offsetHeight;
    var slideInAt = window.scrollY + window.innerHeight - sectionHeight / 2;
    var sectionBottom = sectionTop + sectionHeight;
    var isHalfShown = slideInAt > sectionTop;
    var isNotScrolledPast = window.scrollY < sectionBottom;
  
    if (isHalfShown && isNotScrolledPast) {
      slideContainer.style.transform = "translateX(0)";
      images.forEach(function (image) {
        image.style.transitionDelay = "0s"; // Set the transition delay to 0s for all images
      });
    } else {
      slideContainer.style.transform = "translateX(-100%)";
      images.forEach(function (image) {
        image.style.transitionDelay = "0.5s";
      });
    }
}
  

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
}

window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();

function animateValue(element, start, end, duration) {
  let current = start;
  const range = end - start;
  const increment = end > start ? 1 : -1;
  const stepTime = Math.abs(Math.floor(duration / range / 4)); // Adjust the division factor as needed
  const timer = setInterval(() => {
    current += increment;
    element.textContent = current;
    if (current === end) {
      clearInterval(timer);
    }
  }, stepTime);
}

function startCounting() {
  const counters = document.querySelectorAll('.count');
  counters.forEach((counter) => {
    const target = parseInt(counter.getAttribute('data-target'));
    animateValue(counter, 0, target, 2000); // Adjust the duration (in milliseconds) as needed
  });
}

function handleScroll() {
  const statisticsSection = document.querySelector('.statistics');
  const sectionPosition = statisticsSection.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.5; // Adjust the fraction as needed
  if (sectionPosition < screenPosition) {
    startCounting();
    window.removeEventListener('scroll', handleScroll);
  }
}

window.addEventListener('scroll', handleScroll);




  
  
  