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

document.addEventListener("DOMContentLoaded", function() {
  var collapsibles = document.getElementsByClassName("collapsible");
  
  for (var i = 0; i < collapsibles.length; i++) {
    collapsibles[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.querySelector(".Intro");
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }
});


  