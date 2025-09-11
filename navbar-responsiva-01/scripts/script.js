//mostrarMenu
const buttonAbrir = document.querySelector('button#buttonAbrir');
const buttonFechar = document.querySelector('button#buttonFechar');

buttonAbrir.addEventListener('click', () => {
    document.body.classList.toggle('mostrarMenu');
});
buttonFechar.addEventListener('click', () => buttonAbrir.click());