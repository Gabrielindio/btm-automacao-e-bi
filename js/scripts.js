/* =========================================
   LÓGICA DO MENU HAMBURGUER (MOBILE)
   ========================================= */
document.addEventListener('DOMContentLoaded', () => {
    
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    // Verifica se os elementos existem na página para evitar erros
    if (hamburger && navMenu) {
        
        // Evento de abrir/fechar o menu ao clicar no ícone
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        });

        // Evento de fechar o menu ao clicar em qualquer link
        document.querySelectorAll(".nav-menu a").forEach(n => n.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        }));
    }
});