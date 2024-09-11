document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("header-content");
  console.log("DOM completamente carregado e analisado");

  window.addEventListener("scroll", function () {
    console.log("ScrollY:", window.scrollY);
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
      console.log("Classe 'scrolled' adicionada");
    } else {
      header.classList.remove("scrolled");
      console.log("Classe 'scrolled' removida");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".product");
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? "block" : "none";
    });
  }

  document.getElementById("prev-btn").addEventListener("click", function () {
    currentIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    showSlide(currentIndex);
  });

  document.getElementById("next-btn").addEventListener("click", function () {
    currentIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    showSlide(currentIndex);
  });

  // Mostrar o primeiro slide inicialmente
  showSlide(currentIndex);
});
