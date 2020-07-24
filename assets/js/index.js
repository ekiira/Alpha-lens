const loader = document.querySelector(".loader");

// Preloader fades after 500ms  
window.addEventListener('load', function () {
  setTimeout(() => {
    loader.className += " hidden";
  }, 500)
});
