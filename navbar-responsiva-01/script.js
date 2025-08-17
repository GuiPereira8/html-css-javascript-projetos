const openMenu = window.document.querySelector('#abrirMenu');
const closeMenu = window.document.querySelector('#fecharMenu');

openMenu.addEventListener('click', () => {
    window.document.body.classList.toggle('mostrar-menu');
});

closeMenu.addEventListener('click', () => openMenu.click());