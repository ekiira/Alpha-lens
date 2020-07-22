const loader = document.querySelector(".loader");

// Preloader fades after 3000ms  
window.addEventListener('load', function () {
  setTimeout(() => {
    loader.className += " hidden";
  }, 2200)
});

