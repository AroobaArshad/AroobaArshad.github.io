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

var headingText = "About CodeLab";
var sentence1 = "We are a team of passionate developers.";
var sentence2 = "Come help us build the education the world deserves.";

var typingElement = document.getElementById("Typing");
var headingElement = typingElement.querySelector('h1');
var paragraphElement1 = typingElement.querySelector('#Paragraph1');
var paragraphElement2 = typingElement.querySelector('#Paragraph2');

function typeWriter(text, element, i, callback) {
    if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(function () {
            typeWriter(text, element, i, callback);
        }, 70); // Adjust typing speed here (in milliseconds)
    } else {
        callback();
    }
}

typeWriter(headingText, headingElement, 0, function() {
    typeWriter(sentence1, paragraphElement1, 0, function() {
        typeWriter(sentence2, paragraphElement2, 0, function() {
            console.log("Typing effect complete.");
            showButtonWithDelay();
        });
    });
});

function showButtonWithDelay() {
    var openPositionsBtn = document.getElementById('openPositionsBtn');
    openPositionsBtn.classList.add('fade-in');
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

  
