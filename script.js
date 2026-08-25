// Função para verificar elementos visíveis na tela (Scroll Reveal)
function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150; // Define a que distância do topo o elemento começa a aparecer

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        }
        // Opcional: Se quiser que o elemento desapareça ao rolar para cima de novo, descomente a linha abaixo:
        // else { reveals[i].classList.remove('active'); }
    }
}

// Ativa a função ao rolar a página
window.addEventListener('scroll', reveal);

// Chama a função uma vez no carregamento para mostrar o que já está visível (ex: Hero section)
reveal();

// Script simples para suavizar o clique nos links do menu (caso o CSS smooth-scroll falhe em algum navegador)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});