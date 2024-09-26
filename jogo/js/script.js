// Toggle menu hamburguer
const menuToggle = document.querySelector('.menu-toggle');
const navUl = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    navUl.classList.toggle('show-menu');
});

// Animação ao clicar nos cards
document.querySelectorAll('.character-card').forEach(card => {
    card.addEventListener('click', () => {
        // Remove a classe 'active' dos outros cards
        document.querySelectorAll('.character-card').forEach(c => c.classList.remove('active'));

        // Adiciona a classe 'active' ao card clicado
        card.classList.add('active');
    });
});
