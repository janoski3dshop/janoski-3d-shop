// Espera o conteúdo da página carregar para executar os scripts
document.addEventListener('DOMContentLoaded', (event) => {

    // ===== LÓGICA DO SWIPER CAROUSEL =====
    // Só tenta iniciar o Swiper se o elemento existir na página (no caso, index.html)
    if (document.querySelector(".mySwiper")) {
        var swiper = new Swiper(".mySwiper", {
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            mousewheel: true,
            keyboard: true,
        });
    }


    // ===== LÓGICA DO MENU HAMBÚRGUER =====
    const btn = document.getElementById('menu-btn');
    const menu = document.getElementById('menu');

    // Verifica se os elementos do menu existem antes de adicionar o evento
    if (btn && menu) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });
    }


    // ===== LÓGICA DO DARK MODE (TEMA) =====
    const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
    const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
    const themeToggleButton = document.getElementById('theme-toggle');

    // Função para definir o ícone correto baseado no tema
    function setToggleIcon() {
        if (document.documentElement.classList.contains('dark')) {
            themeToggleLightIcon.classList.remove('hidden');
            themeToggleDarkIcon.classList.add('hidden');
        } else {
            themeToggleDarkIcon.classList.remove('hidden');
            themeToggleLightIcon.classList.add('hidden');
        }
    }
    
    // Verifica se os botões de tema existem
    if (themeToggleButton && themeToggleDarkIcon && themeToggleLightIcon) {
        setToggleIcon(); // Define o ícone correto na carga da página

        themeToggleButton.addEventListener('click', function() {
            // Inverte a classe 'dark' no elemento <html>
            document.documentElement.classList.toggle('dark');

            // Atualiza o ícone
            setToggleIcon();

            // Salva a preferência no localStorage
            if (document.documentElement.classList.contains('dark')) {
                localStorage.setItem('color-theme', 'dark');
            } else {
                localStorage.setItem('color-theme', 'light');
            }
        });
    }
});

// ...seu código de menu e dark mode...

// Inicializa a biblioteca de animação
AOS.init({
    duration: 800, // Duração da animação
    once: true,    // Anima apenas uma vez
});