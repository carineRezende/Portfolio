const btnMenu = document.getElementById('btnMenu');
btnMenu.addEventListener('click', () => {
    nav.classList.toggle('active');
});

const links = document.querySelectorAll('.navbar a');
links.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});

