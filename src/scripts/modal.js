// modal.js

// Pega o modal e seus elementos
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');
const closeBtn = document.querySelector('.close');

// Para cada imagem da galeria
document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('click', function() {
        // Mostra o modal
        modal.style.display = 'block';
        
        // Coloca a imagem clicada no modal
        modalImg.src = this.src;
        
        // Pega o título correspondente e coloca no modal
        const title = this.nextElementSibling.textContent;
        modalTitle.textContent = title;
    });
});

// Fechar o modal quando clicar no X
closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Fechar o modal quando clicar fora da imagem
modal.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Fechar com a tecla ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        modal.style.display = 'none';
    }
});