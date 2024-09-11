let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Esconde todas as imagens
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 } // Reinicia o índice se passar do número de slides
    slides[slideIndex - 1].style.display = "block"; // Mostra a imagem atual
    setTimeout(showSlides, 3000); // Troca de imagem a cada 3 segundos
}
