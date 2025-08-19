const buttonAbirMenu = window.document.querySelector("#abrirMenu");
const buttonFecharMenu = window.document.querySelector("#fecharMenu");

buttonAbirMenu.addEventListener('click', () => {
    window.document.body.classList.toggle('mostrarMenu');
});
buttonFecharMenu.addEventListener('click', () => buttonAbirMenu.click());